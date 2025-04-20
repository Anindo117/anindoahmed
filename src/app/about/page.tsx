import { AvatarCircles } from "@/components/ui/avatar-circles";
import { GradualSpacing } from "@/components/ui/gradual-spacing";
import { IconCloud } from "@/components/ui/interactive-icon-cloud";
import { Tilt } from "@/components/ui/tilt";
import { TypingAnimation } from "@/components/ui/typing-animation";
import {
  Briefcase,
  CalendarSearch,
  FileBox,
  GraduationCap,
  Map,
  MapPinHouse,
} from "lucide-react";
import Link from "next/link";
import {
  FaElementor,
  FaFacebookF,
  FaFigma,
  FaGithub,
  FaLinkedinIn,
  FaNodeJs,
  FaReact,
  FaWordpress,
} from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io5";
import { RiNextjsFill, RiTailwindCssFill } from "react-icons/ri";
import {
  SiExpress,
  SiFirebase,
  SiMongodb,
  SiMysql,
  SiNetlify,
  SiShadcnui,
  SiTableau,
  SiTypescript,
  SiVercel,
} from "react-icons/si";

const slugs = [
  "typescript",
  "javascript",
  "dart",
  "java",
  "react",
  "flutter",
  "android",
  "html5",
  "css3",
  "nodedotjs",
  "express",
  "nextdotjs",
  "prisma",
  "amazonaws",
  "postgresql",
  "firebase",
  "nginx",
  "vercel",
  "testinglibrary",
  "jest",
  "cypress",
  "docker",
  "git",
  "jira",
  "github",
  "gitlab",
  "visualstudiocode",
  "androidstudio",
  "sonarqube",
  "figma",
];
export default function About() {
  return (
    <main className="max-w-6xl mx-auto min-h-screen flex flex-col justify-center py-8 px-4">
      {/* Header */}
      <div>
        {/* Introduction */}
        <div className="flex justify-between items-center">
          <div>
            <AvatarCircles avatarUrls={"/portfolio.png"} />
            <Link href={"/"}>
              <GradualSpacing
                className="mt-5 font-display font-bold -tracking-widest text-black dark:text-neutral-200 text-2xl lg:text-5xl"
                text="Anindo Ahmed"
              />
            </Link>

            <p className="lg:my-3 lg:text-xl text-neutral-500">
              Full Stack Developer & WordPress Enthusiast
            </p>
            <div className="flex items-center gap-3">
              <Link
                href={"https://github.com/Anindo117"}
                className="p-3 rounded-full hover:scale-105 transition duration-500 ease-in-outout hover:bg-gray-600"
              >
                <FaGithub className="md:text-xl" />
              </Link>

              <Link
                href={"https://www.linkedin.com/in/anindo-ahamed/"}
                className="p-3 text-cyan-600 hover:text-white rounded-full hover:scale-105 transition duration-500 ease-in-outout hover:bg-cyan-600"
              >
                <FaLinkedinIn className="md:text-xl" />
              </Link>
              <Link
                href={"https://www.facebook.com/anindo.ahmed.7"}
                className="p-3 text-blue-600 hover:text-white rounded-full hover:scale-105 transition duration-500 ease-in-outout hover:bg-blue-600"
              >
                <FaFacebookF className="md:text-xl" />
              </Link>
            </div>
          </div>
          <div className="relative flex size-full lg:max-w-lg items-center justify-center overflow-hidden bg-background lg:px-20 pb-20 pt-8 ">
            <IconCloud iconSlugs={slugs} />
          </div>
        </div>

        {/* card */}
        <div className="mt-3 space-y-6 text-gray-700 dark:text-gray-300">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <div className="bg-gray-50 dark:bg-white/5 p-4 rounded-lg border border-gray-100 dark:border-white/10">
              <h3 className="mb-2 md:text-lg text-gray-900 dark:text-white font-semibold">
                <Map /> Location
              </h3>
              <p className="text-sm text-gray-600 dark:text-gray-400">
                Dhaka, Bangladesh
              </p>
            </div>

            <div className="bg-gray-50 dark:bg-white/5 p-4 rounded-lg border border-gray-100 dark:border-white/10">
              <h3 className="mb-2 md:text-lg text-gray-900 dark:text-white font-semibold">
                <CalendarSearch /> Availability
              </h3>
              <p className="text-sm text-gray-600 dark:text-gray-400">
                Always Open for new projects
              </p>
            </div>
            <div className="bg-gray-50 dark:bg-white/5 p-4 rounded-lg border border-gray-100 dark:border-white/10">
              <h3 className="mb-2 md:text-lg text-gray-900 dark:text-white font-semibold">
                <Briefcase /> Experience
              </h3>
              <p className="text-sm text-gray-600 dark:text-gray-400">
                1 year of experience
              </p>
            </div>
            <div className="bg-gray-50 dark:bg-white/5 p-4 rounded-lg border border-gray-100 dark:border-white/10">
              <h3 className="mb-2 md:text-lg text-gray-900 dark:text-white font-semibold">
                <FileBox /> Projects
              </h3>
              <p className="text-sm text-gray-600 dark:text-gray-400">
                8 Completed Projects
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Experience & Education*/}
      <div className="max-w-5xl flex md:flex-row flex-col justify-between md:gap-10">
        <div className="md:my-40 my-16">
          <TypingAnimation
            className="text-2xl lg:text-3xl font-bold text-black dark:text-white"
            text="Education"
          />
          <div className="mt-12 flex flex-col space-y-3 p-6 rounded-xl shadow-lg bg-white dark:bg-zinc-900 hover:border border-purple-900 ">
            <h2 className="lg:text-lg font-semibold flex items-center gap-3">
              <GraduationCap className="text-purple-400" />
              BSc in Textile Engineering
            </h2>
            <p className="text-sm lg:text-base text-gray-600 dark:text-gray-400">
              Ahsanullah University of Science and Technology, <br /> 2012 -
              2016
            </p>

            <h2 className="lg:text-lg font-semibold flex items-center gap-3">
              <GraduationCap className="text-purple-400" /> Complete Web
              Development Course With Jhankar Mahbub
            </h2>
            <p className="text-sm lg:text-base text-gray-600 dark:text-gray-400">
              Programming Hero, <br /> 2024 - 2024
            </p>
          </div>
        </div>
        <div className="md:my-40 my-16">
          <TypingAnimation
            className="text-2xl lg:text-3xl font-bold text-black dark:text-white"
            text="Experience"
          />
          <div className="mt-12 flex flex-col space-y-3 lg:space-y-7 p-6 rounded-xl shadow-lg bg-white dark:bg-zinc-900 hover:border border-purple-900 ">
            <h2 className="lg:text-lg font-semibold flex items-center gap-3">
              <MapPinHouse className="text-purple-400" /> bdCalling IT Ltd,
              Dhaka, Bangladesh.
            </h2>
            <p className="text-sm lg:text-base text-gray-600 dark:text-gray-400">
              Front End web developer [Aug24 - Oct24]
            </p>
            <h2 className="lg:text-lg font-semibold flex items-center gap-3">
              {" "}
              <MapPinHouse className="text-purple-400" /> Freelance
            </h2>
            <p className="text-sm lg:text-base text-gray-600 dark:text-gray-400">
              Front End web developer [2024 - Present]
            </p>
          </div>
        </div>
      </div>

      {/* Skills */}
      <div className="mb-12">
        <TypingAnimation
          className="text-2xl lg:text-3xl font-bold text-black dark:text-white"
          text="Skills"
        />

        {/* Front end skills */}
        <Tilt rotationFactor={4} isRevese>
          <div className="mt-12 flex flex-col space-y-3 p-6 rounded-xl shadow-lg bg-white dark:bg-zinc-900 hover:border border-purple-900 ">
            <h2 className="text-lg font-semibold">Front End Development</h2>
            <div className="flex items-center gap-3 flex-wrap">
              <span className="text-sm text-gray-600 dark:text-gray-400 flex items-center gap-2 border py-3 px-6 rounded-full">
                <RiTailwindCssFill className="text-cyan-600" /> Tailwind CSS
              </span>
              <span className="text-sm text-gray-600 dark:text-gray-400 flex items-center gap-2 border py-3 px-6 rounded-full">
                <IoLogoJavascript className="text-yellow-500" /> JavaScript
              </span>
              <span className="text-sm text-gray-600 dark:text-gray-400 flex items-center gap-2 border py-3 px-6 rounded-full">
                <SiTypescript className="text-blue-500" /> TypeScript
              </span>
              <span className="text-sm text-gray-600 dark:text-gray-400 flex items-center gap-2 border py-3 px-6 rounded-full">
                <FaReact className="text-blue-500" /> React.Js
              </span>
              <span className="text-sm text-gray-600 dark:text-gray-400 flex items-center gap-2 border py-3 px-6 rounded-full">
                <RiNextjsFill className="text-neutral-500" /> Next.Js
              </span>
              <span className="text-sm text-gray-600 dark:text-gray-400 flex items-center gap-2 border py-3 px-6 rounded-full">
                <SiShadcnui className="text-neutral-500" /> Shadcn UI
              </span>
              <span className="text-sm text-gray-600 dark:text-gray-400 flex items-center gap-2 border py-3 px-6 rounded-full">
                <FaWordpress className="text-neutral-500" /> WordPress
              </span>
              <span className="text-sm text-gray-600 dark:text-gray-400 flex items-center gap-2 border py-3 px-6 rounded-full">
                <FaElementor className="text-red-800" /> Elementor
              </span>
              <span className="text-sm text-gray-600 dark:text-gray-400 flex items-center gap-2 border py-3 px-6 rounded-full">
                <FaFigma className="text-purple-800" /> Figma
              </span>
            </div>
          </div>
        </Tilt>

        {/* Back end skills */}
        <Tilt rotationFactor={4} isRevese>
          <div className="mt-12 flex flex-col space-y-3 p-6 rounded-xl shadow-lg bg-white dark:bg-zinc-900 hover:border border-purple-900 ">
            <h2 className="text-lg font-semibold">Back End Development</h2>
            <div className="flex items-center gap-3 flex-wrap">
              <span className="text-sm text-gray-600 dark:text-gray-400 flex items-center gap-2 border py-3 px-6 rounded-full">
                <FaNodeJs className="text-green-500" /> Node.Js
              </span>
              <span className="text-sm text-gray-600 dark:text-gray-400 flex items-center gap-2 border py-3 px-6 rounded-full">
                <SiExpress className="text-neutral-500" /> Express.Js
              </span>
              <span className="text-sm text-gray-600 dark:text-gray-400 flex items-center gap-2 border py-3 px-6 rounded-full">
                <SiFirebase className="text-red-500" /> Firebase
              </span>
              <span className="text-sm text-gray-600 dark:text-gray-400 flex items-center gap-2 border py-3 px-6 rounded-full">
                <SiMysql className="text-blue-500" /> MySQL
              </span>
              <span className="text-sm text-gray-600 dark:text-gray-400 flex items-center gap-2 border py-3 px-6 rounded-full">
                <SiMongodb className="text-green-800" /> MongoDB
              </span>
            </div>
          </div>
        </Tilt>

        {/* Tools & Others */}
        <Tilt rotationFactor={4} isRevese>
          <div className="mt-12 flex flex-col space-y-3 p-6 rounded-xl shadow-lg bg-white dark:bg-zinc-900 hover:border border-purple-900 ">
            <h2 className="text-lg font-semibold">Tools and Others</h2>
            <div className="flex items-center gap-3 flex-wrap">
              <span className="text-sm text-gray-600 dark:text-gray-400 flex items-center gap-2 border py-3 px-6 rounded-full">
                <FaGithub className="text-neutral-500" /> Github
              </span>
              <span className="text-sm text-gray-600 dark:text-gray-400 flex items-center gap-2 border py-3 px-6 rounded-full">
                <SiVercel className="text-white" /> Vercel
              </span>
              <span className="text-sm text-gray-600 dark:text-gray-400 flex items-center gap-2 border py-3 px-6 rounded-full">
                <SiNetlify className="text-cyan-500" /> Netlify
              </span>
              <span className="text-sm text-gray-600 dark:text-gray-400 flex items-center gap-2 border py-3 px-6 rounded-full">
                <SiTableau className="text-blue-800" /> Tableau
              </span>
            </div>
          </div>
        </Tilt>
      </div>
    </main>
  );
}
