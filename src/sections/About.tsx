"use client";
import { SectionHeader } from "@/components/SectionHeader";
import { Card } from "@/components/Card";
import bookImage from "@/assets/images/book.png";
import Image from "next/image";
import TypescriptIcon from "@/assets/icons/typescript.svg";
import OracleIcon from "@/assets/icons/oracle.svg";
import MongodbIcon from "@/assets/icons/mongodb.svg";
import PostgresqlIcon from "@/assets/icons/postgresql.svg";
import VueIcon from "@/assets/icons/vue.svg";
import AngularIcon from "@/assets/icons/angular.svg";
import NetCoreIcon from "@/assets/icons/dot-net-core.svg";
import JavaIcon from "@/assets/icons/java.svg";
import ReactIcon from "@/assets/icons/react.svg";
import mapImage from "@/assets/images/map.png";
import smileMemoji from "@/assets/images/ar-emoji-arms-crossed-white.png";
import { CardHeader } from "@/components/CardHeader";
import { ToolBoxItems } from "@/components/ToolBoxItems";
import { motion } from "framer-motion";
import { useRef } from "react";

const toolboxItems = [
  {
    title: "Typescript",
    iconType: TypescriptIcon,
  },
  {
    title: "React",
    iconType: ReactIcon,
  },
  {
    title: "Angular",
    iconType: AngularIcon,
  },
  {
    title: "VueJs",
    iconType: VueIcon,
  },
  {
    title: ".Net",
    iconType: NetCoreIcon,
  },
  {
    title: "Java",
    iconType: JavaIcon,
  },
  {
    title: "PostgreSQL",
    iconType: PostgresqlIcon,
  },
  {
    title: "MongoDB",
    iconType: MongodbIcon,
  },
  {
    title: "Oracle",
    iconType: OracleIcon,
  },
];

const hobbies = [
  {
    title: "Music",
    emoji: "🎹",
    left: "5%",
    top: "5%",
  },
  {
    title: "Fitness",
    emoji: "🏋",
    left: "50%",
    top: "5%",
  },
  {
    title: "Reading",
    emoji: "📚",
    left: "10%",
    top: "35%",
  },
  {
    title: "Gaming",
    emoji: "🎮",
    left: "35%",
    top: "40%",
  },
];

export const AboutSection = () => {
  const constraintRef = useRef(null);
  return (
    <div className="py-20 lg:py-28">
      <div className="container">
        <SectionHeader
          eyebrow="About Me"
          title="Glimpse Into My World"
          description="Learn more about who I am, what I do, and what inspires me."
        />
        <div className="mt-20 flex flex-col gap-8">
          <div className="grid grid-cols-1 gap-8 md:grid-cols-5 lg:grid-cols-3">
            <Card className="h-[320px] md:col-span-2 lg:col-span-1">
              <CardHeader
                title="My Reads"
                description="Explore the books shaping my perspective"
              />
              <div className="w-40 mx-auto mt-2 md:mt-0">
                <Image src={bookImage} alt="Book Cover" />
              </div>
            </Card>
            <Card className="h-[320px] md:col-span-3 lg:col-span-2">
              <div>
                <CardHeader
                  title="My Toolbox"
                  description="Explore the technologies and tools I use to craft exceptional
                digital experiences"
                  className=""
                />
              </div>
              <ToolBoxItems
                items={toolboxItems}
                className=""
                itemsWrapperClassName="animate-move-left [animation-duration:30s]"
              />
              <ToolBoxItems
                items={toolboxItems}
                className="mt-6"
                itemsWrapperClassName="animate-move-right [animation-duration:15s]"
              />
            </Card>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-5 lg:grid-cols-3 gap-8">
            <Card className="h-[320px] p-0 flex flex-col md:col-span-3 lg:col-span-2">
              <CardHeader
                title="Beyond the Code"
                description="Explore my interests and hobbies beyond the digital realm."
                className="px-6 py-6"
              />
              <div className="relative flex-1" ref={constraintRef}>
                {hobbies.map((hobby) => (
                  <motion.div
                    key={hobby.title}
                    className="inline-flex items-center gap-2 px-6 
                  bg-gradient-to-r from-emerald-300 to-sky-400 
                  rounded-full py-1.5 absolute"
                    style={{
                      left: hobby.left,
                      top: hobby.top,
                    }}
                    drag
                    dragConstraints={constraintRef}
                  >
                    <span className="font-medium text-gray-950">
                      {hobby.title}
                    </span>
                    <span>{hobby.emoji}</span>
                  </motion.div>
                ))}
              </div>
            </Card>
            <Card className="h-[320px] p-0 md:col-span-2 lg:col-span-1">
              <Image
                src={mapImage}
                alt="map"
                className="h-full w-full object-cover object-left-top"
              />
              <div
                className="absolute top-1/2 left-1/2 -translate-x-1/2 
            -translate-y-1/2 size-20 rounded-full   after:content-[''] after:absolute
            after:inset-0 after:outline after:outline-2 flex justify-center items-center
            after:-outline-offset-2 after:rounded-full after:outline-gray-950/30"
              >
                <div
                  className="absolute inset-0 rounded-full bg-gradient-to-r
            from-emerald-300 to-sky-400 -z-20 animate-ping [animation-duration:2s]"
                ></div>
                <div
                  className="absolute inset-0 rounded-full bg-gradient-to-r
            from-emerald-300 to-sky-400 -z-10"
                ></div>
                <Image
                  src={smileMemoji}
                  alt="smiling memoji"
                  width={69}
                  height={69}
                />
              </div>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};
