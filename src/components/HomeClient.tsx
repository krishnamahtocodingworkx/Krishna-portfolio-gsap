"use client";
import React from "react";
import Navbar from "./Navbar";
import useLenis from "@/utils/useLenis";
import Image from "next/image";

const icons = ["/email.svg", "/linkedin.svg", "/github.svg", "/leetcode.png"];
const HomeClient = () => {
  useLenis();
  return (
    <main className="w-full h-full flex flex-col">
      <div className="z-50">
        <Navbar />
      </div>
      {/* hero section */}
      <div className="w-full h-screen flex overflow-hidden">
        <div className="md:w-[60%] bg-gray-background h-full pt-60 pl-40 font-raleway text-background flex flex-col gap-10">
          <h2 className="font-bold text-4xl ">Hi, I am</h2>
          <div className="flex flex-col  ">
            <h1 className="font-bold text-6xl ">Krishna Mahto</h1>
            <p className="font-semibold text-sm text-gray">
              Software Engineer / FullStack Developer
            </p>
          </div>
          <div className="flex gap-5">
            {icons.map((icon, index) => {
              return (
                <span
                  key={index}
                  className="h-10 w-10 bg-gray-btn shadow-2xl flex justify-center items-center rounded-full"
                >
                  <Image src={icon} height={25} width={25} alt="social icon" />
                </span>
              );
            })}
          </div>
        </div>
        <div className="md:w-[40%] bg-background h-full">
          <div className="relative">
            <div className="absolute  w-50 h-[105vh] top-0 -left-20 rotate-[10deg] bg-background" />
          </div>
          <div className="h-full w-full flex items-end">
            <Image
              src={"/user-pic.svg"}
              alt="User Picture"
              width={500}
              height={500}
              className="w-[80%] h-[80%] object-cover z-20"
            />
          </div>
        </div>
      </div>

      {/* IT BERRIES section */}
      <div className="flex ">
        <div
          className="bg-light-black md:w-10/12 w-full
        md:px-30 px-10 md:pr-50 py-10 flex flex-col md:items-start items-center md:gap-6 gap-8 h-fit"
        >
          <h1 className="font-montserrat font-bold text-3xl  tracking-widest">
            IT BERRIES
          </h1>
          <p className="font-open-sans text-sm text-justify  ">
            Nulla in velit a metus rhoncus tempus. Nulla congue nulla vel sem
            varius finibus. Sed ornare sit amet lorem sed viverra. In vel urna
            quis libero viverra facilisis ut ac est. Morbi commodo, eros in
            dignissim tempus, lacus odio rutrum augue, in semper sem magna quis
            tellus. Etiam enim erat, suscipit eu semper a, dictum sit amet elit.
            Nunc egestas nisi eget enim gravida facilisis. Pellentesque laoreet
            varius turpis vel pharetra. Ut ante justo, consequat vitae elementum
            tempor, accumsan nec eros.
          </p>
          <button className="font-montserrat uppercase border-l-2 border-r-2 px-5 font-semibold cursor-pointer">
            READ MORE
          </button>
        </div>
        <div className="bg-foreground w-2/12 h-full md:block hidden">x</div>
      </div>

      <div className="w-full h-screen bg-gray-background"></div>
      <div className="w-full h-screen bg-gray-900"></div>
    </main>
  );
};

export default HomeClient;
