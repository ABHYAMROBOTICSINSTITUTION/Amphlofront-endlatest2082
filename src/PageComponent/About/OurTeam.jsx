"use client";
import Image from "next/image";
import { motion } from "framer-motion";
import { Mail, Phone } from "lucide-react"; 
import userone from "../../../public/usertwo.jpg";

export default function OurTeam() {
  const details = [
    {
      image: userone,
      name: "Rahul Ghimire",
      phone: "9854633423",
      email: "rahul@amphlo.com",
      position: "Managing Director",
    },
    {
      image: userone,
      name: "Sadhana Gautam",
      phone: "9854633423",
      email: "sadhana@amphlo.com",
      position: "Senior Partnership Development Officer",
    },
    {
      image: userone,
      name: "Ritisha Ghimire",
      phone: "9854633423",
      email: "ritisha@amphlo.com",
      position: "Admission Coordinator",
    },
    {
      image: userone,
      name: "Rachana Gautam",
      phone: "9854633423",
      email: "rachana@amphlo.com",
      position: "Admission Coordinator",
    },
    {
      image: userone,
      name: "Kisan Mahat",
      phone: "9854633423",
      email: "kisan@amphlo.com",
      position: "IT Consultant",
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: { y: 0, opacity: 1 },
  };

  return (
    <section className="w-full md:py-20 py-6 bg-white">
      <div className="max-w-6xl mx-auto px-6 navtext">
        <div className="text-center md:mb-16 mb-6">
          <h2 className="text-5xl md:text-6xl font-bold text-[#04413D] tracking-tight mb-4">
            Meet Our Team
          </h2>
          <p className="text-lg text-gray-600 font-medium">
            Passionate. Proactive. Expert.
          </p>
        </div>

        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-3 gap-4 "
        >
          {details.map((member, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{ y: -5 }}
              className="group flex flex-col items-center text-center p-3 transition-all duration-300 rounded-2xl hover:bg-[#04413D]/10 hover:shadow-xl hover:shadow-[#c8ecea]/30 cursor-pointer"
            >
              <div className="relative h-32 w-32 mb-6">
                <div className="absolute inset-0 rounded-full overflow-hidden border-2 border-transparent group-hover:border-[#d7eeec] transition-colors duration-500">
                  <Image
                    src={member.image}
                    alt={member.name}
                    fill
                    className="object-cover"
                  />
                </div>
              </div>
              
              <div className="flex flex-col items-center">
                <h3 className="text-xl font-bold text-[#04413D] mb-1">
                  {member.name}
                </h3>
                <p className="text-sm font-semibold text-[#FDC653] mb-2 uppercase tracking-wider">
                  {member.position}
                </p>
                
                <div className="space-y-1 flex flex-col items-center border-t border-gray-200 pt-2 w-full">
                  <a 
                    href={`mailto:${member.email}`} 
                    className="flex items-center text-gray-500 hover:text-[#04413D] transition-colors text-sm"
                  >
                    <Mail className="w-4 h-4 mr-2" />
                    {member.email}
                  </a>
                  <a 
                    href={`tel:${member.phone}`} 
                    className="flex items-center text-gray-500 hover:text-[#04413D] transition-colors text-sm"
                  >
                    <Phone className="w-4 h-4 mr-2" />
                    {member.phone}
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}