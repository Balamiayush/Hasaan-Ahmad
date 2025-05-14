"use client";
import Link from "next/link";
import { useEffect, useRef } from "react";
import gsap from "gsap";

interface AnimatedLinkProps {
  text: string;
  href: string;
}

const AnimatedLink = ({ text, href }: AnimatedLinkProps) => {
  const linkRef = useRef<HTMLAnchorElement>(null);

  useEffect(() => {
    if (!linkRef.current) return;

    const element = linkRef.current;
    const text1 = element.querySelector(".block1 span");
    const text2 = element.querySelector(".block2 span");

    if (!text1 || !text2) return;

    const onEnter = () => {
      gsap.to(".block1 span", {
        y: "-100%",
        stagger: 0.03,
        duration: 0.6,
        ease: "power3.out",
      });
      gsap.to(".block2 span", {
        y: "-100%",
        stagger: 0.03,
        duration: 0.6,
        ease: "power3.out",
      });
    };

    const onLeave = () => {
      gsap.to(".block1 span", {
        y: "0%",
        stagger: 0.03,
        duration: 0.6,
        ease: "power3.out",
      });
      gsap.to(".block2 span", {
        y: "0%",
        stagger: 0.03,
        duration: 0.6,
        ease: "power3.out",
      });
    };

    element.addEventListener("mouseenter", onEnter);
    element.addEventListener("mouseleave", onLeave);

    return () => {
      element.removeEventListener("mouseenter", onEnter);
      element.removeEventListener("mouseleave", onLeave);
    };
  }, []);

  const renderLetters = (text: string) => {
    return [...text].map((char, i) => (
      <span key={i} className="inline-block">
        {char === " " ? "\u00A0" : char}
      </span>
    ));
  };

  return (
    <Link href={href} className="text-[20px] font-medium relative overflow-hidden group" ref={linkRef}>
      <span className="block1 absolute top-0 left-0">
        {renderLetters(text)}
      </span>
      <span className="block2 relative">
        {renderLetters(text)}
      </span>
    </Link>
  );
};

export default AnimatedLink;
