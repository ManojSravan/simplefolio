interface SectionBadgeProps {
  label: string
}

export function SectionBadge({ label }: SectionBadgeProps) {
  return (
    <div className="inline-block px-3 py-1 bg-primary text-primary-foreground rounded-full text-sm font-medium">
      {label}
    </div>
  )
}
