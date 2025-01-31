import QuizQuestion from "@/components/QuizQuestion";
import GetQuiz from "../getQuiz";
import { Key } from "react";
import SubmitQuizButton from "@/components/SubmitQuizButton";

export default async function QuestionPage() {
  const questions = await GetQuiz();
  const questionArray = questions.questions;

  return (
    <div className="flex flex-col gap-4 w-full">
      {questionArray.map(
        (question: {
          id: Key | null | undefined;
          description: string;
          detailed_solution: string;
          options: { id: string; description: string; is_correct: boolean }[];
        }) => (
          <QuizQuestion
            key={question.id}
            questionId={question.id as string}
            description={question.description}
            detailedSolution={question.detailed_solution}
            options={question.options}
          />
        )
      )}
      <SubmitQuizButton />
    </div>
  );
}
