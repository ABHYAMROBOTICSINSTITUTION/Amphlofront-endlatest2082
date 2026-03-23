"use client";

import React, { useState, useEffect, useRef } from "react";
import Image from "next/image";
import person1 from "../../../public/chef11.jpg";

const reviews = [
  {
    id: 1,
    clientname: "JANE SMITH",
    jobtitle: "Marketing Manager",
    companyname: "@janesmith",
    image: person1,
    rating: 5,
    description: "I enjoy working in the editor because the site is user friendly and makes designing simple.",
  },
  {
    id: 2,
    clientname: "EMMA WOODHOUSE",
    jobtitle: "Marketing Manager",
    companyname: "@emmasocial",
    image: person1,
    rating: 5,
    description: "I enjoy working in the editor because the site is user friendly and makes designing simple.",
  },
  {
    id: 3,
    clientname: "SARAH CONNOR",
    jobtitle: "Design Lead",
    companyname: "@sconnor",
    image: person1,
    rating: 5,
    description: "The workflow integration is seamless. It has saved our team countless hours.",
  },
  {
    id: 4,
    clientname: "MICHAEL SCOTT",
    jobtitle: "Regional Manager",
    companyname: "@mscott",
    image: person1,
    rating: 5,
    description: "Great experience overall. The platform is intuitive and the support team is top-notch.",
  },
];

const TestimonialCard = ({ review }) => {
  return (
    <div className="relative w-[50vh] sm:w-[320px] md:w-[60vh] lg:w-[70vh] mx-2 sm:mx-3 md:mx-4 mt-6 mb-4 group shrink-0">
      <div className="bg-[#04413D]/40 rounded-lg p-3 sm:p-4 pt-2 sm:pt-24 md:pt-24 lg:pt-26 shadow-lg border-l-2 border-t-2 border-[#04413D] h-[30vh] md:h-[30vh]  w-full">
        <p className="text-white text-xs sm:text-sm md:text-base line-clamp-4 italic">
          "{review.description}"
        </p>
      </div>

      <div className="absolute -top-6 left-0 sm:-top-8 md:-top-10 flex items-center w-[90%]">
        <div className="bg-[#04413D] text-white px-3 sm:px-4 py-2 sm:py-3 rounded-tr-[20px] sm:rounded-tr-[30px] shadow-md flex flex-col md:w-[40vh] w-[25vh] relative">
          <h3 className="font-bold text-xs sm:text-sm md:text-base lg:text-lg tracking-wide leading-tight uppercase">
            {review.clientname}
          </h3>
          <p className="text-[10px] sm:text-xs md:text-sm opacity-90">{review.jobtitle}</p>
          <p className="text-[10px] sm:text-xs md:text-sm opacity-75">{review.companyname}</p>

          <div className="flex mt-1">
            {[...Array(review.rating)].map((_, i) => (
              <span key={i} className="text-[#FDC653] text-[10px] sm:text-xs">
                ★
              </span>
            ))}
          </div>
        </div>

        <div className="absolute -right-8 sm:-right-10 md:-right-16 -top-8  md:-top-1">
          <div className="relative size-22 md:size-24 rounded-full border-2 sm:border-4 border-[#FDC653] shadow-lg overflow-hidden bg-[#04413D]/20">
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
  const marqueeRef = useRef(null);
  const [marqueeWidth, setMarqueeWidth] = useState(0);

  useEffect(() => {
    if (marqueeRef.current) {
      setMarqueeWidth(marqueeRef.current.scrollWidth / 2);
    }
  }, []);

  return (
    <section className="bg-[#04413D]/20 min-h-[60vh] py-12 sm:py-16 md:py-18 overflow-hidden w-full cursor-pointer">
      <div className="max-w-7xl mx-auto px-4 mb-8 sm:mb-10 text-center navtext">
        <h2 className="text-3xl md:text-5xl font-semibold text-[#04413D] mb-2 sm:mb-4">What Our Client Says</h2>
        <p className="text-sm sm:text-base text-gray-600 max-w-2xl mx-auto px-4">We collaborate with industry leaders to provide the best experiences.</p>
      </div>

      <div className="w-full h-full pt-7">
        <div
          ref={marqueeRef}
          className="flex marquee-content"
          style={{
            animation: `marquee ${20 + reviews.length * 2}s linear infinite`,
            animationPlayState: isPaused ? 'paused' : 'running',
            width: 'fit-content'
          }}
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          {[...reviews, ...reviews, ...reviews].map((review, index) => (
            <div
              key={`${review.id}-${index}`}
              onClick={() => setIsPaused(true)}
            >
              <TestimonialCard review={review} />
            </div>
          ))}
        </div>
      </div>

      <style jsx>{`
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-33.33%); }
        }
        .marquee-content { 
          will-change: transform;
          display: flex;
        }
        
        @media (max-width: 640px) {
          .marquee-content {
            animation-duration: ${15 + reviews.length}s !important;
          }
        }
      `}</style>
    </section>
  );
}