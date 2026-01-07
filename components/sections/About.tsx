import { SectionBadge } from "../common/SectionBadge";
import { SectionHeader } from "../layout/SectionHeader";

export function About() {
  return (
    <section className="space-y-2">
      <div className="space-y-6">
        <SectionBadge label="About Me" />
        <SectionHeader title="What I Do" />
      </div>

      <div className="prose prose-invert max-w-none text-foreground/80 leading-relaxed space-y-4">
        <p>
        I turn caffeine into code and bugs into features. Full-stack developer by day, debugger by night, and professional Stack Overflow navigator 24/7. I build things that work (most of the time on the first try)
        </p>
      </div>
    </section>
  );
}
