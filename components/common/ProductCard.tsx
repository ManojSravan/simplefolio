import Image from "next/image"
import { Badge } from "../ui/badge"
 
interface ProjectCardProps {
  title: string
  period: string
  description: string
  imageUrl: string
  technologies: string[]
  links: Array<{ label: string; href: string; icon?: string }>
}

export function ProjectCard({ title, period, description, imageUrl, technologies, links }: ProjectCardProps) {
  return (
    <div className="border border-border rounded-lg overflow-hidden hover:shadow-lg transition-shadow">
      <div className="relative h-48 w-full bg-muted">
        <Image src={imageUrl} alt={title} fill className="object-cover" />
      </div>

      <div className="p-6 space-y-4">
        <div>
          <h3 className="text-xl font-semibold">{title}</h3>
          <p className="text-muted-foreground text-sm">{period}</p>
        </div>

        <p className="text-muted-foreground text-sm leading-relaxed">{description}</p>

        <div className="flex flex-wrap gap-2">
          {technologies.map((tech) => (
            <Badge key={tech} variant="secondary" className="text-xs">
              {tech}
            </Badge>
          ))}
        </div>

        <div className="flex gap-2 pt-4">
          {links.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="px-3 py-1.5 bg-primary text-primary-foreground rounded-md text-sm font-medium hover:opacity-80 transition-opacity"
            >
              {link.label}
            </a>
          ))}
        </div>
      </div>
    </div>
  )
}
