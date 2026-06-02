"use client";

import { classNameProps } from "@/library/GlobalDateConfig";
import AnimatedSection from "@/components/AnimatedSection";

export default function ConextfiveValueSection({ className = "" }: classNameProps) {
  return (
    <AnimatedSection className={`w-dvw h-dvh py-12 md:py-20 bg-red-500 ${className}`}>
      <div className="container mx-auto px-4 w-full h-full">
      </div>
    </AnimatedSection>
  );
}