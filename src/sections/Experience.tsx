"use client";
import { Card } from "@/components/Card";
import { SectionHeader } from "@/components/SectionHeader";
import { Reveal } from "@/components/Reveal";
import CheckCircleIcon from "@/assets/icons/check-circle.svg";

const experiences = [
  {
    company: "Acklen Avenue",
    location: "Remote",
    position: "Fullstack Developer",
    years: "October 2021 - May 2024",
    descriptions: [
      { title: "Transformed legacy codebase to microservices architecture." },
      { title: "Integrated automated workflows and cross-app data sync." },
      { title: "Reduced technical debt and added features." },
      { title: "Collaborated with clients to align tech solutions with business goals." },
      { title: "Participated in agile cycles and contributed to code and technical reviews." },
      { title: "Provided technical support to ensure quick issue resolution." },
    ],
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
        <div className="flex flex-col mt-20 w-full">
          {experiences.map((experience, index) => (
            <Reveal key={index} width="100%">
              <Card className="w-full px-10 py-16">
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
                    <div className="text-right font-serif text-xl">
                      {experience.location}
                    </div>
                  </div>
                  <ul className="flex flex-col gap-4 mt-4 md:mt-5">
                    {experience.descriptions.map((result, index) => (
                      <Reveal key={index}>
                        <li
                        className="flex gap-2 text-sm md:text-base text-white/60"
                        key={result.title}
                      >
                        <CheckCircleIcon className="size-5 md:size-6" />
                        <span>{result.title}</span>
                      </li>
                      </Reveal>
                      
                    ))}
                  </ul>
                </div>
              </Card>
            </Reveal>
          ))}
        </div>
      </div>
    </div>
  );
};
