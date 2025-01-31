"use client";

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { useState } from "react";
import { Button } from "./ui/button";

export default function QuizQuestion({
  description,
  detailedSolution,
  options,
}: {
  description: string;
  detailedSolution: string;
  options: object[];
}) {
  const [selectedOptionId, setSelectedOptionId] = useState<string | null>(null);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleOptionSelect = (optionId: string) => {
    if (!isSubmitted) {
      setSelectedOptionId(optionId);
    }
  };

  const handleSubmit = () => {
    setIsSubmitted(true);
  };

  const selectedOption = options.find(
    (option) => option.id === selectedOptionId
  );
  const isCorrect = selectedOption ? selectedOption.is_correct : false;

  return (
    <div>
      <Card className="text-center my-6">
        <CardHeader className="flex flex-col justify-center items-center">
          <CardTitle className="sm:w-[700px]">{description}</CardTitle>
        </CardHeader>
        <CardContent>
          <CardDescription className="flex flex-col justify-center items-center">
            {options.map((option) => (
              <button
                key={option.id}
                onClick={() => handleOptionSelect(option.id)}
                disabled={isSubmitted}
                className={`p-2 my-2 border rounded sm:w-[500px] ${
                  selectedOptionId === option.id
                    ? "bg-blue-100 border-blue-500"
                    : "bg-white border-gray-300"
                } ${
                  isSubmitted && option.is_correct
                    ? "bg-green-100 border-green-500"
                    : ""
                }`}
              >
                {option.description}
              </button>
            ))}
          </CardDescription>
          {!isSubmitted && selectedOptionId && (
            <Button onClick={handleSubmit} className="mt-4">
              Submit
            </Button>
          )}
          {isSubmitted && (
            <div className="mt-4">
              {isCorrect ? (
                <p className="text-green-600">Correct! 🎉</p>
              ) : (
                <p className="text-red-600">Incorrect! 😢</p>
              )}
              <p className="text-sm text-gray-600">{detailedSolution}</p>
            </div>
          )}
        </CardContent>
      </Card>
    </div>
  );
}
