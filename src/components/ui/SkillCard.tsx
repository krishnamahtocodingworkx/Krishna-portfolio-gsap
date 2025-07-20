"use client";
import Image from "next/image";
import React from "react";

const SkillCard = ({
  heading,
  usingNowSkills,
}: {
  heading: string;
  usingNowSkills: { name: string; icon: string }[];
}) => {
  return (
    <div className="flex flex-col gap-10  w-full px-[5vw]">
      <h1 className="header pl-10">{heading}</h1>
      <div className="grid grid-cols-2 md:grid-cols-4 justify-between gap-10  w-full">
        {usingNowSkills.map((skill, index) => {
          return (
            <span key={index} className="flex flex-col items-center gap-2">
              <Image
                src={skill.icon}
                alt={skill.name}
                height={10}
                width={10}
                className="w-10 h-10 md:w-15 md:h-15 skill-icon"
              />
              <span className="text-sm md:text-base uppercase text-background tracking-widest font-[100] text-center">
                {skill.name}
              </span>
            </span>
          );
        })}
      </div>
    </div>
  );
};

export default SkillCard;
