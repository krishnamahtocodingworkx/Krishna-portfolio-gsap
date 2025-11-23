"use client";
import React from "react";
import HeadingButton from "../ui/HeadingButton";
import Image from "next/image";

const Contact = () => {
  return (
    <div id="contact" className="bg-gray-background text-background h-full w-full flex flex-col justify-center items-center gap-10 md:px-[25vw] px-10 py-20">
      <HeadingButton text="contact" />
      <p className="description">
        Nulla in velit a metus rhoncus tempus. Nulla congue nulla vel sem varius
        finibus. Sed ornare sit amet lorem sed viverra. In vel urna quis libero
        viverra facilisis ut ac est.
      </p>
      <Image src={"/separator.svg"} alt="separator" width={100} height={100} />
      <form className="w-full flex flex-col gap-10 justify-center items-center">
        <input
          type="text"
          className="border-l-4 border-b-4 border-transparent border-l-black border-b-black outline-none  p-3 md:w-2/3 w-full uppercase text-[#8B8B8B] font-semibold hover:border-b-blue-500 hover:border-l-blue-500 transition
 focus:border-b-blue-500 focus:border-l-blue-500"
          placeholder="Enter your email*"
        />

        <input
          type="text"
          className="border-l-4 border-b-4 border-transparent border-l-black border-b-black outline-none  p-3 md:w-2/3 w-full uppercase text-[#8B8B8B] font-semibold hover:border-b-blue-500 hover:border-l-blue-500 transition
 focus:border-b-blue-500 focus:border-l-blue-500"
          placeholder="Enter your email*"
        />
        <input
          type="text"
          className="border-l-4 border-b-4 border-transparent border-l-black border-b-black outline-none  p-3 md:w-2/3 w-full uppercase text-[#8B8B8B] font-semibold hover:border-b-blue-500 hover:border-l-blue-500 transition
 focus:border-b-blue-500 focus:border-l-blue-500"
          placeholder="Enter your email*"
        />
        <textarea
          placeholder="Enter your message"
          className="border-l-4 border-b-4 border-transparent border-l-black border-b-black outline-none  p-3 md:w-2/3 w-full uppercase text-[#8B8B8B] font-semibold hover:border-b-blue-500 hover:border-l-blue-500 transition
 focus:border-b-blue-500 focus:border-l-blue-500"
        />
        <button className="font-montserrat uppercase border-l-2 border-r-2 px-5 font-semibold cursor-pointer">
          SUBMIT 📮
        </button>
      </form>
    </div>
  );
};

export default Contact;
