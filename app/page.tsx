'use client'

import { About } from "@/components/sections/About";
import { Blogs } from "@/components/sections/Blogs";
import { Contact } from "@/components/sections/Contact";
import { Experience } from "@/components/sections/Experience";
import { Hero } from "@/components/sections/Hero";
import { Projects } from "@/components/sections/Projects";
import { Skills } from "@/components/sections/Skills";
import { Testimonials } from "@/components/sections/Testimonials";
 
export default function Home() {
 
  return (
    <main className="bg-background text-foreground">
      <Hero />
      <div className="max-w-4xl mx-auto px-4 py-12 space-y-20">
        <About/>
        <Skills />
        <Experience />
        <Testimonials/>
        <Projects />
      

        <Blogs/>
        <Contact />
      </div>
    </main>
  )
}
