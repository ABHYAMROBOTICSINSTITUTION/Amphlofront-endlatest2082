"use client";

import Link from "next/link";
import Image from "next/image";
import background from "../../../public/footer-bg.png";

export default function GetInTouch() {
  return (
    <section className="relative w-full h-[50vh] flex items-center justify-center overflow-hidden bg-white navtext">
     
      <Image
        src={background}
        alt="Global Reach"
        fill
        priority
        className="object-cover " 
      />

      <div className="absolute inset-0 bg-[#04413D]/30" />

      <div className="relative z-10 flex flex-col items-center justify-center text-center px-4 gap-6 ">
        <h2 className="text-4xl md:text-5xl font-bold text-[#04413D]">
        Get In Touch <span className="text-white">With Us</span>
        </h2>
        <p className="text-[#245e5a] w-11/12">If you have any business-related questions, or concerns, please send us a message and a member of our team will get in touch with you.</p>
        
        <Link 
          href="/enquiry"
          className="px-6 py-3 border-white border text-[#04413D] hover:border-[#7c9c9a]  rounded-xl hover:bg-[#065c57] hover:text-white transition-all duration-500 shadow-xl hover:scale-105 active:scale-95"
        >
          CONNECT WITH US
        </Link>
      </div>
    </section>
  );
}