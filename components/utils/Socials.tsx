import Link from "next/link"
import {
  Instagram,
  Twitter,
  Linkedin,
  AtSign,
  Rss,
} from "lucide-react"

const socialLinks = [
  { icon: Instagram, href: "https://www.instagram.com/username", label: "Instagram" },
  { icon: Twitter, href: "https://x.com/username", label: "X (Twitter)" },
  { icon: Linkedin, href: "https://www.linkedin.com/in/username/", label: "LinkedIn" },
  { icon: AtSign, href: "https://www.threads.net/@username", label: "Threads" },
  { icon: Rss, href: "#", label: "Blog" },
]

export function SocialLinks() {
  return (
    <div className="flex gap-6">
      {socialLinks.map((link) => {
        const Icon = link.icon
        return (
          <Link
            key={link.label}
            href={link.href}
            aria-label={link.label}
            className="text-primary hover:text-foreground transition-colors"
          >
            <Icon className="h-5 w-5" />
          </Link>
        )
      })}
    </div>
  )
}
