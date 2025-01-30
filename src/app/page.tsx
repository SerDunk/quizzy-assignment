import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function Home() {
  return (
    <div className="flex justify-center items-center flex-col h-full gap-4">
      <div>
        <h1 className="text-6xl font-bold">Quizzzy</h1>
      </div>
      <div>
        <p className="text-xl font-semibold">
          Test your knowledge with Quizzzy
        </p>
      </div>
      <div>
        <Link href="/quiz">
          <Button>Get Started</Button>
        </Link>
      </div>
    </div>
  );
}
