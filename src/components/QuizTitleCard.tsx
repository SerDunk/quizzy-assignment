"use client";
import { useEffect, useState } from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function QuizTitleCard({
  title,
  topic,
}: {
  title: string;
  topic: string;
}) {
  const [previousScore, setPreviousScore] = useState<string | null>(null);
  const [totalPossibleScore, setTotalPossibleScore] = useState<number>(0);

  useEffect(() => {
    setPreviousScore(localStorage.getItem("previousScore"));
    setTotalPossibleScore(10 * 4);
    localStorage.setItem("quizScores", JSON.stringify({}));
  }, []);

  return (
    <Card className="w-[300px] text-center">
      <CardHeader>
        <CardTitle>{title}</CardTitle>
        <CardDescription>{topic}</CardDescription>
        {previousScore && (
          <p>
            Previous Score: {previousScore} / {totalPossibleScore}
          </p>
        )}
      </CardHeader>
      <CardContent className="flex flex-col gap-4">
        <div className="flex flex-col gap-2 text-sm">
          <div className="text-green-400 w-[250px]">
            +4 point per correct answer
          </div>
          <div className="text-red-400 w-[250px]">
            -1 point per incorrect answer
          </div>
          <div>50/50 only gives +2 points</div>
        </div>
        <Link href="/quiz/1">
          <Button>Start Quiz</Button>
        </Link>
      </CardContent>
    </Card>
  );
}
