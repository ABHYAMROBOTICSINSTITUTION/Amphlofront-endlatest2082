export default function EnquiryInfo() {
    const contactInfo = [
      {
        title: "Our Amphlo team is here to help",
        type: "Email",
        value: "info@amphlo.com",
      },
      {
        title: "Our Amphlo team is here to help",
        type: "Contact No",
        value: "+977 9745432207, +977 9745432207",
      },
      {
        title: "Our Amphlo team is here to help",
        type: "Location",
        value: "Santikunja, Yogikuti (next to Garima Bikash Bank)",
      },
    ];
  
    return (
      <div className="w-full py-10 px-4">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
          {contactInfo.map((val, i) => (
            <div
              key={i}
              className="flex flex-col items-center text-center text-[#04413D] p-6 rounded-xl shadow-sm hover:shadow-md transition cursor-pointer"
            >
              <h3 className="text-xl md:text-2xl font-bold">{val.type}</h3>
  
              <p className="text-gray-500 text-sm mt-1">{val.title}</p>
  
              <p className="text-sm md:text-base font-semibold mt-2 ">
                {val.value}
              </p>
            </div>
          ))}
        </div>
      </div>
    );
  }