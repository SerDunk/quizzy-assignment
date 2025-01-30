import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

export default function QuizQuestion() {
  return (
    <div>
      <Card className="w-[300px] text-center">
        <CardHeader>
          <CardTitle>Question</CardTitle>
        </CardHeader>
        <CardContent className="">
          <CardDescription>Answer</CardDescription>
        </CardContent>
      </Card>
    </div>
  );
}
