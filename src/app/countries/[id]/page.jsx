import React from 'react'
import Link from 'next/link'
import { notFound } from 'next/navigation'

// Sample countries data - replace with your API data
const countries = [
  { id: 'usa', name: 'United States', code: 'US', capital: 'Washington, D.C.', population: '331 million', language: 'English', currency: 'USD', description: 'The United States of America is a diverse country with 50 states and a rich cultural heritage.' },
  { id: 'uk', name: 'United Kingdom', code: 'GB', capital: 'London', population: '67 million', language: 'English', currency: 'GBP', description: 'The United Kingdom consists of England, Scotland, Wales, and Northern Ireland.' },
  { id: 'canada', name: 'Canada', code: 'CA', capital: 'Ottawa', population: '38 million', language: 'English, French', currency: 'CAD', description: 'Canada is known for its vast landscapes, multicultural cities, and natural beauty.' },
  { id: 'australia', name: 'Australia', code: 'AU', capital: 'Canberra', population: '25.7 million', language: 'English', currency: 'AUD', description: 'Australia is a country and continent surrounded by the Indian and Pacific oceans.' },
  { id: 'india', name: 'India', code: 'IN', capital: 'New Delhi', population: '1.38 billion', language: 'Hindi, English', currency: 'INR', description: 'India is the world largest democracy and second-most populous country.' },
  { id: 'germany', name: 'Germany', code: 'DE', capital: 'Berlin', population: '83 million', language: 'German', currency: 'EUR', description: 'Germany is Europe strongest economy and known for its history and innovation.' },
  { id: 'france', name: 'France', code: 'FR', capital: 'Paris', population: '67 million', language: 'French', currency: 'EUR', description: 'France is famous for its cuisine, art, fashion, and landmarks like the Eiffel Tower.' },
  { id: 'japan', name: 'Japan', code: 'JP', capital: 'Tokyo', population: '125 million', language: 'Japanese', currency: 'JPY', description: 'Japan is an island nation known for technology, tradition, and unique culture.' },
  { id: 'brazil', name: 'Brazil', code: 'BR', capital: 'Brasília', population: '213 million', language: 'Portuguese', currency: 'BRL', description: 'Brazil is the largest country in South America, famous for the Amazon rainforest.' },
  { id: 'uae', name: 'United Arab Emirates', code: 'AE', capital: 'Abu Dhabi', population: '9.9 million', language: 'Arabic', currency: 'AED', description: 'The UAE is a federation of seven emirates, known for modern architecture and luxury.' },
  { id: 'new-zealand', name: 'New Zealand', code: 'AE', capital: 'Abu Dhabi', population: '9.9 million', language: 'Arabic', currency: 'AED', description: 'The UAE is a federation of seven emirates, known for modern architecture and luxury.' },
]

// Generate static params for all countries
export async function generateStaticParams() {
  return countries.map((country) => ({
    id: country.id,
  }))
}

// Generate metadata for each country page
export async function generateMetadata({ params }) {
  const { id } = await params
  const country = countries.find(c => c.id === id)
  
  if (!country) {
    return {
      title: 'Country Not Found',
    }
  }
  
  return {
    title: `${country.name} - Country Information`,
    description: `Learn about ${country.name}, including capital, population, language, and more.`,
  }
}

async function CountryPage({ params }) {
  const { id } = await params
  console.log(id, "Country ID")
  
  // Find the country by id
  const country = countries.find(c => c.id === id)
  
  // If country not found, show 404
  if (!country) {
    notFound()
  }
  
  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="container mx-auto px-4">
        {/* Back button */}
        <Link 
          href="/countries"
          className="inline-block mb-6 text-[#04413D] hover:text-[#06756d] font-medium"
        >
          ← Back to all countries
        </Link>
        
        {/* Country details card */}
        <div className="bg-white rounded-xl shadow-lg overflow-hidden max-w-4xl mx-auto">
          <div className="bg-[#04413D] text-white p-8">
            <h1 className="text-4xl font-bold mb-2">{country.name}</h1>
            <p className="text-xl opacity-90">{country.code} · {country.capital}</p>
          </div>
          
          <div className="p-8">
            <p className="text-gray-700 text-lg mb-8">{country.description}</p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="border rounded-lg p-5 bg-gray-50">
                <h3 className="font-semibold text-[#04413D] mb-3">Basic Information</h3>
                <ul className="space-y-2">
                  <li><span className="font-medium">Capital:</span> {country.capital}</li>
                  <li><span className="font-medium">Population:</span> {country.population}</li>
                  <li><span className="font-medium">Official Language:</span> {country.language}</li>
                  <li><span className="font-medium">Currency:</span> {country.currency}</li>
                </ul>
              </div>
              
              <div className="border rounded-lg p-5 bg-gray-50">
                <h3 className="font-semibold text-[#04413D] mb-3">Quick Facts</h3>
                <ul className="space-y-2">
                  <li><span className="font-medium">Country Code:</span> {country.code}</li>
                  <li><span className="font-medium">Region:</span> {getRegion(country.id)}</li>
                  <li><span className="font-medium">Study Destinations:</span> ✓ Available</li>
                </ul>
              </div>
            </div>
            
            <div className="mt-8 flex gap-4 justify-center">
              <Link
                href={`/countries/${id}/universities`}
                className="px-6 py-3 bg-[#04413D] text-white rounded-lg hover:bg-[#06756d] transition-colors"
              >
                View Universities
              </Link>
              <Link
                href={`/countries/${id}/apply`}
                className="px-6 py-3 border-2 border-[#04413D] text-[#04413D] rounded-lg hover:bg-[#04413D] hover:text-white transition-colors"
              >
                Apply Now
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

// Helper function to get region
function getRegion(countryId) {
  const regions = {
    usa: 'North America',
    canada: 'North America',
    uk: 'Europe',
    germany: 'Europe',
    france: 'Europe',
    australia: 'Oceania',
    india: 'Asia',
    japan: 'Asia',
    uae: 'Middle East',
    brazil: 'South America',
  }
  return regions[countryId] || 'International'
}

export default CountryPage