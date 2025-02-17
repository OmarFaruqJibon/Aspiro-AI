"use client";

import React, { useEffect, useRef } from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import Link from "next/link";

const HeroSection = () => {
  const imageRef = useRef(null);

  useEffect(() => {
    const imageElement = imageRef.current;

    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const scrollThreshold = 100;

      if (scrollPosition > scrollThreshold) {
        imageElement.classList.add("scrolled");
      } else {
        imageElement.classList.remove("scrolled");
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section className="w-full pt-36 md:pt-48 pb-10 mb-12">
      <div className="space-y-6 text-center">
        <div className="space-y-6 mx-auto mb-7">
          <h1 className="text-4xl font-bold md:text-5xl lg:text-6xl xl:text-7xl animate-gradient">
            Your <span style={{ color: "#00ffff" }}>Intelligent</span> Career
            Navigator
            <br />
          </h1>
          <p className="mx-auto max-w-[600px] md:text-lg">
            Unlock Your Career Potential with Aspiro AI. Get AI-powered resumes,
            cover letters, and mock interviews in seconds!
          </p>
        </div>

        <div className="flex justify-center space-x-4">
          <Link href="/dashboard">
            <Button size="lg" className="glow-on-hover my-10">
              Lets Start
            </Button>
          </Link>
        </div>

        <div className="hero-image-wrapper mt-5 md:mt-0">
          <div ref={imageRef} className="hero-image">
            {/* <p>
              We develop AI solutions that enhance customer interactions,
              eradicate tedious tasks, and drive business growth
            </p> */}
            <Image
              src="/banner.jpg"
              width={1080}
              height={520}
              alt="Dashboard Preview"
              className="rounded-lg shadow-2xl border mx-auto"
              priority
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
