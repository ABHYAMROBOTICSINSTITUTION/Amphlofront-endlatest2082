"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { IoMdArrowDropdown } from "react-icons/io";

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(null);

  const faqs = [
    {
      question:" What drives B2B profit?",
      answer: "The ratio of Customer Lifetime Value (LTV) to Cost-to-Serve.",
    },
    {
      question: "How to gain momentum?",
      answer: "Prioritize quick wins to fund long-term strategic projects..",
    },
    {
      question: "What predicts success?",
      answer: "Leading indicators like pipeline velocity.",
    },
    
  ];

  return (
    <div className="bg-linear-to-b from-[#04413D]/50 to-white  min-h-full flex flex-col items-center py-16 px-6">
      <div className="text-center mb-10">
        <h1 className="text-4xl font-bold text-[#04413D]">Frequently Asked Questions</h1>
        <p className="text-gray-700 mt-3">Find answers to common questions about our university</p>
      </div>

      <div className="w-full max-w-2xl space-y-4">
        {faqs.map((faq, index) => (
          <div key={index} className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden">
            <button
              className="flex justify-between items-center w-full px-6 py-4 text-left font-medium text-gray-800 hover:bg-[#04413D]/70 hover:text-white transition-colors"
              onClick={() => setOpenIndex(openIndex === index ? null : index)}
            >
              {faq.question}
              <motion.div animate={{ rotate: openIndex === index ? 180 : 0 }}>
                <IoMdArrowDropdown className="text-[#0B0C28] text-2xl cursor-pointer hover:text-white" />
              </motion.div>
            </button>

            <AnimatePresence>
              {openIndex === index && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.3 }}
                >
                  <div className="px-6 pb-4 text-black border-t border-gray-100 pt-3">
                    {faq.answer}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        ))}
      </div>
    </div>
  );
}