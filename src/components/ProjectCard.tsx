import { BackgroundGradient } from "@/components/ui/background-gradient";
import { ArrowUpRight } from "lucide-react";
import Image, { StaticImageData } from "next/image";
import Link from "next/link";
import BookGallery from "../assets//BookGallery.png";
import Elecwizzy from "../assets/Elecwizzy.png";
import Newstally from "../assets/NewsTally.png";
import Restaurent from "../assets/Restaurant.png";
import Creators from "../assets/Creators.png";
import MiraiGroup from "../assets/Mirai-Group.png";

interface Project {
  id: number;
  title: string;
  imageSrc: StaticImageData;
  imageAlt: string;
  link: string;
}

const projects: Project[] = [
  {
    id: 1,
    title: "News Blog",
    imageSrc: Newstally,
    imageAlt: "newstally",
    link: "https://newstally-blogsites.web.app/",
  },
  {
    id: 2,
    title: "Restaurent Landing Page",
    imageSrc: Restaurent,
    imageAlt: "restaurent",
    link: "https://softniodreamrestaurant.netlify.app/",
  },
  {
    id: 3,
    title: "Electronics Service Point",
    imageSrc: Elecwizzy,
    imageAlt: "elecwizzy",
    link: "https://elecwizzy.smtech24.com/",
  },
  {
    id: 4,
    title: "Real Estate Project",
    imageSrc: Creators,
    imageAlt: "creators",
    link: "https://cdl.com.bd",
  },
  {
    id: 5,
    title: "Book Gallery",
    imageSrc: BookGallery,
    imageAlt: "bookGallery",
    link: "https://allbookgallery.netlify.app/",
  },
  {
    id: 6,
    title: "Education Consultency",
    imageSrc: MiraiGroup,
    imageAlt: "miraigroup",
    link: "https://miraigroupedu.com",
  },
];

export default function ProjectCard() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-10 justify-center">
      {projects.map((project) => (
        <BackgroundGradient
          key={project.id}
          className="rounded-[22px] max-w-2xl p-4 sm:p-10 bg-white dark:bg-zinc-900"
        >
          <Image
            src={project.imageSrc}
            alt={project.imageAlt}
            height="500"
            width="500"
            className="object-contain"
          />

          <Link
            href={project.link}
            target="_blank"
            className="rounded-full pl-4 pr-1 py-1 text-white flex items-center justify-between space-x-1 bg-black mt-4 text-base md:text-sm lg:text-xl font-bold dark:bg-zinc-800"
          >
            {project.title}{" "}
            <ArrowUpRight className="border border-gray-400 rounded-full hover:scale-50" />
          </Link>
        </BackgroundGradient>
      ))}
    </div>
  );
}
