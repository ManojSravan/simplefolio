import { SectionBadge } from "../common/SectionBadge"
import { SkillBadge } from "../common/SkillBadge"
import { SectionHeader } from "../layout/SectionHeader"

 
// Option 1 - Full-stack focused
const skillsData = [
  "React & Next.js",
  "TypeScript & JavaScript",
  "Node.js & Express",
  "REST APIs & GraphQL",
  "PostgreSQL & MongoDB",
  "TailwindCSS & Styling",
  "Git & Version Control",
  "Responsive Design",
];


export function Skills() {
  return (
    <section className="space-y-6">
      <SectionBadge label="Expertise" />
      <SectionHeader title="My Core Skill Set" />
      <div className="flex flex-wrap gap-3">
        {skillsData.map((skill) => (
          <SkillBadge key={skill} skill={skill} />
        ))}
      </div>
    </section>
  )
}
