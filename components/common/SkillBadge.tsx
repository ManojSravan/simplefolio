interface SkillBadgeProps {
  skill: string
}

export function SkillBadge({ skill }: SkillBadgeProps) {
  return <div className="px-3 py-1.5 bg-primary text-primary-foreground rounded-md text-sm font-medium">{skill}</div>
}
