import { SectionBadge } from "../common/SectionBadge"
import { SectionHeader } from "../layout/SectionHeader"

interface Testimonial {
  id: string
  name: string
  role: string
  company: string
  content: string
}

const testimonials: Testimonial[] = [
  {
    id: "1",
    name: "Sarah Mitchell",
    role: "Product Manager",
    company: "TechVision Inc.",
    content:
      "Working with this developer was an absolute pleasure. They delivered a high-quality product on time and exceeded our expectations. Their attention to detail and ability to understand our requirements made the entire process smooth and efficient.",
  },
  {
    id: "2",
    name: "James Rodriguez",
    role: "CTO",
    company: "StartupHub",
    content:
      "Exceptional technical skills combined with great communication. They took our complex requirements and turned them into a clean, scalable solution. I highly recommend them for any web development project.",
  },
  
];

export function Testimonials() {
  return (
    <section className="space-y-6">
      <SectionBadge label="Trust" />
      <SectionHeader title="Words From Clients" />
      <div className="flex flex-col sm:flex-row gap-6">
        {testimonials.map((testimonial) => (
          <div
            key={testimonial.id}
            className="border border-border/50 shadow-lg rounded-lg p-6 bg-background/50 hover:bg-background/80 hover:border-accent/30 transition-colors"
          >
            <p className="text-foreground/90 text-sm leading-relaxed mb-4">"{testimonial.content}"</p>
            <div className="pt-4 border-t border-border/30">
              <p className="font-semibold text-foreground text-sm">{testimonial.name}</p>
              <p className="text-foreground/70 text-xs">{testimonial.role}</p>
              <p className="text-foreground/80 text-xs">{testimonial.company}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
