"use client";
import gsap from "gsap";
import React, { useEffect, useRef } from "react";
const navLinks = ["About Me", "Skills", "Projects", "Contact Me"];
const Navbar = () => {
  const navLinkRef = useRef<HTMLSpanElement[]>([]);

  useEffect(() => {
    gsap.fromTo(
      navLinkRef.current,
      {
        y: 60,
        opacity: 0,
      },
      {
        y: 0,
        opacity: 1,
        duration: 0.8,
        ease: "power3.out",
        stagger: 0.2,
        clearProps: "all",
      }
    );
  }, []);
  return (
    <nav className="fixed w-full flex justify-between items-center px-60 py-10  text-white">
      <div className="flex items-center gap-0.5 font-raleway">
        <span className="font-semibold text-2xl">K</span>
        <span className=" text-lg font-light">rishna</span>
      </div>
      <div className="flex justify-center items-center gap-10 overflow-hidden">
        {navLinks.map((link, index) => (
          <span
            key={index}
            ref={(el) => {
              if (el) {
                navLinkRef.current[index] = el;
              }
            }}
            className="cursor-pointer hover:text-gray-300 transition-colors duration-300 nav-link"
          >
            {link}
          </span>
        ))}
      </div>
    </nav>
  );
};

export default Navbar;
