import ProjectCard from "@/components/ProjectCard";
import { TypingAnimation } from "@/components/ui/typing-animation";
import { StepBack, StepForward } from "lucide-react";
import Link from "next/link";

export default function Projects() {
  return (
    <main className="min-h-screen w-full flex flex-col items-center p-4 md:p-8">
      <div className="flex gap-2">
        <Link
          href={"/"}
          className="h-10 w-10 border rounded-full p-3 flex items-center justify-center text-neutral-400 hover:bg-slate-600"
        >
          <StepBack />
        </Link>
        <Link
          href={"/contact"}
          className="h-10 w-10 border rounded-full p-3 flex items-center justify-center text-neutral-400 hover:bg-slate-600"
        >
          <StepForward />
        </Link>
      </div>
      <div className="max-w-5xl w-full lg:my-40 my-16">
        <TypingAnimation
          className="mb-10 text-3xl font-bold text-black dark:text-white"
          text="Projects"
        />
        <ProjectCard />
      </div>
    </main>
  );
}
