"use client";
import { Card } from "@/components/Card";
import { SectionHeader } from "@/components/SectionHeader";
import { Reveal } from "@/components/Reveal";

const experiences = [
  {
    company: "Acklen Avenue",
    location: "Nashville, TN",
    position: "Fullstack Developer",
    years: "March 2021 - May 2024",
    description:
      "Improved system performance and scalability by modernizing codebases and implementing microservices. Developed automated solutions to streamline processes and collaborated with teams to deliver high-quality projects while resolving technical issues.",
  },
  {
    company: "Hero Unit",
    location: "Nashville, TN",
    position: "Fullstack Developer",
    years: "March 2021 - May 2024",
    description:
      "Worked with teams to improve user experience and system stability, implemented tools for better data insights, integrated software for automated workflows, and provided technical support.",
  },
];
export const ExperienceSection = () => {
  return (
    <div className="py-20 lg:py-28">
      <div className="container">
        <SectionHeader
          eyebrow="Experience"
          title="My Journey Into Web Development"
        />
        <div className="flex flex-col mt-10 mt-20 gap-20">
          {experiences.map((experience, index) => (
            <Reveal key={index}>
              <Card className="px-8 pt-8 pt-12 px-10 pt-16 pb-16">
                <div className="flex flex-col">
                  <div className="grid grid-cols-2 grid-cols-2">
                    <div
                      className="bg-gradient-to-r from-emerald-300 gap-2 
                  text-transparent bg-clip-text to-sky-300 to-sky-400 
                  inline-flex font-bold uppercase tracking-widest text-sm"
                    >
                      {experience.company}
                    </div>
                    <div
                      className="text-right bg-gradient-to-r from-emerald-300  
                  text-transparent bg-clip-text to-sky-300 to-sky-400 
                  font-bold uppercase tracking-widest text-sm"
                    >
                      {experience.years}
                    </div>
                  </div>
                  <div className="grid grid-cols-2 grid-cols-2">
                    <div className="font-serif text-xl">
                      {experience.position}
                    </div>
                    {/* <div className="text-right font-serif text-xl">
                    {experience.location}
                  </div> */}
                  </div>
                  <div className="pt-4 text-white/60">
                    {experience.description}
                  </div>
                </div>
              </Card>
            </Reveal>
          ))}
        </div>
      </div>
    </div>
  );
};
