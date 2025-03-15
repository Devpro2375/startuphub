// src/pages/Investors.jsx
import { useState } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import InvestorCard from '../components/InvestorCard';
import React from 'react'

// Mock data for investors
const investorsData = [
  {
    id: 1,
    name: 'Sequoia Capital India',
    logo: 'https://via.placeholder.com/150',
    type: 'Venture Capital',
    sectors: ['Tech', 'FinTech', 'HealthTech'],
    minInvestment: '1M',
    maxInvestment: '100M',
    location: 'Mumbai',
    portfolio: [
      { name: 'BYJU\'S', logo: 'https://via.placeholder.com/50' },
      { name: 'OYO', logo: 'https://via.placeholder.com/50' },
      { name: 'Zomato', logo: 'https://via.placeholder.com/50' },
    ],
  },
  {
    id: 2,
    name: 'Accel Partners India',
    logo: 'https://via.placeholder.com/150',
    type: 'Venture Capital',
    sectors: ['SaaS', 'Consumer Internet', 'B2B'],
    minInvestment: '500K',
    maxInvestment: '50M',
    location: 'Bangalore',
    portfolio: [
      { name: 'Flipkart', logo: 'https://via.placeholder.com/50' },
      { name: 'Swiggy', logo: 'https://via.placeholder.com/50' },
      { name: 'Freshworks', logo: 'https://via.placeholder.com/50' },
    ],
  },
  {
    id: 3,
    name: 'Indian Angel Network',
    logo: 'https://via.placeholder.com/150',
    type: 'Angel Network',
    sectors: ['Tech', 'Healthcare', 'Education'],
    minInvestment: '100K',
    maxInvestment: '1M',
    location: 'Delhi',
    portfolio: [
      { name: 'Wow Momo', logo: 'https://via.placeholder.com/50' },
      { name: 'Druva', logo: 'https://via.placeholder.com/50' },
      { name: 'FarEye', logo: 'https://via.placeholder.com/50' },
    ],
  },
  // Add more investor data as needed
];

// Sectors for filtering
const sectors = ['All', 'Tech', 'FinTech', 'HealthTech', 'SaaS', 'Consumer Internet', 'B2B', 'Healthcare', 'Education'];

// Investment types for filtering
const investmentTypes = ['All', 'Venture Capital', 'Angel Network', 'Corporate VC', 'Accelerator'];

const Investors = () => {
  const [selectedSector, setSelectedSector] = useState('All');
  const [selectedType, setSelectedType] = useState('All');
  const [searchTerm, setSearchTerm] = useState('');

  // Filter investors based on selected filters and search term
  const filteredInvestors = investorsData.filter((investor) => {
    const matchesSector = selectedSector === 'All' || investor.sectors.includes(selectedSector);
    const matchesType = selectedType === 'All' || investor.type === selectedType;
    const matchesSearch = investor.name.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesSector && matchesType && matchesSearch;
  });

  return (
    <div className="flex flex-col min-h-screen bg-white">
      <Navbar />
      
      <main className="flex-grow py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h1 className="text-4xl font-extrabold text-gray-900 mb-4">Investor Directory</h1>
            <p className="text-xl text-gray-600">
              Connect with top investors and venture capital firms to fuel your startup's growth.
            </p>
          </div>
          
          {/* Search and Filters */}
          <div className="mb-12 bg-gray-50 p-8 rounded-2xl shadow-sm">
            <div className="flex flex-col space-y-6">
              <div>
                <label htmlFor="search" className="block text-sm font-semibold text-gray-700 mb-2">Search Investors</label>
                <div className="relative">
                  <input
                    type="text"
                    id="search"
                    placeholder="Search by investor name..."
                    className="block w-full rounded-lg border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 text-lg"
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                  />
                  <div className="absolute inset-y-0 right-0 flex items-center pr-3">
                    <svg className="h-6 w-6 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                    </svg>
                  </div>
                </div>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="sector" className="block text-sm font-semibold text-gray-700 mb-2">Sector</label>
                  <select
                    id="sector"
                    className="block w-full rounded-lg border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 text-lg"
                    value={selectedSector}
                    onChange={(e) => setSelectedSector(e.target.value)}
                  >
                    {sectors.map((sector) => (
                      <option key={sector} value={sector}>{sector}</option>
                    ))}
                  </select>
                </div>
                
                <div>
                  <label htmlFor="type" className="block text-sm font-semibold text-gray-700 mb-2">Investment Type</label>
                  <select
                    id="type"
                    className="block w-full rounded-lg border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 text-lg"
                    value={selectedType}
                    onChange={(e) => setSelectedType(e.target.value)}
                  >
                    {investmentTypes.map((type) => (
                      <option key={type} value={type}>{type}</option>
                    ))}
                  </select>
                </div>
              </div>
            </div>
          </div>
          
          {/* Results */}
          <div className="mb-16">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">
              {filteredInvestors.length} Investors Found
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredInvestors.map((investor) => (
                <InvestorCard key={investor.id} investor={investor} />
              ))}
            </div>
            
            {filteredInvestors.length === 0 && (
              <div className="text-center py-16 bg-gray-50 rounded-2xl">
                <svg className="mx-auto h-16 w-16 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <h3 className="mt-4 text-xl font-semibold text-gray-900">No investors found</h3>
                <p className="mt-2 text-gray-600">Try adjusting your search or filter criteria.</p>
              </div>
            )}
          </div>
          
          {/* CTA for Investors */}
          <div className="bg-blue-600 text-white rounded-xl p-12 text-center">
            <h3 className="text-3xl font-bold mb-4">Are you an investor?</h3>
            <p className="text-xl mb-8">Join our network to discover promising startups and investment opportunities.</p>
            <button className="bg-white text-blue-600 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-blue-50 transition-colors">
              Join as an Investor
            </button>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default Investors;
