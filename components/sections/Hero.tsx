import Image from "next/image"
import { SocialLinks } from "../utils/Socials"
 
export function Hero() {
  return (
    <section className="bg-background flex flex-col items-center justify-center px-4 py-12 space-y-5">
      <div className="relative w-32 h-32">
        <Image src="/hero.jpeg" alt="Profile" fill className="rounded-full object-cover" />
      </div>

      <div className="text-center space-y-4 max-w-2xl">
        <h1 className="text-5xl md:text-6xl font-bold tracking-tight">Alex Thompson</h1>

        <p className="text-xl text-primary">Full-Stack Developer & Creative Problem Solver</p>

        <p className="text-base text-primary leading-relaxed">
          Crafting elegant solutions to complex problems, one line of code at a time.
        </p>
      </div>

      <SocialLinks />
    </section>
  )
}