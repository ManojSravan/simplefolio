import { ExperienceItem } from "../common/ExperienceItem"
import { SectionBadge } from "../common/SectionBadge"
import { SectionHeader } from "../layout/SectionHeader"

 
const experienceData = [
  {
    name: "Google",
    position: "Senior Software Engineer",
    period: "Jan 2024 - Present",
    imageUrl: "https://www.google.com/images/branding/googlelogo/2x/googlelogo_color_272x92dp.png",
  },
  {
    name: "Microsoft",
    position: "Software Engineer II",
    period: "Mar 2022 - Dec 2023",
    imageUrl: "https://img-prod-cms-rt-microsoft-com.akamaized.net/cms/api/am/imageFileData/RE1Mu3b?ver=5c31",
  },
  {
    name: "Meta",
    position: "Frontend Engineer",
    period: "Jun 2020 - Feb 2022",
    imageUrl: "https://upload.wikimedia.org/wikipedia/commons/7/7b/Meta_Platforms_Inc._logo.svg",
  },
  {
    name: "Amazon",
    position: "Software Development Engineer",
    period: "Jan 2019 - May 2020",
    imageUrl: "https://upload.wikimedia.org/wikipedia/commons/a/a9/Amazon_logo.svg",
  },
  {
    name: "Netflix",
    position: "Junior Software Engineer",
    period: "Sep 2017 - Dec 2018",
    imageUrl: "https://upload.wikimedia.org/wikipedia/commons/0/08/Netflix_2015_logo.svg",
  },
];
export function Experience() {
  return (
    <section className="space-y-6">
 <SectionBadge label="Experience" />
      <SectionHeader title="My Professional Journey" />      <div className="space-y-6">
        {experienceData.map((item, idx) => (
          <ExperienceItem key={idx} {...item} />
        ))}
      </div>
    </section>
  )
}
