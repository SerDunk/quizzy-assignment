"use client";

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "./ui/button";
import Link from "next/link";

export default function QuizTitleCard({
  title,
  topic,
}: {
  title: string;
  topic: string;
}) {
  return (
    <Card className="w-[300px] text-center">
      <CardHeader>
        <CardTitle>{title}</CardTitle>
        <CardDescription>{topic}</CardDescription>
      </CardHeader>
      <CardContent>
        <Link href="/quiz/1">
          <Button>Start Quiz</Button>
        </Link>
      </CardContent>
    </Card>
  );
}
