"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import partnerlogo from "../../../public/partner.png"

const partners = [
  { id: 1, name: "TechCorp", logo: partnerlogo },
  { id: 2, name: "GlobalSol", logo: partnerlogo },
  { id: 3, name: "InnovateX", logo: partnerlogo },
  { id: 4, name: "Streamline", logo: partnerlogo },
  { id: 5, name: "DataFlow", logo: partnerlogo },
  { id: 6, name: "CloudScale", logo: partnerlogo },
];

export default function OurPartner() {
  return (
    <section className="py-20 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 mb-12 text-center navtext tracking-tight">
        <h2 className="text-5xl font-bold text-[#04413D] mb-4">Amphlo's Eminent University Tie-Ups</h2>
        <p className="text-gray-600">Powering B2B success across global markets.</p>
      </div>

      <div className="relative flex overflow-hidden">
        <motion.div
          className="flex gap-16 items-center"
          animate={{ x: ["0%", "-50%"] }}
          transition={{
            duration: 25,
            ease: "linear",
            repeat: Infinity,
          }}
        >
          {[...partners, ...partners].map((partner, index) => (
            <div
              key={`${partner.id}-${index}`}
              className="shrink-0 grayscale hover:grayscale-0 transition-all duration-300 cursor-pointer"
            >
              <div className="relative w-40 h-30">
                <Image
                  src={partner.logo}
                  alt="logo"
          
                  fill
                  priority
                  className="object-contain"
                />
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}