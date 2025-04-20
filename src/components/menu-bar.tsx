"use client";

import { AnimatePresence, motion } from "framer-motion";
import { Folder, Headset, Home, Menu, User, X } from "lucide-react";
import { useTheme } from "next-themes";
import React, { useState } from "react";

interface MenuItem {
  icon: React.ReactNode;
  label: string;
  href: string;
  gradient: string;
  iconColor: string;
}

const menuItems: MenuItem[] = [
  {
    icon: <Home className="h-5 w-5" />,
    label: "Home",
    href: "/",
    gradient:
      "radial-gradient(circle, rgba(59,130,246,0.15) 0%, rgba(37,99,235,0.06) 50%, rgba(29,78,216,0) 100%)",
    iconColor: "text-blue-500",
  },
  {
    icon: <User className="h-5 w-5" />,
    label: "About",
    href: "/about",
    gradient:
      "radial-gradient(circle, rgba(239,68,68,0.15) 0%, rgba(220,38,38,0.06) 50%, rgba(185,28,28,0) 100%)",
    iconColor: "text-red-500",
  },
  {
    icon: <Folder className="h-5 w-5" />,
    label: "Projects",
    href: "/projects",
    gradient:
      "radial-gradient(circle, rgba(249,115,22,0.15) 0%, rgba(234,88,12,0.06) 50%, rgba(194,65,12,0) 100%)",
    iconColor: "text-orange-500",
  },
  {
    icon: <Headset className="h-5 w-5" />,
    label: "Contact",
    href: "/contact",
    gradient:
      "radial-gradient(circle, rgba(147,51,234,0.3) 0%, rgba(126,34,206,0.15) 50%, rgba(107,33,168,0.05) 100%)",
    iconColor: "text-purple-500",
  },
];

const itemVariants = {
  initial: { rotateX: 0, opacity: 1 },
  hover: { rotateX: -90, opacity: 0 },
};

const backVariants = {
  initial: { rotateX: 90, opacity: 0 },
  hover: { rotateX: 0, opacity: 1 },
};

const glowVariants = {
  initial: { opacity: 0, scale: 0.8 },
  hover: {
    opacity: 1,
    scale: 2,
    transition: {
      opacity: { duration: 0.5, ease: [0.4, 0, 0.2, 1] },
      scale: { duration: 0.5, type: "spring", stiffness: 300, damping: 25 },
    },
  },
};

const navGlowVariants = {
  initial: { opacity: 0 },
  hover: {
    opacity: 1,
    transition: {
      duration: 0.5,
      ease: [0.4, 0, 0.2, 1],
    },
  },
};

const sharedTransition = {
  type: "spring",
  stiffness: 100,
  damping: 20,
  duration: 0.5,
};

export function MenuBar() {
  const { theme } = useTheme();
  const isDarkTheme = theme === "dark";
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      {/* Desktop Nav (lg and up) */}
      <motion.nav
        className="hidden lg:block p-2 rounded-2xl bg-gradient-to-b from-background/80 to-background/40 backdrop-blur-lg border border-border/40 shadow-lg relative overflow-hidden"
        initial="initial"
        whileHover="hover"
      >
        <motion.div
          className={`absolute -inset-2 bg-gradient-radial from-transparent ${
            isDarkTheme
              ? "via-blue-400/30 via-30% "
              : "via-blue-400/20 via-30% "
          } to-transparent rounded-3xl z-0 pointer-events-none`}
          variants={navGlowVariants}
        />
        <ul className="flex items-center gap-2 relative z-10">
          {menuItems.map((item) => (
            <motion.li key={item.label} className="relative">
              <motion.div
                className="block rounded-xl overflow-visible group relative"
                style={{ perspective: "600px" }}
                whileHover="hover"
                initial="initial"
              >
                <motion.div
                  className="absolute inset-0 z-0 pointer-events-none"
                  variants={glowVariants}
                  style={{
                    background: item.gradient,
                    opacity: 0,
                    borderRadius: "16px",
                  }}
                />
                <motion.a
                  href={item.href}
                  className="flex items-center gap-2 px-4 py-2 relative z-10 bg-transparent text-muted-foreground group-hover:text-foreground transition-colors rounded-xl"
                  variants={itemVariants}
                  transition={sharedTransition}
                  style={{
                    transformStyle: "preserve-3d",
                    transformOrigin: "center bottom",
                  }}
                >
                  <span
                    className={`transition-colors duration-300 group-hover:${item.iconColor} text-foreground`}
                  >
                    {item.icon}
                  </span>
                  <span>{item.label}</span>
                </motion.a>
                <motion.a
                  href={item.href}
                  className="flex items-center gap-2 px-4 py-2 absolute inset-0 z-10 bg-transparent text-muted-foreground group-hover:text-foreground transition-colors rounded-xl"
                  variants={backVariants}
                  transition={sharedTransition}
                  style={{
                    transformStyle: "preserve-3d",
                    transformOrigin: "center top",
                    rotateX: 90,
                  }}
                >
                  <span
                    className={`transition-colors duration-300 group-hover:${item.iconColor} text-foreground`}
                  >
                    {item.icon}
                  </span>
                  <span>{item.label}</span>
                </motion.a>
              </motion.div>
            </motion.li>
          ))}
        </ul>
      </motion.nav>

      {/* Mobile Menu Button */}
      <div className="lg:hidden flex items-center justify-between p-2">
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="p-2 rounded-md bg-muted text-foreground hover:bg-muted/60 transition"
        >
          {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {/* Mobile Menu Items */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="lg:hidden fixed top-16 left-4 right-4 z-50 bg-background/90 border border-border rounded-2xl p-4 shadow-xl backdrop-blur-md"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
          >
            <ul className="space-y-2">
              {menuItems.map((item) => (
                <li key={item.label}>
                  <a
                    href={item.href}
                    className={`flex items-center gap-2 px-4 py-2 rounded-xl text-muted-foreground hover:text-foreground hover:bg-muted transition ${item.iconColor}`}
                    onClick={() => setIsOpen(false)}
                  >
                    {item.icon}
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
