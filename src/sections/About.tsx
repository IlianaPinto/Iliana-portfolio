import { SectionHeader } from "@/components/SectionHeader";
import { Card } from "@/components/Card";
import StarIcon from "@/assets/icons/star.svg";
import bookImage from "@/assets/images/book-cover.png";
import Image from "next/image";
import JavascriptIcon from "@/assets/icons/square-js.svg";
import ReactIcon from "@/assets/icons/react.svg";

const toolboxItems = [
  {
    title: "Javascript/Typescript",
    icon: <JavascriptIcon />,
  },
  {
    title: "React",
    icon: <ReactIcon />,
  },
  {
    title: "Angular",
    icon: <JavascriptIcon />,
  },
  {
    title: "VueJs",
    icon: <JavascriptIcon />,
  },
  {
    title: ".Net/C#",
    icon: <JavascriptIcon />,
  },
  {
    title: "PostgreSQL",
    icon: <JavascriptIcon />,
  },
  {
    title: "MongoDB",
    icon: <JavascriptIcon />,
  },
  {
    title: "Oracle",
    icon: <JavascriptIcon />,
  },
];

export const AboutSection = () => {
  return (
    <div className="pb-96">
      <SectionHeader
        eyebrow="About Me"
        title="Glimpse Into My World"
        description="Learn more about who I am, what I do, and what inspires me."
      />
      <div>
        <Card>
          <div>
            <StarIcon />
            <h3>My Reads</h3>
            <p>Explore the books shaping my perspectives.</p>
          </div>
          <Image src={bookImage} alt="Book Cover" />
        </Card>
        <Card>
          <div>
            <StarIcon />
            <h3>My Toolbox</h3>
            <p>
              Explore the technologies and tools I use to craft exceptional
              digital experiences
            </p>
          </div>
          <div>
            {toolboxItems.map((item) => (
              <div key={item.title}>
                <span>{item.icon}</span>
                <span>{item.title}</span>
              </div>
            ))}
          </div>
        </Card>
      </div>
    </div>
  );
};
