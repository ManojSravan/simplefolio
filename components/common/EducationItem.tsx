import Image from "next/image"

interface EducationItemProps {
  name: string
  degree: string
  period: string
  imageUrl: string
}

export function EducationItem({ name, degree, period, imageUrl }: EducationItemProps) {
  return (
    <div className="flex gap-4 items-start">
      <div className="relative w-12 h-12 shrink-0">
        <Image src="/generic-school-logo.png" alt={name} fill className="rounded-full object-cover" />
      </div>

      <div className="flex-1">
        <h3 className="font-semibold text-lg">{name}</h3>
        <p className="text-muted-foreground text-sm">{degree}</p>
      </div>

      <div className="text-muted-foreground text-sm whitespace-nowrap">{period}</div>
    </div>
  )
}
