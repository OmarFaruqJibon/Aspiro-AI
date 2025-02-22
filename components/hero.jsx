"use client";

import React from "react";
import { Button } from "@/components/ui/button";
import Link from "next/link";

const HeroSection = () => {
  return (
    <section className="w-full pt-36 md:pt-40 pb-10 mb-12">
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

        <div className="flex justify-center space-x-4 start-mar">
          <Link href="/dashboard">
            <Button size="lg" className="glow-on-hover my-10">
              Lets Start
            </Button>
          </Link>
        </div>

        <div className="gemini-effect">
          <div className="glow-circle"></div>
          <div className="line left-line-1"></div>
          <div className="line right-line-1"></div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
