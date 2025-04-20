import { NewProject } from "@/components/NewProject";
import { Github, Linkedin, Mail, Phone, StepBack } from "lucide-react";
import Link from "next/link";

interface SocialLink {
  name: string;
  url: string;
  icon: React.ReactNode;
}

const socialLinks: SocialLink[] = [
  {
    name: "Phone",
    url: "tel:+8801673210161",
    icon: <Phone className="w-6 h-6" />,
  },
  {
    name: "Email",
    url: "mailto:anindo.ah117@gmail.com",
    icon: <Mail className="w-6 h-6" />,
  },
  {
    name: "GitHub",
    url: "https://github.com/Anindo117",
    icon: <Github className="w-6 h-6" />,
  },
  {
    name: "LinkedIn",
    url: "https://www.linkedin.com/in/anindo-ahamed/",
    icon: <Linkedin className="w-6 h-6" />,
  },
];

export default function Contact() {
  return (
    <main className="md:max-w-4xl w-full mx-auto min-h-screen flex flex-col justify-center py-8 px-4">
      <div className="flex gap-2">
        <Link
          href={"/"}
          className="h-10 w-10 border rounded-full p-3 flex items-center justify-center text-neutral-400 hover:bg-slate-600"
        >
          <StepBack />
        </Link>
      </div>
      <div className="mt-20 max-w-4xl w-full">
        <h1 className="text-3xl md:text-4xl font-bold mb-8 text-gray-900 dark:text-white">
          Get in Touch
        </h1>

        <div className="space-y-8 mb-20">
          <p className="text-gray-700 dark:text-gray-600 max-w-2xl">
            I&apos;m always interested in hearing about new opportunities,
            interesting projects, or just having a chat about technology and
            development. Feel free to reach out through any of the channels
            below.
          </p>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {socialLinks.map((link) => (
              <Link
                key={link.name}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 p-4 bg-gray-50 dark:bg-white/5 rounded-lg hover:bg-gray-100 dark:hover:bg-white/10 transition-colors border border-gray-100 dark:border-white/10 text-gray-900 dark:text-white"
              >
                {link.icon}
                <span>{link.name}</span>
              </Link>
            ))}
          </div>
        </div>
        <NewProject />
      </div>
    </main>
  );
}
