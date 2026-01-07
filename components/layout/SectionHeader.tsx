interface SectionHeaderProps {
  title: string
}

export function SectionHeader({ title }: SectionHeaderProps) {
  return <h2 className="text-3xl md:text-4xl font-bold tracking-tight">{title}</h2>
}
