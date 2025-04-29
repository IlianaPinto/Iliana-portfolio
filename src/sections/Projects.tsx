import sumz from "@/assets/images/sumz.png";
import saasLandingPage from "@/assets/images/saas-landing-page.png";
import Image from "next/image";
import CheckCircleIcon from "@/assets/icons/check-circle.svg";
import ArrowRightIcon from "@/assets/icons/arrow-up-right.svg";
import grainImage from "@/assets/images/grain.jpg";
import { Card } from "@/components/Card";
import { SectionHeader } from "@/components/SectionHeader";

const portfolioProjects = [
  {
    company: "Iliana's Corp",
    year: "2025",
    title: "Summarizer Application",
    results: [
      { title: "Built it using ReactJS and TailwindCSS" },
      { title: "Used OpenAI's GPT model" },
    ],
    link: "https://sumz-nu.vercel.app/",
    image: sumz,
  },
  {
    company: "Iliana's Corp",
    year: "2024",
    title: "Landing Page",
    results: [
      { title: "Build it using ReactJS and TailwindCSS" },
      { title: "Modern UI and mobile-first principles" },
    ],
    link: "https://xora-web.netlify.app/",
    image: saasLandingPage,
  },
];

export const ProjectsSection = () => {
  return (
    <section className="py-20 lg:py-28">
      <div className="container">
        <SectionHeader
          eyebrow="Real-world Results"
          title="Featured Projects"
          description="Discover how I bring ideas to life through captivating digital
          solutions."
        />
        <div className="flex flex-col mt-10 md:mt-20 gap-20">
          {portfolioProjects.map((project, projectIndex) => (
            <Card
              key={project.title}
              className="px-8 pt-8 md:pt-12 md:px-10 lg:pt-16 lg:px-20 
              sticky top-16"
              style={{
                top: `calc(64px + ${projectIndex * 40}px`,
              }}
            >
              <div
                className="absolute inset-0 -z-10 opacity-5"
                style={{ backgroundImage: `url(${grainImage.src})` }}
              ></div>
              <div className="lg:grid lg:grid-cols-2 lg:gap-16">
                <div className="lg:pb-16">
                  <div
                    className="bg-gradient-to-r from-emerald-300 gap-2 
                text-transparent bg-clip-text to-sky-400 
                inline-flex font-bold uppercase tracking-widest text-sm"
                  >
                    <span>{project.company}</span>
                    <span>&bull;</span>
                    <span>{project.year}</span>
                  </div>
                  <h3 className="font-serif text-2xl mt-2 md:mt-5 md:text-4xl">
                    {project.title}
                  </h3>
                  <hr className="border-t-2 border-white/5 mt-4 md:mt-5" />
                  <ul className="flex flex-col gap-4 mt-4 md:mt-5">
                    {project.results.map((result) => (
                      <li
                        className="flex gap-2 text-sm md:text-base text-white/50"
                        key={result.title}
                      >
                        <CheckCircleIcon className="size-5 md:size-6" />
                        <span>{result.title}</span>
                      </li>
                    ))}
                  </ul>
                  <a href={project.link} target="_blank">
                    <button
                      className="bg-white text-gray-950 h-12 w-full md:w-auto
                rounded-xl font-semibold inline-flex items-center px-8
                justify-center gap-2 mt-8"
                    >
                      <span>Visit Live Site</span>
                      <ArrowRightIcon className="size-4" />
                    </button>
                  </a>
                </div>
                <div className="relative">
                  <Image
                    src={project.image}
                    alt={project.title}
                    className="mt-8 -mb-4 md:-mb-0 lg:mt-0
                    lg:absolute lg:h-full lg:w-auto 
                    lg:max-w-none"
                  />
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
