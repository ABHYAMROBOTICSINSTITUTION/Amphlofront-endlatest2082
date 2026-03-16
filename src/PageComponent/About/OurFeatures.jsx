"use client";
import React, { useRef } from "react";
import { useScroll, useTransform, motion } from "framer-motion";
import Image from "next/image";
import { RiArrowRightDoubleLine } from "react-icons/ri";

// Import images (ensure paths match your public folder)
import consultImg from "../../../public/consult.jpg";
import amphloImg from "../../../public/amphlo.jpg";

const allFeatures = [
  { title: "Partner Registration & Onboarding", content: "Streamlined onboarding flow for all new partners.", image: consultImg, points: ["Automated onboarding", "Real-time verification", "Quick setup"] },
  { title: "Centralized Partner Dashboard", content: "All your data, metrics, and tasks in one view.", image: amphloImg, points: ["Unified data view", "Task management", "Custom widgets"] },
  { title: "Communication & Collaboration Tools", content: "Integrated chat and document sharing features.", image: consultImg, points: ["Secure messaging", "Shared workspace", "Real-time editing"] },
  { title: "Searching & Easy Access", content: "Quickly find contracts, leads, and historical data.", image: amphloImg, points: ["Instant indexing", "Filter by category", "Global search"] },
  { title: "Partner Performance Tracking", content: "Monitor KPIs and growth metrics in real-time.", image: consultImg, points: ["KPI monitoring", "Growth insights", "Visual trends"] },
  { title: "Reporting & Analytics", content: "Deep insights through automated reporting.", image: amphloImg, points: ["Predictive reports", "Automated exports", "Data drill-down"] },
  { title: "Mobile Access & User-Friendly Interface", content: "Manage your partnerships on the go.", image: consultImg, points: ["Responsive design", "Touch-friendly", "Anywhere access"] },
  { title: "Lead & Opportunity Management", content: "End-to-end opportunity tracking pipeline.", image: amphloImg, points: ["Pipeline tracking", "Status updates", "Opportunity scoring"] },
  { title: "Training & Resources Access", content: "Access our library of expert guides and courses.", image: consultImg, points: ["Expert video library", "Course tracking", "Certification"] },
  { title: "Document & Contract Management", content: "Digital signing and storage of legal documents.", image: amphloImg, points: ["Digital signing", "Version control", "Secure storage"] },
  { title: "Payment & Incentive Management", content: "Automated payment and reward processing.", image: consultImg, points: ["Payment automation", "Reward calculation", "Audit logs"] },
  { title: "Integration with CRM and ERP System", content: "Seamless sync with your existing CRM and ERP.", image: amphloImg, points: ["CRM native sync", "ERP connectivity", "API access"] },
  { title: "Feedback & Partner Satisfaction Surveys", content: "Built-in partner satisfaction surveys.", image: consultImg, points: ["Satisfaction surveys", "Sentiment analysis", "Improvement logs"] },
  { title: "Event & Webinar Management", content: "Easily host and track webinars or workshops.", image: amphloImg, points: ["Webinar scheduling", "Attendee tracking", "Resource sharing"] },
];

export default function AnimatedFeaturesTimeline() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({ target: containerRef });

  return (
    <main ref={containerRef} className="min-h-screen flex items-start justify-center py-12 mx-auto w-full bg-[#04413D]/20">
      
      <div className="w-11/12 md:w-10/12 mx-auto flex flex-col md:items-center gap-3 navtext">
        
        <h1 className="text-5xl font-semibold text-[#04413D] text-center">
          Amphlo Features
        </h1>
        
        <p className="text-center text-sm text-gray-600 max-w-2xl">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt deserunt 
          dolores quam repellat, molestias, officiis pariatur.
        </p>

        <div className="space-y-18 w-full mt-12">
          {allFeatures.map((item, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              className={`flex flex-col lg:flex-row items-center gap-8 ${index % 2 !== 0 ? "lg:flex-row-reverse" : ""}`}
            >
              <div className="w-full lg:w-1/2">
                <h3 className="text-3xl font-bold text-[#04413D] mb-4">{item.title}</h3>
                <p className="text-lg text-gray-600 mb-4">{item.content}</p>
                <ul className="space-y-2">
                  {item.points.map((p, i) => (
                    <li key={i} className="text-gray-500 flex items-center">
                      <span className="mr-2 text-[#04413D]"><RiArrowRightDoubleLine/></span> {p}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="w-full lg:w-1/2 relative h-80 rounded-3xl overflow-hidden shadow-2xl">
                <Image src={item.image} alt={item.title} fill className="object-cover" />
                <div className="absolute inset-0 bg-[#04413D]/10 hover:bg-transparent transition-all" />
              </div>
            </motion.div>
          ))}
        </div>
        </div>

    </main>
  );
}