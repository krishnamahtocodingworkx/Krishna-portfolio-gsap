"use client";
import gsap from "gsap";
import React, { useEffect, useRef, useState } from "react";

const NavLinks = [
  {
    name: "About Me",
    href: "#about",
  },
  {
    name: "Resume",
    href: "#resume",
  },
  {
    name: "Skills",
    href: "#skills",
  },
  {
    name: "Projects",
    href: "#projects",
  },
  {
    name: "Contact Me",
    href: "#contact",
  },
];

const Navbar = () => {
  const navLinkRef = useRef<HTMLElement[]>([]);
  const navbarRef = useRef<HTMLElement>(null);
  const [showNavbar, setShowNavbar] = useState(true);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
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
      if (isMenuOpen) return;

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
  }, [isMenuOpen]);

  useEffect(() => {
    document.body.style.overflow = isMenuOpen ? "hidden" : "";

    return () => {
      document.body.style.overflow = "";
    };
  }, [isMenuOpen]);

  const scrollToSection = (href: string) => {
    setIsMenuOpen(false);
    document.getElementById(href.slice(1))?.scrollIntoView({
      behavior: "smooth",
    });
  };

  return (
    <>
      <nav
        ref={navbarRef}
        className={`z-50 w-full flex justify-between items-center px-6 sm:px-10 md:px-16 lg:px-40 py-5 md:py-10 fixed top-0 left-0 transition-transform duration-300 ease-in-out ${
          showNavbar ? "translate-y-0" : "-translate-y-full"
        }`}
      >
        <div className="overflow-hidden">
          <button
            type="button"
            ref={(el) => {
              if (el) navLinkRef.current[0] = el;
            }}
            onClick={() => {
              setIsMenuOpen(false);
              window.scrollTo({ top: 0, behavior: "smooth" });
            }}
            className="flex items-center gap-0.5 font-raleway cursor-pointer"
            aria-label="Go to top"
          >
            <span className="font-bold text-2xl md:text-3xl text-white md:text-background">
              K
            </span>
            <span className="nav-link text-white md:text-black">rishna</span>
          </button>
        </div>

        <div className="hidden md:flex justify-center items-center gap-6 lg:gap-10 overflow-hidden">
          {NavLinks.map((link, index) => (
            <a
              href={link.href}
              key={link.href}
              ref={(el) => {
                if (el) {
                  navLinkRef.current[index + 1] = el;
                }
              }}
              onClick={(e) => {
                e.preventDefault();
                scrollToSection(link.href);
              }}
              className="cursor-pointer hover:text-gray-300 transition-colors duration-300 nav-link"
            >
              {link.name}
            </a>
          ))}
        </div>

        <button
          type="button"
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          aria-expanded={isMenuOpen}
          className="md:hidden relative z-[60] flex h-10 w-10 flex-col items-center justify-center gap-1.5"
          onClick={() => setIsMenuOpen((open) => !open)}
        >
          <span
            className={`block h-0.5 w-6 bg-white transition-transform duration-300 ${
              isMenuOpen ? "translate-y-2 rotate-45" : ""
            }`}
          />
          <span
            className={`block h-0.5 w-6 bg-white transition-opacity duration-300 ${
              isMenuOpen ? "opacity-0" : "opacity-100"
            }`}
          />
          <span
            className={`block h-0.5 w-6 bg-white transition-transform duration-300 ${
              isMenuOpen ? "-translate-y-2 -rotate-45" : ""
            }`}
          />
        </button>
      </nav>

      <div
        className={`fixed inset-0 z-40 md:hidden bg-black/95 backdrop-blur-md transition-opacity duration-300 ${
          isMenuOpen
            ? "opacity-100 pointer-events-auto"
            : "opacity-0 pointer-events-none"
        }`}
      >
        <div className="flex h-full flex-col items-center justify-center gap-8 px-6">
          {NavLinks.map((link) => (
            <a
              href={link.href}
              key={link.href}
              onClick={(e) => {
                e.preventDefault();
                scrollToSection(link.href);
              }}
              className="nav-link text-2xl text-white hover:text-purple transition-colors duration-300"
            >
              {link.name}
            </a>
          ))}
        </div>
      </div>
    </>
  );
};

export default Navbar;
