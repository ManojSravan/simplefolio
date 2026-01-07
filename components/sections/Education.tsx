import { EducationItem } from "../common/EducationItem"
import { SectionHeader } from "../layout/SectionHeader"

 
const educationData = [
  {
    name: "Buildspace",
    degree: "s3, s4, sf1, s5",
    period: "2023 - 2024",
    imageUrl: "/images/image.jpg",
  },
  {
    name: "University of Waterloo",
    degree: "Bachelor's Degree of Computer Science (BCS)",
    period: "2016 - 2021",
    imageUrl: "/images/image.jpg",
  },
  {
    name: "Wilfrid Laurier University",
    degree: "Bachelor's Degree of Business Administration (BBA)",
    period: "2016 - 2021",
    imageUrl: "/images/image.jpg",
  },
  {
    name: "International Baccalaureate",
    degree: "IB Diploma",
    period: "2012 - 2016",
    imageUrl: "/images/image.jpg",
  },
]

export function Education() {
  return (
    <section className="space-y-8">
      <SectionHeader title="Education" />
      <div className="space-y-6">
        {educationData.map((item, idx) => (
          <EducationItem key={idx} {...item} />
        ))}
      </div>
    </section>
  )
}
