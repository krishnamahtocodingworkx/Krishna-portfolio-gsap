"use client";
import React from "react";
import Navbar from "./Navbar";
import useLenis from "@/utils/useLenis";

const HomeClient = () => {
  useLenis();
  return (
    <main className="relative w-full h-full flex flex-col">
      <Navbar />
      <div className="w-full h-screen "></div>
      <div className="w-full h-screen bg-amber-200"></div>
      <div className="w-full h-screen bg-amber-50"></div>
    </main>
  );
};

export default HomeClient;
