"use client";

import React from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';

import missionImg  from "../../../public/amphlo.jpg"
import visionImg  from "../../../public/bannerone.jpg"


export default function MissionAndVision() {
  const missionvision = [
    {
      image: missionImg,
      title: "Our Mission",
      subtitle: "Empowering Partners Through Innovation",
      description: "Our mission is to simplify complex workflows for global educational consultants. We strive to bridge the gap between technology and human connection, providing the tools necessary to foster transparency, efficiency, and growth in every partnership."
    },
    {
      image: visionImg,
      title: "Our Vision",
      subtitle: "To be the Global Standard for Connectivity",
      description: "We envision a world where every educational opportunity is accessible through a seamless, integrated ecosystem. By 2030, our goal is to become the primary infrastructure supporting the exchange of knowledge across borders, making global education a reality for all."
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.3 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
  };

  return (
    <section className="py-24 overflow-hidden w-full bg-gray-100 flex mx-auto h-full navtext">
      <motion.div
        className="max-w-7xl mx-auto px-6 space-y-32"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
      >
        {missionvision.map((item, index) => (
          <div
            key={index}
            className={`flex flex-col items-center gap-12 lg:gap-20 w-11/12 mx-auto ${
              index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
            }`}
          >
            <motion.div className="flex-1 relative group w-full" variants={itemVariants}>
              <div 
                className={`absolute -inset-4 bg-[#04413D]/10 rounded-3xl transition-transform group-hover:rotate-1 ${
                  index % 2 === 0 ? "rotate-3" : "-rotate-3"
                }`} 
              />
              <div className="relative h-[50vh] w-full bg-[#04413D]/20 rounded-2xl overflow-hidden shadow-2xl cursor-pointer">
                <Image 
                  src={item.image} 
                  alt={item.title} 
                  fill 
                  className="object-cover" 
                />
              </div>
            </motion.div>

            <motion.div className="flex-1 space-y-6" variants={itemVariants}>
              <div className="inline-block px-4 py-1 rounded-full bg-[#04413D]/10 text-[#04413D] text-sm font-bold uppercase tracking-widest">
                {item.title}
              </div>
              <h2 className="text-2xl lg:text-4xl  font-bold text-[#04413D] leading-tight">
                {item.subtitle} 
              </h2>
              <p className="text-md text-slate-600 leading-relaxed text-justify">
                {item.description}
              </p>
            </motion.div>
          </div>
        ))}
      </motion.div>
    </section>
  );
}