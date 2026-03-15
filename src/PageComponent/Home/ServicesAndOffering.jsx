"use client";
import { useState } from 'react';
import Image from 'next/image';
import partnerImg from "../../../public/consult.jpg";
import uniImg from "../../../public/amphlo.jpg";
import { CiLocationArrow1 } from "react-icons/ci";

const OFFERINGS = {
  partners: {
    title: "Partner Solutions",
    description: "We collaborate with industry leaders to provide cutting-edge growth strategies. Our partner ecosystem is designed to scale operations and maximize market impact through shared resources and expert consultancy.",
    features: ["Strategic Market Analysis", "Scalable Business Infrastructure", "24/7 Dedicated Support"],
    image: partnerImg,
    reverse: false,
  },
  universities: {
    title: "University Programs",
    description: "Empowering academic institutions with modern digital tools. We help universities bridge the gap between traditional education and the evolving demands of the global workforce through integrated technology platforms.",
    features: ["Digital Curriculum Integration", "Student Management Systems", "Research & Data Collaboration"],
    image: uniImg,
    reverse: true, 
  }
};

export default function ServicesAndOffering() {
  const [activeTab, setActiveTab] = useState('partners');
  
  const content = OFFERINGS[activeTab];

  return (
    <div className="min-h-screen flex items-start justify-center py-12 mx-auto w-full">
      <div className="w-11/12 md:w-10/12 mx-auto flex flex-col md:items-center gap-3 navtext">
        
        <h1 className="text-5xl font-semibold text-[#04413D] text-center">
          Amphlo Services & Offerings
        </h1>
        
        <p className="text-center text-sm text-gray-600 max-w-2xl">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt deserunt 
          dolores quam repellat, molestias, officiis pariatur.
        </p>

        <div className="flex gap-5 mt-3 w-full justify-center">
          {Object.keys(OFFERINGS).map((key) => (
            <button 
              key={key}
              onClick={() => setActiveTab(key)}
              className={`rounded-4xl py-2 px-6 text-xl font-medium cursor-pointer transition-all border-2 capitalize ${
                activeTab === key 
                ? 'bg-[#04413D] text-white border-[#04413D]' 
                : 'bg-white border-[#04413D] text-[#04413D]'
              }`}
            >
              For {key}
            </button>
          ))}
        </div>

        <div className="mt-8 w-full bg-[#04413D]/10 px-8 py-12 shadow-xl rounded-bl-4xl rounded-tr-4xl">
          <div 
            key={activeTab}
            className={`flex flex-col lg:flex-row ${content.reverse ? 'lg:flex-row-reverse' : ''} items-center gap-10 animate-in fade-in slide-in-from-bottom-4 duration-500`}
          >
            <div className="w-full lg:w-1/2 relative h-[40vh] md:h-[50vh]">
              <Image
                src={content.image}
                alt={content.title}
                fill
                priority
                className="object-cover rounded-2xl shadow-lg"
              />
            </div>

            <div className="w-full lg:w-1/2 text-left">
              <h2 className="text-4xl font-bold text-[#04413D] mb-4">{content.title}</h2>
              <p className="text-gray-600 leading-relaxed text-md text-justify">
                {content.description}
              </p>
              <ul className="mt-6 space-y-3 text-[#04413D] font-medium">
                {content.features.map((feature, index) => (
                  <li className='flex items-center gap-3' key={index}><CiLocationArrow1/> {feature}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}