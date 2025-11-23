"use client";
import React from "react";
import HeadingButton from "../ui/HeadingButton";
import SkillCard from "../ui/SkillCard";
const usingNowSkills: { name: string; icon: string }[] = [
  { name: "Html5", icon: "/html.svg" },
  { name: "CSS", icon: "/css.svg" },
  { name: "Javascript", icon: "/js.svg" },
  { name: "TypeScript", icon: "/typescript.svg" },
  { name: "React", icon: "/re.svg" },
  { name: "Next", icon: "/next-js.svg" },
  { name: "Tailwind CSS", icon: "/tailwind.svg" },
  { name: "gsap", icon: "/gsap.svg" },
];
const Skills = () => {
  return (
    <div id="skills" className="w-full h-full flex flex-col gap-10 items-center justify-center bg-gray-background md:px-[20vw] px-10 py-20">
      <HeadingButton text="Skills" />
      <SkillCard heading="Using now:" usingNowSkills={usingNowSkills} />
      <SkillCard
        heading="Familiar with:"
        usingNowSkills={[
          { name: "Node.js", icon: "/nodejs.svg" },
          { name: "Express.js", icon: "/express-js.svg" },
          { name: "MongoDB", icon: "/mongodb-icon.svg" },
          { name: "React Native", icon: "/react-native.svg" },
        ]}
      />

      <SkillCard
        heading="OTHER SKILLS:"
        usingNowSkills={[
          { name: "C", icon: "/c-icon.svg" },
          { name: "C++", icon: "/cpp.svg" },
          { name: "Java", icon: "/java.svg" },
          { name: "Git", icon: "/git.svg" },
        ]}
      />
    </div>
  );
};

export default Skills;
