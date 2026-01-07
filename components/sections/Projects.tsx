import { ProjectCard } from "../common/ProductCard"
import { SectionBadge } from "../common/SectionBadge"
import { SectionHeader } from "../layout/SectionHeader"

 
const projectsData = [
  {
    title: "TaskFlow Pro",
    period: "2024",
    description:
      "Developed a project management platform with real-time collaboration features, implementing a responsive Next.js frontend with optimized performance and accessibility standards.",
    imageUrl: "https://images.unsplash.com/photo-1484480974693-6ca0a78fb36b?q=80&w=1472&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    technologies: ["Next.js", "TypeScript", "TailwindCSS", "Real-time Updates"],
    links: [
      { label: "Live Demo", href: "https://example.com", icon: "🌐" },
      { label: "GitHub", href: "https://github.com/username/project", icon: "💻" }
    ],
  },
  {
    title: "EcoTrack",
    period: "2023-2024",
    description:
      "Created a sustainability tracking application that helps users monitor their carbon footprint, featuring interactive data visualizations and personalized recommendations.",
    imageUrl: "https://images.unsplash.com/photo-1628277613967-6abca504d0ac?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    technologies: ["React", "Node.js", "MongoDB", "Chart.js"],
    links: [
      { label: "Live Demo", href: "https://example.com", icon: "🌐" },
      { label: "GitHub", href: "https://github.com/username/project", icon: "💻" }
    ],
  },
  {
    title: "CodeSnippet Hub",
    period: "2023",
    description:
      "Built a community-driven platform for developers to share and discover code snippets, with syntax highlighting, tagging system, and search functionality.",
    imageUrl: "https://images.unsplash.com/photo-1515879218367-8466d910aaa4?q=80&w=1469&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    technologies: ["Vue.js", "Firebase", "TailwindCSS", "Algolia Search"],
    links: [
      { label: "Live Demo", href: "https://example.com", icon: "🌐" },
      { label: "GitHub", href: "https://github.com/username/project", icon: "💻" }
    ],
  },
  {
    title: "FitnessPal",
    period: "2023",
    description:
      "Designed and implemented a workout tracking mobile-responsive web app with custom exercise libraries, progress analytics, and social sharing features.",
    imageUrl: "https://images.unsplash.com/photo-1583454110551-21f2fa2afe61?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    technologies: ["Next.js", "PostgreSQL", "Prisma", "TailwindCSS"],
    links: [
      { label: "Live Demo", href: "https://example.com", icon: "🌐" }
    ],
  },
];
export function Projects() {
  return (
    <section className="space-y-8">
      <div className="space-y-6">
        <SectionBadge label="Work" />
      <SectionHeader title="Selected Work" />

        <p className="text-muted-foreground text-lg leading-relaxed max-w-2xl">
          I've worked on a variety of projects, from simple websites to complex web applications. Here are a few of my
          favorites.
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-6">
        {projectsData.map((project, idx) => (
          <ProjectCard key={idx} {...project} />
        ))}
      </div>
    </section>
  )
}
