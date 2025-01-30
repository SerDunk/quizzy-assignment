import QuizTitleCard from "@/components/QuizTitleCard";
import GetQuiz from "./getQuiz";

export default async function Quiz() {
  const questions = await GetQuiz();

  const questionsArray = questions.questions;
  console.log(questionsArray);
  return (
    <div>
      <QuizTitleCard
        title={questions.title}
        topic={questions.topic}
        id={questionsArray[0].id}
      />
    </div>
  );
}
