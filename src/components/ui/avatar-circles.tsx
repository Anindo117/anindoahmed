"use client";

import { cn } from "@/lib/utils";
import Image from "next/image";

interface AvatarCirclesProps {
  className?: string;
  avatarUrls?: string;
}

const AvatarCircles = ({ className, avatarUrls }: AvatarCirclesProps) => {
  return (
    <div className={cn("z-10 flex -space-x-4 rtl:space-x-reverse", className)}>
      <Image
        className="h-100 w-100 rounded-full border-2 border-white dark:border-gray-800"
        src={avatarUrls || "/portfolio.png"}
        width={150}
        height={150}
        alt={`Avatar of ${avatarUrls}`}
      />
    </div>
  );
};

export { AvatarCircles };
