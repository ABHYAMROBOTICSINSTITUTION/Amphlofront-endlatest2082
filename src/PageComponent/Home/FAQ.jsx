"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { IoMdArrowDropdown } from "react-icons/io";

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(0);

  const faqs = [
    {
      question: "What programs does the university offer?",
      answer:
        "Our university offers a wide range of undergraduate, graduate, and professional programs across disciplines such as business, engineering, technology, health sciences, and the humanities.",
    },
    {
      question: "How can I apply for admission?",
      answer:
        "You can apply online through our admissions portal. Simply complete the application form, upload the required documents, and submit the application before the deadline.",
    },
    {
      question: "Are scholarships or financial aid available?",
      answer:
        "Yes, we offer a variety of scholarships and financial aid options based on academic performance, financial need, and special achievements.",
    },
    
  ];
  return (
    <div className="bg-linear-to-b from-[#04413D]/50 to-white min-h-full flex flex-col items-center py-16 px-6">
      

      <div className="text-center mb-10">
        <h1 className="text-4xl font-bold text-[#04413D]">
          Frequently Asked Questions
        </h1>
        <p className="text-gray-700 mt-3">
          Find answers to common questions about our university
        </p>
      </div>

      <div className="w-full max-w-2xl space-y-4">
        {faqs.map((faq, index) => {
          const isOpen = openIndex === index;

          return (
            <div
              key={index}
              className="bg-white rounded-xl shadow-sm border border-gray-300 overflow-hidden"
            >
              <button
                className={`flex justify-between items-center w-full px-6 py-4 text-left font-medium transition-colors
                ${isOpen 
                  ? "bg-[#04413D] text-white" 
                  : "text-gray-800 hover:bg-[#04413D]/70 hover:text-white"
                }`}
                onClick={() => setOpenIndex(isOpen ? null : index)}
              >
                {faq.question}

                <motion.div
                  animate={{ rotate: isOpen ? 180 : 0 }}
                  transition={{ duration: 0.3 }}
                >
                  <IoMdArrowDropdown
                    className={`text-2xl ${
                      isOpen ? "text-white" : "text-[#0B0C28]"
                    }`}
                  />
                </motion.div>
              </button>

              <AnimatePresence>
                {isOpen && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <div className="px-6 pb-4 text-black border-t border-gray-400 pt-3">
                      {faq.answer}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          );
        })}
      </div>

    </div>
  );
}