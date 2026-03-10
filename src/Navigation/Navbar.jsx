// 'use client'
// import Link from "next/link"
// import logo from "../../public/headerlogo.png";
// import Image from "next/image";
// export default function Navbar(){

//     const navitem = [
//         { name: "Home", path: "/" },
//         { name: "About Us", path: "/about" },
//         { name: "Features", path: "/features" },
//         { name: "Countries", path: "/countries" },
//         { name: "About Our Portal", path: "/portal" },
//         { name: "Enquiry", path: "/enquiry" },
//     ]

//     return(
//         <header className=" w-full bg-white text-[#04413D] shadow-xl flex fixed top-0">
//            <nav className="flex gap-6 justify-between mx-auto w-11/12 py-4  ">
//             <Image className="h-12 w-20 text-3xl object-cover" src={logo} alt="logo" />
//             <div className="flex gap-5  text-md tracking-wider">
//             {navitem.map((val) => (
//                 <Link key={val.name} href={val.path} className="mt-3">
//                     {val.name}
//                 </Link>
//             ))}
//             </div>
//           <div className="flex gap-6 navtext mt-3 ">
//            <h1 className="">Login</h1>
//           <h1>Register</h1>
//           </div>

//            </nav>
//         </header>
//     )
// }

'use client'
import Link from "next/link"
import Image from "next/image"
import logo from "../../public/headerlogo.png"

export default function Navbar(){

  const navitem = [
    { name: "Home", path: "/" },
    { name: "About Us", path: "/about" },
    { name: "Features", path: "/features" },
    { name: "Countries", path: "/countries" },
    { name: "About Our Portal", path: "/portal" },
    { name: "Enquiry", path: "/enquiry" },
  ]

  return (
    <header className="w-full bg-white text-[#04413D] shadow-md fixed top-0 z-50">

      <nav className="w-11/12 mx-auto flex items-center justify-between  py-3">

        {/* Logo */}
        <div className="flex items-center">
          <Image
            src={logo}
            alt="logo"
            className="h-12 w-20 text-3xl object-cover"
          />
        </div>

        {/* Navigation Links */}
        <div className="hidden md:flex items-center gap-8 text-md tracking-wide font-medium">
          {navitem.map((val) => (
            <Link
              key={val.name}
              href={val.path}
              className="hover:text-[#06665f] transition"
            >
              {val.name}
            </Link>
          ))}
        </div>

        {/* Auth Buttons */}
        <div className="hidden md:flex items-center gap-6 font-medium">
          <Link href="/login" className="hover:text-[#06665f] transition">
            Login
          </Link>

          <Link
            href="/register"
            className="bg-[#04413D] text-white px-4 py-2 rounded-md hover:bg-[#06665f] transition"
          >
            Register
          </Link>
        </div>

      </nav>

    </header>
  )
}