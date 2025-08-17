"use client";
import { ArrowRight, Star } from "lucide-react";
import React from "react";
import { motion } from "framer-motion";

import { Avatar, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";

const Hero7 = () => {
  return (
    <div className="min-h-screen w-full bg-white relative overflow-hidden">




      {/* Minimal Gradient Background */}
      
      <div
        className="absolute inset-0 z-0"
    style={{
      backgroundImage: `
        linear-gradient(to right, rgba(229,231,235,0.8) 1px, transparent 1px),
        linear-gradient(to bottom, rgba(229,231,235,0.8) 1px, transparent 1px),
        radial-gradient(circle 500px at 20% 100%, rgba(139,92,246,0.3), transparent),
        radial-gradient(circle 500px at 100% 80%, rgba(59,130,246,0.3), transparent)
      `,
      backgroundSize: "48px 48px, 48px 48px, 100% 100%, 100% 100%",
    }}
      />
      
      {/* Content */}
      <section className="relative z-10 py-24 px-4 flex flex-col items-center justify-center min-h-screen">
        <div className="container max-w-3xl mx-auto text-center">
          {/* Tagline */}
          <motion.div 
            className="mb-8 flex justify-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div className="flex items-center gap-2 text-blue-600 font-medium px-4 py-1.5">
              <div className="h-1.5 w-1.5 bg-blue-600 rounded-full" />
              BUILD • GROW • SCALE
            </div>
          </motion.div>
          
          {/* Headline */}
          <motion.h1 
            className="text-4xl md:text-5xl font-bold mb-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            Full Stack Solutions
            <br />
            <span className="text-blue-600">For Business Growth</span>
          </motion.h1>
          
          {/* Description */}
          <motion.p 
            className="text-gray-600 text-lg max-w-xl mx-auto mb-10"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            We build digital products that help your business thrive.
          </motion.p>
          
          {/* CTAs */}
          <motion.div 
            className="flex flex-col sm:flex-row justify-center gap-3"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <Button 
              size="lg" 
              className="px-6 gap-2"
              asChild
            >
              <a href="#">
                Start Building
                <ArrowRight size={18} />
              </a>
            </Button>
            <Button 
              size="lg" 
              variant="outline"
              className="border-gray-300"
              asChild
            >
              <a href="#contact">
                Contact Now
              </a>
            </Button>
          </motion.div>
          
          {/* Social Proof */}
          <motion.div 
            className="mt-16 bg-gray-50 rounded-xl p-5 max-w-md mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <div className="flex items-center justify-center gap-4">
              <div className="flex -space-x-3">
                {[1, 2, 3, 4].map((i) => (
                  <Avatar key={i} className="size-10 border-2 border-white">
                    <AvatarImage 
                      src={`https://randomuser.me/api/portraits/${i % 2 === 0 ? 'men' : 'women'}/${i+20}.jpg`} 
                    />
                  </Avatar>
                ))}
              </div>
              <div className="text-left">
                <div className="flex items-center gap-1">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="size-4 fill-yellow-400 text-yellow-400" />
                  ))}
                  <span className="font-bold ml-1">4.9</span>
                </div>
                <p className="text-gray-600 text-sm">250+ businesses scaled</p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
      

    </div>
  );
};

export { Hero7 };