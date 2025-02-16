"use client";

import { CheckCircle2, XCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { CardContent, CardFooter } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";

export default function QuizResult({
  result,
  hideStartNew = false,
  onStartNew,
}) {
  if (!result) return null;

  return (
    <div className="mx-auto">
      <h1 className="text-center text-2xl font-bold mb-6">
        {/* <Trophy className="h-5 w-5 text-amber-500" /> */}
        Result
      </h1>

      <CardContent className="space-y-6">
        {/* Score Overview */}
        <div className="text-center space-y-2">
          <h3 className="text-2xl font-bold">{result.quizScore.toFixed(1)}%</h3>
          <Progress value={result.quizScore} className="w-full" />
        </div>

        {/* Improvement Tip */}
        {result.improvementTip && (
          <div className="bg-muted p-4 rounded-lg">
            <p className="font-medium">Improvement Tip</p>
            <p className="text-muted-foreground">{result.improvementTip}</p>
          </div>
        )}

        {/* Questions Review */}
        <div className="space-y-4">
          <h3 className="font-medium">Question Review</h3>
          {result.questions.map((q, index) => (
            <div key={index} className="border rounded-lg p-4 space-y-2">
              <div className="flex items-start justify-between gap-2">
                <p className="font-medium">{q.question}</p>
                {q.isCorrect ? (
                  <CheckCircle2 className="h-5 w-5 text-green-500 flex-shrink-0" />
                ) : (
                  <XCircle className="h-5 w-5 text-red-500 flex-shrink-0" />
                )}
              </div>
              <div className="text-sm text-muted-foreground py-2">
                <p className="pb-1">
                  <b>Your answer:</b> {q.userAnswer}
                </p>
                {!q.isCorrect && (
                  <p>
                    <b>Correct answer:</b> {q.answer}
                  </p>
                )}
              </div>
              <div className="text-sm bg-muted p-2 rounded">
                <p className="font-medium">Explanation</p>
                <p
                  className="text-muted-foreground"
                  style={{ fontSize: "13px" }}
                >
                  {/* {q.explanation} */}
                  {q.explanation.split(/(?=For example)/i)[0]}
                  {q.explanation.split(/(?=For example)/i)[1]}
                </p>
              </div>
            </div>
          ))}
        </div>
      </CardContent>

      {!hideStartNew && (
        <CardFooter className="">
          <Button onClick={onStartNew} className="buttonn-effect">
            Start New Quiz
          </Button>
        </CardFooter>
      )}
    </div>
  );
}
