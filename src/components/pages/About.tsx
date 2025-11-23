import Image from "next/image";
import React from "react";

const About = () => {
  return (
    <div id="about" className="flex items-stretch w-full relative overflow-hidden">
      <div
        className="bg-light-black md:w-10/12 w-full
    md:px-20 px-10 md:pr-50 py-10 flex flex-col md:items-start items-center md:gap-6 gap-8"
      >
        {/* <h1 className="font-montserrat font-bold text-3xl tracking-widest z-10">
          IT BERRIES
        </h1> */}
        <h1 className="font-montserrat font-bold text-3xl tracking-widest z-10">
          CREATING MODERN DIGITAL EXPERIENCES
        </h1>

        <p className="font-open-sans text-sm text-justify z-10">
          Hi, I’m Krishna 👋 — a full-stack developer who loves crafting
          seamless user experiences and solving real-world problems through
          code. With expertise in React, Node.js, and TypeScript, I enjoy
          turning ideas into performant, maintainable applications. Whether
          it&apos;s building responsive UIs or designing RESTful APIs, I focus
          on writing clean, efficient, and scalable code. I&apos;m constantly
          exploring new tools, frameworks, and best practices to grow as a
          developer and deliver high-quality software.
        </p>
        {/* <button className="font-montserrat uppercase border-l-2 border-r-2 px-5 font-semibold cursor-pointer">
          READ MORE
        </button> */}
      </div>
      <div className="absolute -right-10">
        <Image
          src="/Logo ITB.svg"
          alt="ITB Logo"
          width={500}
          height={700} // <-- adjust this to the expected natural content height
          className="object-contain "
        />
      </div>
      <div className="bg-foreground md:w-2/12 flex justify-center items-start"></div>
    </div>
  );
};

export default About;
