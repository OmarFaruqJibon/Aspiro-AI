"use server";

import { db } from "@/lib/prisma";
import { auth } from "@clerk/nextjs/server";
import { GoogleGenerativeAI } from "@google/generative-ai";

const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);
const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });

export async function generateQuiz() {
    const { userId } = await auth();
    if (!userId) throw new Error("Unauthorized");

    const user = await db.user.findUnique({
        where: { clerkUserId: userId },
    });

    if (!user) throw new Error("User not found");

    try {
        const prompt = `
        Generate 5 technical interview questions for a ${user.industry} professional
        ${user.skills?.length ? ` with expertise in ${user.skills.join(", ")}` : ""}.

        Each question should be multiple choice with 4 options.
        There should be an explanation for each question if possible. The explanation should be extensive
        (50 words), easy to understand, and include an example or code snippet where applicable.

        Return the response in JSON format ONLY:
        {
          "questions": [
            {
              "question": "string",
              "options": ["string", "string", "string", "string"],
              "correctAnswer": "string",
              "explanation": "string"
            }
          ]
        }
        `;

        // Add timeout handling
        const controller = new AbortController();
        const timeout = setTimeout(() => controller.abort(), 20000); // 20s timeout

        const result = await model.generateContent(prompt, { signal: controller.signal });

        clearTimeout(timeout);

        if (!result.response) throw new Error("No response from Gemini API");

        const text = result.response.text().trim();

        let jsonMatch = text.match(/\{[\s\S]*\}/); // Extract JSON content
        if (!jsonMatch) {
            console.error("Error: Gemini response did not contain JSON:", text);
            throw new Error("Invalid JSON format from AI response");
        }

        let quiz;
        try {
            quiz = JSON.parse(jsonMatch[0]); // Parse only the extracted JSON
        } catch (error) {
            console.error("Error parsing JSON from Gemini:", jsonMatch[0]);
            throw new Error("Invalid JSON format from AI response");
        }

        return quiz.questions;

    } catch (error) {
        console.error("Error generating quiz:", error);
        throw new Error("Failed to generate quizzes");
    }
}

export async function saveQuizResult(questions, answers, score) {
    const { userId } = await auth();
    if (!userId) throw new Error("Unauthorized");

    const user = await db.user.findUnique({
        where: { clerkUserId: userId },
    });

    if (!user) throw new Error("User not found");

    const questionResults = questions.map((q, index) => ({
        question: q.question,
        answer: q.correctAnswer,
        userAnswer: answers[index],
        isCorrect: q.correctAnswer === answers[index],
        explanation: q.explanation,
    }));

    const wrongAnswers = questionResults.filter((q) => !q.isCorrect);

    let improvementTip = null;
    if (wrongAnswers.length > 0) {
        const wrongQuestionsText = wrongAnswers
            .map((q) => `Question: "${q.question}"\nCorrect Answer: "${q.answer}"\nUser Answer: "${q.userAnswer}"`)
            .join("\n\n");

        const improvementPrompt = `
        The user got the following ${user.industry} technical interview questions wrong:

        ${wrongQuestionsText}

        Based on these mistakes, provide a concise, specific improvement tip.
        Focus on the knowledge gaps revealed by these wrong answers.
        Keep the response under 3 sentences and make it encouraging.
        Don't explicitly mention the mistakes, instead focus on what to learn/practice.
        `;

        try {
            const tipResult = await model.generateContent(improvementPrompt);
            improvementTip = tipResult.response.text().trim();
        } catch (error) {
            console.error("Error generating improvement tip:", error);
        }
    }

    try {
        const assessment = await db.assessment.create({
            data: {
                userId: user.id,
                quizScore: score,
                questions: questionResults,
                category: "Technical",
                improvementTip,
            },
        });

        return assessment;
    } catch (error) {
        console.error("Error saving quiz result:", error);
        throw new Error("Failed to save quiz result");
    }
}

export async function getAssessments() {
    const { userId } = await auth();
    if (!userId) throw new Error("Unauthorized");

    const user = await db.user.findUnique({
        where: { clerkUserId: userId },
    });

    if (!user) throw new Error("User not found");

    try {
        const assessments = await db.assessment.findMany({
            where: { userId: user.id },
            orderBy: { createdAt: "asc" },
        });

        return assessments;
    } catch (error) {
        console.error("Error fetching assessments:", error);
        throw new Error("Failed to fetch assessments");
    }
}
