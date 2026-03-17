'use client'

import Link from "next/link"
import Image from "next/image"
import { useState, useEffect } from "react"
import logo from "../../public/headerlogo.png"

export default function Navbar() {

  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [loginDropdownOpen, setLoginDropdownOpen] = useState(false)
  const [registerDropdownOpen, setRegisterDropdownOpen] = useState(false)
  const [countriesDropdownOpen, setCountriesDropdownOpen] = useState(false)

  const navitem = [
    { name: "Home", path: "/" },
    { name: "About Us", path: "/about" },
    { name: "Countries", path: "/countries" },
    { name: "Universities", path: "/universities" },
    { name: "Partner With Us", path: "/partner-with-us" },
    { name: "Book an Appointment", path: "/enquiry" },
  ]

  const countries = [
    { name: "Australia", path: "/countries/australia" },
    { name: "Canada", path: "/countries/canada" },
    { name: "USA", path: "/countries/usa" },
    { name: "UK", path: "/countries/uk" },
    { name: "New Zealand", path: "/countries/new-zealand" },
  ]

  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'unset'
    }
    return () => {
      document.body.style.overflow = 'unset'
    }
  }, [mobileMenuOpen])

  const closeAllDropdowns = () => {
    setLoginDropdownOpen(false)
    setRegisterDropdownOpen(false)
    setCountriesDropdownOpen(false)
  }

  return (
    <header className="w-full bg-white text-[#04413D] shadow-md fixed top-0 z-50">
      <nav className="w-11/12 mx-auto flex items-center justify-between py-3">

        <div className="flex items-center">
          <Image src={logo} alt="logo" className="h-12 w-20 object-cover" />
        </div>

        <div className="hidden md:flex items-center gap-6 text-md tracking-wide font-medium">

          {navitem.map((val) => {

            if (val.name === "Countries") {
              return (
                <div key={val.name} className="relative">

                  <button
                    onClick={() => {
                      setCountriesDropdownOpen(!countriesDropdownOpen)
                      setLoginDropdownOpen(false)
                      setRegisterDropdownOpen(false)
                    }}
                    className="hover:text-[#06665f] transition"
                  >
                    Countries
                  </button>

                  {countriesDropdownOpen && (
                    <div className="absolute flex flex-col bg-white shadow-lg rounded-md mt-2 w-44 text-sm z-50">

                      {countries.map((country) => (
                        <Link
                          key={country.name}
                          href={country.path}
                          className="px-4 py-2 hover:bg-gray-100"
                          onClick={closeAllDropdowns}
                        >
                          {country.name}
                        </Link>
                      ))}

                    </div>
                  )}

                </div>
              )
            }

            return (
              <Link
                key={val.name}
                href={val.path}
                className="hover:text-[#06665f] transition"
              >
                {val.name}
              </Link>
            )
          })}

        </div>

        <div className="hidden md:flex items-center gap-6 font-medium">

          <div className="relative z-50">
            <button
              onClick={() => {
                setLoginDropdownOpen(!loginDropdownOpen)
                setRegisterDropdownOpen(false)
                setCountriesDropdownOpen(false)
              }}
              className="cursor-pointer hover:text-[#06665f]"
            >
              Login
            </button>

            {loginDropdownOpen && (
              <div className="absolute flex flex-col bg-gray-100 shadow-lg rounded-md mt-2 w-40 text-sm z-50">

                <Link
                  href="/login/foruniversities"
                  className="px-4 py-2 hover:bg-gray-200"
                  onClick={closeAllDropdowns}
                >
                  For Universities
                </Link>

                <Link
                  href="/login/forpartners"
                  className="px-4 py-2 hover:bg-gray-200"
                  onClick={closeAllDropdowns}
                >
                  For Partners
                </Link>

              </div>
            )}
          </div>

          <div className="relative z-50">

            <button
              onClick={() => {
                setRegisterDropdownOpen(!registerDropdownOpen)
                setLoginDropdownOpen(false)
                setCountriesDropdownOpen(false)
              }}
              className="bg-[#04413D] text-white px-4 py-2 rounded-md hover:bg-[#06665f]"
            >
              Register
            </button>

            {registerDropdownOpen && (
              <div className="absolute flex flex-col bg-white shadow-lg rounded-md mt-2 w-40 text-sm right-0 z-50">

                <Link
                  href="/register/foruniversities"
                  className="px-4 py-2 hover:bg-gray-200"
                  onClick={closeAllDropdowns}
                >
                  For Universities
                </Link>

                <Link
                  href="/register/forpartners"
                  className="px-4 py-2 hover:bg-gray-200"
                  onClick={closeAllDropdowns}
                >
                  For Partners
                </Link>

              </div>
            )}

          </div>

        </div>

        <div className="md:hidden flex items-center">

          <button
            onClick={() => {
              setMobileMenuOpen(!mobileMenuOpen)
              closeAllDropdowns()
            }}
            className="p-2"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">

              {mobileMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
              )}

            </svg>
          </button>

        </div>

      </nav>

      {mobileMenuOpen && (

        <div className="fixed inset-0 z-50">

          <div
            className="absolute inset-0 bg-black/40"
            onClick={() => setMobileMenuOpen(false)}
          ></div>

          <div className="absolute top-0 right-0 h-full w-2/3 bg-white shadow-2xl flex flex-col p-6 overflow-y-auto">

            <div className="flex justify-end mb-8">

              <button onClick={() => setMobileMenuOpen(false)}>
                <svg className="w-8 h-8" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">

                  <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />

                </svg>
              </button>

            </div>

            <div className="flex flex-col gap-5 text-lg font-semibold">

              {navitem.map((val) => (

                <Link
                  key={val.name}
                  href={val.path}
                  className="border-b pb-2"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {val.name}
                </Link>

              ))}

            </div>

          </div>

        </div>

      )}

    </header>
  )
}