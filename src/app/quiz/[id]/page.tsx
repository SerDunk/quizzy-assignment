import QuizQuestion from "@/components/QuizQuestion";
import GetQuiz from "../getQuiz";
import { Key } from "react";

export default async function QuestionPage() {
  const questions = await GetQuiz();
  const questionArray = questions.questions;
  console.log(questionArray);
  return (
    <div className="flex flex-col gap-4 w-full">
      {questionArray.map(
        (question: {
          id: Key | null | undefined;
          description: string;
          detailedSolution: string;
          options: object[];
        }) => {
          return (
            <div key={question.id}>
              <QuizQuestion
                description={question.description}
                detailedSolution={question.detailedSolution}
                options={question.options}
              />
            </div>
          );
        }
      )}
    </div>
  );
}
