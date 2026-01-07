"use client"

import Link from "next/link"
import { useEffect, useState } from "react"
import { Moon, Sun } from "lucide-react"

const navItems = [
  { label: "About", href: "#about" },
  { label: "Projects", href: "#projects" },
  { label: "Contributions", href: "#contributions" },
  { label: "Blogs", href: "#blogs" },
  { label: "Events", href: "#events" },
]

export function Navigation() {
  const [isDark, setIsDark] = useState(false)
  const [isMounted, setIsMounted] = useState(false)

  useEffect(() => {
    setIsMounted(true)
    const savedTheme = localStorage.getItem("theme")
    const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches

    const shouldBeDark = savedTheme ? savedTheme === "dark" : prefersDark
    setIsDark(shouldBeDark)
    updateTheme(shouldBeDark)
  }, [])

  const updateTheme = (dark: boolean) => {
    const html = document.documentElement
    if (dark) {
      html.classList.add("dark")
      localStorage.setItem("theme", "dark")
    } else {
      html.classList.remove("dark")
      localStorage.setItem("theme", "light")
    }
  }

  const toggleTheme = () => {
    const newTheme = !isDark
    setIsDark(newTheme)
    updateTheme(newTheme)
  }

  if (!isMounted) return null

  return (
    <nav className="sticky top-0 z-50 bg-background border-b border-border/40 backdrop-blur-md">
      <div className="max-w-4xl mx-auto px-4 py-4 flex items-center justify-end">
         
        {/* Nav Items */}
        {/* <div className="hidden md:flex items-center mr-6 gap-8">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-sm text-primary hover:text-foreground transition-colors"
            >
              {item.label}
            </Link>
          ))}
        </div> */}

        {/* Theme Switcher */}
        <button
          onClick={toggleTheme}
          aria-label="Toggle theme"
          className="p-2 rounded-lg  hover:bg-muted transition-colors text-primary hover:text-foreground"
        >
          {isDark ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
        </button>
      </div>
    </nav>
  )
}
