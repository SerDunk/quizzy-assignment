"use client";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";

interface StoredScores {
  [key: string]: number;
}

export default function SubmitQuizButton() {
  const router = useRouter();
  const [score, setScore] = useState<number | null>(null);
  const [totalPossibleScore, setTotalPossibleScore] = useState<number>(0);

  const handleSubmit = () => {
    // Get the stored quizScores from localStorage
    const storedScores = localStorage.getItem("quizScores");
    if (!storedScores) {
      // If no quiz scores, initialize quizScores to an empty object
      localStorage.setItem("quizScores", JSON.stringify({}));
    }

    // Parse the quizScores and calculate the final score
    const parsedScores: StoredScores = JSON.parse(
      localStorage.getItem("quizScores") || "{}"
    );
    const finalScore = Object.values(parsedScores).reduce(
      (sum, num) => sum + num,
      0
    );

    setScore(finalScore);
    setTotalPossibleScore(10 * 4);
    if (score !== null) {
      // Update the previousScore before resetting quizScores
      localStorage.setItem("previousScore", score.toString());
      // Redirect to another page (e.g., results page)
      router.push("/quiz");
    }
  };

  return (
    <div className="flex flex-col justify-center items-center my-6">
      <Button onClick={handleSubmit} className="w-28">
        Submit Quiz
      </Button>
      {score !== null && (
        <p className="mt-4">
          Total Score: {score} / {totalPossibleScore}
        </p>
      )}
    </div>
  );
}
