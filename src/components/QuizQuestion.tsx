"use client";
import { useState } from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "./ui/accordion";

export default function QuizQuestion({
  questionId,
  description,
  detailedSolution,
  options,
}: {
  questionId: string;
  description: string;
  detailedSolution: string;
  options: { id: string; description: string; is_correct: boolean }[];
}) {
  const [selectedOptionId, setSelectedOptionId] = useState<string | null>(null);
  const [usedFiftyFifty, setUsedFiftyFifty] = useState(false);
  const [disabledOptions, setDisabledOptions] = useState<string[]>([]);

  const handleOptionSelect = (optionId: string) => {
    if (!disabledOptions.includes(optionId)) {
      setSelectedOptionId(optionId);
      const isCorrect = options.find(
        (option) => option.id === optionId
      )?.is_correct;
      updateScore(isCorrect, usedFiftyFifty);
    }
  };

  const handleFiftyFifty = () => {
    if (!usedFiftyFifty) {
      const incorrectOptions = options.filter((option) => !option.is_correct);
      const randomIncorrect = incorrectOptions
        .sort(() => 0.5 - Math.random())
        .slice(0, 2)
        .map((option) => option.id);
      setDisabledOptions(randomIncorrect);
      setUsedFiftyFifty(true);
    }
  };

  const updateScore = (
    isCorrect: boolean | undefined,
    usedFiftyFifty: boolean
  ) => {
    const storedScores = JSON.parse(localStorage.getItem("quizScores") || "{}");
    const currentScore = storedScores[questionId] || 0;

    let scoreChange = 0;
    if (isCorrect !== undefined) {
      scoreChange = isCorrect ? (usedFiftyFifty ? 2 : 4) : -1;
    }

    // Update score for the current question
    storedScores[questionId] = currentScore + scoreChange;
    localStorage.setItem("quizScores", JSON.stringify(storedScores));
  };

  return (
    <div className="flex flex-col justify-center items-center">
      <Card className="text-center my-6 w-3/4 sm:text-lg text-[12px]">
        <CardHeader className="flex flex-col justify-center items-center">
          <CardTitle className="sm:w-[700px]">{description}</CardTitle>
        </CardHeader>
        <CardContent>
          <CardDescription className="flex flex-col justify-center items-center">
            {options.map((option) => (
              <button
                key={option.id}
                onClick={() => handleOptionSelect(option.id)}
                disabled={disabledOptions.includes(option.id)}
                className={`p-2 my-2 border rounded w-[150px] sm:w-[500px] ${
                  disabledOptions.includes(option.id)
                    ? "bg-red-100 border-red-500 cursor-not-allowed"
                    : selectedOptionId
                    ? option.is_correct
                      ? "bg-green-100 border-green-500"
                      : selectedOptionId === option.id
                      ? "bg-red-100 border-red-500"
                      : "bg-white border-gray-300"
                    : "bg-white border-gray-300"
                }`}
              >
                {option.description}
              </button>
            ))}
          </CardDescription>
          {!usedFiftyFifty && (
            <Button onClick={handleFiftyFifty} className="mt-4">
              50/50
            </Button>
          )}
          {selectedOptionId && (
            <div className="mt-4 flex flex-col justify-center items-center">
              <Accordion type="single" collapsible>
                <AccordionItem value="item-1">
                  <AccordionTrigger>Detailed Solution</AccordionTrigger>
                  <AccordionContent>{detailedSolution}</AccordionContent>
                </AccordionItem>
              </Accordion>
            </div>
          )}
        </CardContent>
      </Card>
    </div>
  );
}
