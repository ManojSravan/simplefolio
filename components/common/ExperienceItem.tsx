import Image from "next/image"

interface ExperienceItemProps {
  name: string
  position: string
  period: string
  imageUrl: string
}

export function ExperienceItem({ name, position, period, imageUrl }: ExperienceItemProps) {
  return (
    <div className="flex gap-4 items-start">
      <div className="relative w-14 h-14 ">
        <Image src={imageUrl} alt={name} fill className="rounded-full object-cover" />
      </div>

      <div className="flex-1">
        <h3 className="font-semibold text-lg">{name}</h3>
        <p className="text-muted-foreground text-sm">{position}</p>
      </div>

      <div className="text-muted-foreground text-sm whitespace-nowrap">{period}</div>
    </div>
  )
}
