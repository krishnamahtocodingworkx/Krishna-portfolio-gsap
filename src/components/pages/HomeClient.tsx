"use client";
import React from "react";
import useLenis from "@/utils/useLenis";
import Navbar from "../ui/Navbar";
import Skills from "./Skills";
import Contact from "./Contact";
import Footer from "./Footer";
import Experience from "./Experience";
import Hero from "./Hero";
import About from "./About";
import RecentProjects from "./RecentProjects";

const HomeClient = () => {
  useLenis();
  return (
    <main className="w-full h-full flex flex-col">
      <Navbar />
      {/* hero section */}
      <Hero />
      {/* about section */}
      <About />
      <Skills />
      <RecentProjects />
      <Experience />
      <Contact />
      <Footer />
    </main>
  );
};

export default HomeClient;
