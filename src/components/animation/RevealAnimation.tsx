"use client";
import React, { useEffect, useRef } from "react";
import gsap from "gsap";

interface RevealAnimationProps {
  text: string;
  classes: string;
}

const RevealAnimation: React.FC<RevealAnimationProps> = ({ text, classes }) => {
  const ref = useRef<HTMLParagraphElement>(null);

  useEffect(() => {
    gsap.fromTo(
      ref.current,
      {
        y: 60,
        opacity: 0,
      },
      {
        y: 0,
        opacity: 1,
        duration: 0.8,
        ease: "power3.out",
      }
    );
  }, []);

  return (
    <div className="w-fit h-full flex justify-center items-center overflow-hidden">
      <p ref={ref} className={classes}>
        {text}
      </p>
    </div>
  );
};

export default RevealAnimation;
