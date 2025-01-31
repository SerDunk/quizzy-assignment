import QuizTitleCard from "@/components/QuizTitleCard";
import GetQuiz from "./getQuiz";

export default async function Quiz() {
  const questions = await GetQuiz();

  return (
    <div>
      <QuizTitleCard title={questions.title} topic={questions.topic} />
    </div>
  );
}
