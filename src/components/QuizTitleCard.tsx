"use client";

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "./ui/button";
import { useRouter } from "next/navigation";

export default function QuizTitleCard({
  title,
  topic,
  id,
}: {
  title: string;
  topic: string;
  id: number;
}) {
  const router = useRouter();
  const onClick = () => {
    router.push(`/quiz/${id}`);
  };
  return (
    <Card className="w-[300px] text-center">
      <CardHeader>
        <CardTitle>{title}</CardTitle>
        <CardDescription>{topic}</CardDescription>
      </CardHeader>
      <CardContent className="">
        <Button onClick={onClick}>Start Quiz</Button>
      </CardContent>
    </Card>
  );
}
