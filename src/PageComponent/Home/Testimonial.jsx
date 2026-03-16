"use client";

import React, { useState } from "react";
import Image from "next/image";
import person1 from "../../../public/chef11.jpg";

const reviews = [
  {
    id: 1,
    clientname: "JANE SMITH",
    jobtitle: "Marketing Manager",
    companyname: "@janesmith",
    image: person1,
    stars: 5,
    description: "I enjoy working in the editor because the site is user friendly and makes designing simple.",
  },
  {
    id: 2,
    clientname: "EMMA WOODHOUSE",
    jobtitle: "Marketing Manager",
    companyname: "@emmasocial",
    image: person1,
    stars: 5,
    description: "I enjoy working in the editor because the site is user friendly and makes designing simple.",
  },
  {
    id: 3,
    clientname: "SARAH CONNOR",
    jobtitle: "Design Lead",
    companyname: "@sconnor",
    image: person1,
    stars: 5,
    description: "The workflow integration is seamless. It has saved our team countless hours.",
  },
  {
    id: 4,
    clientname: "MICHAEL SCOTT",
    jobtitle: "Regional Manager",
    companyname: "@mscott",
    image: person1,
    stars: 5,
    description: "Great experience overall. The platform is intuitive and the support team is top-notch.",
  },
];

const TestimonialCard = ({ review }) => {
  return (
    <div className="relative w-[65vh] mx-4 mt-12 mb-4 group shrink-0">
      <div className="bg-[#04413D]/40 rounded-lg p-4 pt-26 shadow-lg border-l-2 border-t-2 border-[#04413D] h-[30vh] w-full">
        <p className="text-white text-sm md:text-base line-clamp-4 italic">
          "{review.description}"
        </p>
      </div>

      <div className="absolute -top-6 left-0 flex items-center w-[90%]">
        <div className="bg-[#04413D] text-white px-4 py-3 rounded-tr-[30px] shadow-md flex flex-col min-w-[30vh] relative">
          <h3 className="font-bold text-sm md:text-lg tracking-wide leading-tight uppercase">
            {review.clientname}
          </h3>
          <p className="text-sm opacity-90">{review.jobtitle}</p>
          <p className="text-sm opacity-75">{review.companyname}</p>

          <div className="flex mt-1">
            {[...Array(review.stars)].map((_, i) => (
              <span key={i} className="text-yellow-400 text-xs">
                ★
              </span>
            ))}
          </div>
        </div>

        <div className="absolute -right-12 -top-2">
          <div className="relative size-16 md:size-24 rounded-full border-4 border-white shadow-lg overflow-hidden bg-[#04413D]/20">
            <Image
              src={review.image}
              alt="image"
              fill
              priority
              className="object-cover"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default function Testimonials() {
  const [isPaused, setIsPaused] = useState(false);

  return (
    <section className="bg-[#04413D]/20 min-h-[50vh] py-18 overflow-hidden w-full cursor-pointer">
      <div className="max-w-7xl mx-auto px-4 mb-10 text-center">
        <h2 className="text-5xl font-semibold text-[#04413D] mb-4">What Our Client Says</h2>
        <p className="text-gray-600 max-w-2xl mx-auto">We collaborate with industry leaders to provide the best experiences.</p>
      </div>

      <div className="w-full overflow-hidden">
        <div
          className="flex marquee-content"
          style={{
            animation: `marquee 5s linear infinite`,
            animationPlayState: isPaused ? 'paused' : 'running'
          }}
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          {[...reviews, ...reviews].map((review, index) => (
            <div
              key={`${review.id}-${index}`}
              onClick={() => setIsPaused(true)}
            >
              <TestimonialCard review={review} />
            </div>
          ))}
        </div>
      </div>

      <style>{`
       @keyframes marquee {
        0% { transform: translateX(0); }
        100% { transform: translateX(-50%); }
      }
        .marquee-content { 
          will-change: transform;
          display: flex;
         
        }
      `}</style>
    </section>
  );
}