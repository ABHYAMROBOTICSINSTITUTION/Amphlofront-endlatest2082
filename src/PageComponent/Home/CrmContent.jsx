"use client";

import Image from "next/image";
import crmIllustration from "../../../public/background.jpg";
import sideimage from "../../../public/sss.png";

export default function CrmContent() {
  const features = [
    "Automated Lead Tracking",
    "Integrated Communication Tools",
    "Advanced Analytics Dashboard",
  ];

  return (
    <section className="relative w-full min-h-[60vh] flex items-center justify-center py-16 overflow-hidden">
      <Image
        src={crmIllustration}
        alt="Background"
        fill
        priority
        className="object-cover absolute inset-0 -z-20"
      />
      <div className="absolute inset-0 bg-[#04413D]/70 -z-10" />

      <div className="w-11/12 mx-auto grid grid-cols-1 md:grid-cols-2 gap-6 items-center">
        
        <div className="relative w-full h-[50vh] md:h-[70vh] flex items-center justify-center">
          <Image
            src={sideimage}
            alt="CRM Software Interface"
            fill
            className="object-contain w-full h-full "
            priority 
          />
        </div>

        <div className="flex flex-col gap-6 text-center md:text-left">
          <span className="text-white font-semibold tracking-wider uppercase text-xs md:text-sm">
            Customer Relationship Management
          </span>
          <h2 className="text-3xl md:text-5xl font-bold text-white leading-tight">
            Streamline Your Business With Our CRM
          </h2>
          <p className="text-gray-200 leading-relaxed text-sm md:text-md">
            Our CRM platform is designed to unify your communication, track leads,
            and foster long-term customer loyalty. Centralize your data and
            empower your team to make informed decisions faster.
          </p>

          <ul className="space-y-3 flex flex-col items-center md:items-start">
            {features.map((item, idx) => (
              <li key={idx} className="flex items-center gap-3 text-white font-medium text-sm md:text-lg">
                <span className="w-2 h-2 bg-white rounded-full flex flex-col"></span>
                {item}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}