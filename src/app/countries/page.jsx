import Link from 'next/link'
import React from 'react'

// Sample countries data - replace with your API data
const countries = [
  { id: 'usa', name: 'United States', code: 'US', capital: 'Washington, D.C.' },
  { id: 'uk', name: 'United Kingdom', code: 'GB', capital: 'London' },
  { id: 'canada', name: 'Canada', code: 'CA', capital: 'Ottawa' },
  { id: 'australia', name: 'Australia', code: 'AU', capital: 'Canberra' },
  { id: 'india', name: 'India', code: 'IN', capital: 'New Delhi' },
  { id: 'germany', name: 'Germany', code: 'DE', capital: 'Berlin' },
  { id: 'france', name: 'France', code: 'FR', capital: 'Paris' },
  { id: 'japan', name: 'Japan', code: 'JP', capital: 'Tokyo' },
  { id: 'brazil', name: 'Brazil', code: 'BR', capital: 'Brasília' },
  { id: 'uae', name: 'United Arab Emirates', code: 'AE', capital: 'Abu Dhabi' },
]

async function CountriesPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8 text-center">Countries We Serve</h1>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {countries.map((country) => (
          <Link 
            href={`/countries/${country.id}`}
            key={country.id}
            className="block p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 border border-gray-200 hover:border-[#04413D]"
          >
            <h2 className="text-xl font-semibold text-[#04413D] mb-2">{country.name}</h2>
            <p className="text-gray-600">Code: {country.code}</p>
            <p className="text-gray-600">Capital: {country.capital}</p>
          </Link>
        ))}
      </div>
    </div>
  )
}

export default CountriesPage