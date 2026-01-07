import { SectionBadge } from "../common/SectionBadge"
import { SectionHeader } from "../layout/SectionHeader"

interface BlogPost {
  id: string
  title: string
  excerpt: string
  date: string
  readTime: string
  href: string
}

const blogPosts: BlogPost[] = [
  {
    id: "1",
    title: "Building Scalable APIs with Node.js and Express",
    excerpt:
      "Learn how to structure your Node.js applications for maximum scalability and maintainability. Explore best practices for routing, middleware, and error handling.",
    date: "Jan 15, 2024",
    readTime: "5 min read",
    href: "https://example.com/blog/building-scalable-apis",
  },
  {
    id: "2",
    title: "The Power of CSS Grid: A Complete Guide",
    excerpt:
      "CSS Grid has revolutionized web layout design. Discover how to create complex, responsive layouts with minimal code and maximum flexibility.",
    date: "Dec 28, 2023",
    readTime: "7 min read",
    href: "https://example.com/blog/css-grid-guide",
  },
  {
    id: "3",
    title: "React Hooks: Beyond useState and useEffect",
    excerpt:
      "Dive deeper into React's hook ecosystem. Learn about useCallback, useMemo, useContext, and custom hooks to write more efficient components.",
    date: "Dec 10, 2023",
    readTime: "6 min read",
    href: "https://example.com/blog/advanced-react-hooks",
  },
  
];

export function Blogs() {
  return (
    <section className="space-y-8">
      <div className="space-y-6">
         <SectionBadge label="Insights" />
      <SectionHeader title="Articles and Learnings" />

      </div>
      <div className="grid gap-6">
        {blogPosts.map((post) => (
          <a
            key={post.id}
            href={post.href}
            className="group border-b border-border/50 pb-6 last:border-0 hover:border-accent/30 transition-colors"
          >
            <div className="space-y-2">
              <div className="flex items-center justify-between gap-4">
                <h3 className="text-lg font-semibold text-foreground group-hover:text-primary transition-colors">
                  {post.title}
                </h3>
                <span className="text-sm text-foreground/50 shrink-0">{post.readTime}</span>
              </div>
              <p className="text-foreground/70 text-sm leading-relaxed">{post.excerpt}</p>
              <p className="text-foreground/50 text-xs pt-2">{post.date}</p>
            </div>
          </a>
        ))}
      </div>
    </section>
  )
}
