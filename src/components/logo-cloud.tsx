"use client";
import React, { useMemo } from 'react';
import { InfiniteSlider } from '@/components/ui/infinite-slider';
import { ProgressiveBlur } from '@/components/ui/progressive-blur';

export default function LogoCloud() {
  const logos = useMemo(() => [
    {
      src: "/lam3a.png",
      alt: "lam3a Logo",
      width: 150,
      height: 40
    },
    {
      src: "/Mena GCC.png",
      alt: "Mena GCC Logo",
      width: 150,
      height: 40
    },
    {
      src: "/etjahh.png",
      alt: "etjahh Logo",
      width: 80,
      height: 40
    },
    {
      src: "/nextbreak.png",
      alt: "nextbreak Logo",
      width: 80,
      height: 40
    },
   
  ], []);

  return (
    <section className="overflow-hidden py-16">
      <div className="group relative m-auto max-w-7xl px-6">
        <div className="flex flex-col items-center md:flex-row">
          <div className="relative py-6 w-full">
            <InfiniteSlider
              speedOnHover={20}
              speed={40}
              gap={112}
            >
              {logos.map((logo, index) => (
                <div 
                  key={index} 
                  className="flex items-center justify-center mx-8"
                  style={{ minWidth: `${logo.width}px` }}
                >
                  <img
                    src={logo.src}
                    alt={logo.alt}
                    className={`max-h-[${logo.height}px] dark:invert  | ''}`}
                    style={{ 
                      height: `${logo.height}px`,
                      width: 'auto'
                    }}
                  />
                </div>
              ))}
            </InfiniteSlider>

            {/* Gradient overlays */}
            <div className="absolute inset-y-0 left-0 w-20 bg-gradient-to-r from-background to-transparent z-10"></div>
            <div className="absolute inset-y-0 right-0 w-20 bg-gradient-to-l from-background to-transparent z-10"></div>
            
            {/* Progressive blur effects */}
            <ProgressiveBlur
              className="pointer-events-none absolute left-0 top-0 h-full w-20"
              direction="left"
              blurIntensity={1}
            />
            <ProgressiveBlur
              className="pointer-events-none absolute right-0 top-0 h-full w-20"
              direction="right"
              blurIntensity={1}
            />
          </div>
        </div>
      </div>
    </section>
  )
}