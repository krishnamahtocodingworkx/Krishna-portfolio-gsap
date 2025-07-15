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
        duration: 0.2,
        ease: "power3.out",
        stagger: 0.1,
        clearProps: "all",
      }
    );
    // gsap.from(navLinkRef.current, {
    //   y: 100,
    //   delay: 0.4,
    //   opacity: 0,
    //   duration: 0.4,
    //   ease: "power2.out",
    //   stagger: 0.1,
    // });
  }, []);
  return (
    <nav className="fixed w-full flex justify-between items-center px-40 py-10  text-white">
      <div className="overflow-hidden">
        <div
          ref={(el) => {
            if (el) navLinkRef.current[0] = el;
          }}
          className="flex items-center gap-0.5 font-raleway text-background"
        >
          <span className="font-bold text-3xl">K</span>
          <span className="nav-link" style={{ color: "black" }}>
            rishna
          </span>
        </div>
      </div>
      <div className="flex justify-center items-center gap-10 overflow-hidden">
        {navLinks.map((link, index) => (
          <span
            key={index}
            ref={(el) => {
              if (el) {
                navLinkRef.current[index + 1] = el;
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
