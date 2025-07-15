"use client";
import gsap from "gsap";
import React, { useEffect, useRef } from "react";
const navLinks = ["About Me", "Skills", "Projects", "Contact Me"];
const Navbar = () => {
  const navLinkRef = useRef<HTMLSpanElement[]>([]);
  const navbarRef = useRef<HTMLDivElement>(null);

  const [showNavbar, setShowNavbar] = React.useState(true);
  const lastScrollYRef = useRef(0);

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
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY > lastScrollYRef.current && currentScrollY > 50) {
        setShowNavbar(false);
      } else {
        setShowNavbar(true);
      }

      lastScrollYRef.current = currentScrollY;
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <nav
      ref={navbarRef}
      className={`z-50  w-full flex justify-between items-center px-40 py-10 fixed top-0 left-0 transition-transform duration-300 ease-in-out ${
        showNavbar ? "translate-y-0" : "-translate-y-full"
      }`}
    >
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
