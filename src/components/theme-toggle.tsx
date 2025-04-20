"use client"

import * as React from "react"
import { Moon, Sun } from "lucide-react"
import { useTheme } from "next-themes"

export function ThemeToggle() {
  const { theme, setTheme } = useTheme()

  return (
    <button
      onClick={() => setTheme(theme === "light" ? "dark" : "light")}
      className="fixed top-6 right-6 z-50 rounded-full p-2 bg-gray-50 dark:bg-white/5 border border-gray-100 dark:border-white/10 hover:scale-110 active:scale-100 transition-all"
    >
      <Sun className="h-5 w-5 rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0 text-gray-900" />
      <Moon className="absolute h-5 w-5 rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100 text-white top-2 right-2" />
      <span className="sr-only">Toggle theme</span>
    </button>
  )
} 