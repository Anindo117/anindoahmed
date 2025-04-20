import { Skills } from "@/components/logos";
import { MenuBar } from "@/components/menu-bar";
import { NewProject } from "@/components/NewProject";
import ProjectCard from "@/components/ProjectCard";
import Services from "@/components/Services";
import { ThemeToggle } from "@/components/theme-toggle";
import { Button } from "@/components/ui/button";
import { Particles } from "@/components/ui/particles";
import { SaveButton } from "@/components/ui/save-button";
import { Spotlight } from "@/components/ui/spotlight";
import { ChevronsRight, MoveUpRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { FaFacebookF, FaGithub, FaLinkedinIn } from "react-icons/fa";

export default function Home() {
  return (
    <div className="container mx-auto">
      <div className="flex flex-col lg:items-center items-start justify-center p-4 sticky top-0">
        <MenuBar />
        <ThemeToggle />
      </div>
      <Particles
        className="absolute inset-0 -z-10 animate-fade-in"
        quantity={600}
        ease={40}
        color="var(--foreground)"
        vx={0.1}
        vy={0.1}
      />
      <main className="min-h-[90vh] flex flex-col lg:flex-row items-center justify-between p-4">
        <div>
          <h1 className="text-3xl md:text-5xl font-bold bg-clip-text transition-colors ">
            Hello, <br /> <span>I&apos;m Anindo Ahmed</span>
          </h1>
          <p className="mt-4 md:text-xl text-gray-600 dark:text-gray-400">
            Passionate Front-End Web Developer & Software Engineer. <br />
            <span className="my-6 text-base md:max-w-2xl mx-auto">
              I build exceptional and accessible digital experiences for the
              web.
            </span>
          </p>
          <p className="my-6 text-gray-700 dark:text-gray-300 max-w-2xl mx-auto"></p>
          <div className="mt-7 flex flex-col md:flex-row gap-3 items-center">
            <SaveButton />
            <Link href={"/projects"}>
              <Button className="rounded-full py-5 text-white bg-gradient-to-r from-purple-500 to-pink-500 hover:scale-105 transition duration-500 ease-in-out">
                View My Projects <MoveUpRight />{" "}
              </Button>
            </Link>
          </div>
        </div>
        <div className="mt-10">
          <Image
            src="/Picture.jpeg"
            alt="Anindo Ahmed"
            width={500}
            height={500}
            className=" bg-black"
            priority
          />
        </div>
      </main>

      {/* skills section */}
      <div className="md:mb-40 mt-6 bg-gray-50 dark:bg-white/5 rounded-lg md:p-5 hover:bg-gray-100 dark:hover:bg-white/10 transition-colors border border-gray-100 dark:border-white/10">
        <Skills />
      </div>

      {/* About section */}
      <div className="md:my-40 flex flex-col md:flex-row mt-8 items-center justify-center">
        <div className="hidden md:block">
          <Image
            src="/myself.png"
            alt="Anindo Ahmed"
            width={700}
            height={700}
            priority
          />
        </div>
        <div className="w-full lg:w-1/3 mx-auto p-4">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold bg-clip-text transition-colors my-8">
            About Me
          </h1>
          <p className="text-neutral-400">
            I&apos;m Anindo, a passionate software engineer with a love for
            creating elegant solutions to complex problems. My journey in
            software development began with a curiosity about how things work,
            which evolved into a career building robust and scalable
            applications.
          </p>
          <div className="mt-7 p-2">
            <Spotlight
              className="from-purple-600 via-purple-500 to-purple-400 blur-3xl dark:from-purple-200 dark:via-purple-300 dark:to-purple-400"
              size={124}
              springOptions={{ bounce: 170, duration: 0.5 }}
            />
            <div className="flex items-center gap-6 ">
              <Link
                href={"/about"}
                className="flex dark:hover:bg-[#7a7978] transition-colors"
              >
                <Button>Hire Me</Button>
              </Link>

              <Link
                href={"https://github.com/Anindo117"}
                className="p-3 hover:rounded-full hover:border hover:border-gray-200 "
              >
                <FaGithub className="text-xl" />
              </Link>

              <Link
                href={"https://www.linkedin.com/in/anindo-ahamed/"}
                className="p-3 hover:rounded-full hover:border hover:border-gray-200 "
              >
                <FaLinkedinIn className="text-xl" />
              </Link>
              <Link
                href={"https://www.facebook.com/anindo.ahmed.7"}
                className="p-3 hover:rounded-full hover:border hover:border-gray-200 "
              >
                <FaFacebookF className="text-xl" />
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Project review section */}
      <div className="lg:mt-40 md:text-center p-4">
        <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold bg-clip-text transition-colors my-7 md:my-14">
          Explore My Works
        </h1>

        <ProjectCard />

        <p className="text-center my-14">More ?</p>
        <Link
          href={"/projects"}
          className="flex justify-center items-center border border-gray-600 h-20 w-20 mx-auto rounded-full bg-gray-200 dark:bg-white/5 hover:bg-gray-400 dark:hover:bg-white/10 transition-colors"
        >
          <ChevronsRight />
        </Link>
      </div>

      {/* Service section */}
      <div className="my-10 lg:my-40 max-w-5xl mx-auto p-4">
        <Services />
      </div>

      {/* New Project in Mind? */}
      <NewProject />
    </div>
  );
}
