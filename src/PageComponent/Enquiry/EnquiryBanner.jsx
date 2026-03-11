import Image from "next/image";
// import contactbanner from "../../../public/bannerone.jpg"
import { IoArrowBackCircleSharp } from "react-icons/io5";
import Link from "next/link";
export default function EnquiryBanner() {
  return (
    <div className="h-[70vh] relative">
      <Image
        className="h-full w-full object-cover"
        src={"/bannerone.jpg"}
        alt="bannerimage"
        fill
        priority
      />
      <div className="absolute bg-[#04413D]/30 inset-0"></div>
      <div className="absolute flex flex-col mx-auto top-1/2 left-12 inset-0 gap-2  text-white navtext">
        <h1 className="text-5xl font-semibold tracking-tight">
          Contact Page
        </h1>
        <p className="text-xl">This is a contact page</p>
      </div>
      <div className="absolute  bottom-0 w-full h-8 flex gap-2 items-center justify-start bg-[#04413D]/50 text-white px-14 py-1">
        <h1 className="text-xl"><IoArrowBackCircleSharp/></h1>
        <button className="text-white font-medium hover:underline hover:underline-offset-2 cursor-pointer">
          <Link href="/"> Home </Link>
        </button>
        <h1>/</h1>
        <h1 className="font-medium text-white underline underline-offset-3 ">
          Contact Us
        </h1>
      </div>
    </div>
  );
}
