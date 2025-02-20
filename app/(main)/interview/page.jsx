import { getAssessments } from "@/actions/interview";
import StatisticsCard from "./_components/statistics-cards";
import PerformanceChart from "./_components/performace-chart";
import QuizList from "./_components/quiz-list";

export const metadata = {
  title: "Aspiro AI | Interview Preparation",
};

export default async function InterviewPrepPage() {
  const assessments = await getAssessments();

  return (
    <div className="container mx-auto py-6">
      <div className="flex items-center justify-between mb-5">
        <h1 className="text-3xl md:text-4xl font-bold">
          Interview Preparation
        </h1>
      </div>
      <div className="space-y-6">
        <StatisticsCard assessments={assessments} />
        <PerformanceChart assessments={assessments} />
        <QuizList assessments={assessments} />
      </div>
    </div>
  );
}
