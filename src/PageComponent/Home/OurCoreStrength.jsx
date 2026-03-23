"use client";

import { useInView } from "react-intersection-observer";
import CountUp from "react-countup";
import Image from "next/image";
import { motion } from "framer-motion";
import coreimage from "../../../public/amphlo.jpg";
const stats = [
  { label: "Agents", value: 5300, suffix: "+" },
  { label: "Global Institutions", value: 140, suffix: "+" },
  { label: "Countries", value: 75, suffix: "+" },
  { label: "Courses Available", value: 500, suffix: "+" },
  { label: "Students", value: 5000, suffix: "+" },
];

export default function OurCoreStrength() {
  const { ref, inView } = useInView({ triggerOnce: false, threshold: 0.2 });

  return (
    <section ref={ref} className="w-full py-16 bg-white overflow-hidden">
      <div className="w-11/12 mx-auto grid md:grid-cols-2 gap-16 items-center navtext">
        
        <div className="flex flex-col gap-4">
          <h2 className="text-5xl font-bold text-[#04413D]">
            Our Core Strengths
          </h2>
          <p className="text-gray-500 mb-4">Client relationship management, strategic consulting, and B2B growth solutions.</p>

          <div className="grid grid-cols-2 sm:grid-cols-3 gap-6">
            {stats.map((stat, index) => (
              <div
                key={index}
                className="border-b rounded-xl p-6 shadow-md shadow-[#e4c88a] cursor-pointer hover:scale-105 transition-all ease-in-out duration-500"
              >
                <div className="text-2xl sm:text-3xl font-bold text-[#04413D]">
                  {inView && (
                    <CountUp
                      key={inView}
                      start={0}
                      end={stat.value}
                      duration={2.5}
                      suffix={stat.suffix}
                      separator=","
                    />
                  )}
                </div>
                <p className="text-sm text-gray-600 mt-1">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>

        <motion.div
  initial={{ opacity: 0, scale: 0.8 }}
  animate={inView ? { opacity: 1, scale: 1 } : {}}
  transition={{ duration: 1 }}
  className="relative w-full h-[60vh] rounded-xl overflow-hidden shadow-lg shadow-[#04413D]/40"
>
  <Image
    src={coreimage}
    alt="Global Education"
    fill
    className="object-cover"
    sizes="(max-width: 768px) 100vw, 50vw"
  />

  
</motion.div>
      </div>
    </section>
  );
}