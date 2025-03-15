// src/pages/Startups.jsx
import { useState } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import StartupCard from '../components/StartupCard';
import React from 'react'

// Mock data for startups
const startupsData = [
  {
    id: 1,
    name: 'EcoTech Solutions',
    logo: 'https://via.placeholder.com/150',
    industry: 'CleanTech',
    description: 'Developing sustainable solutions for waste management using IoT and AI to optimize recycling processes.',
    fundingStage: 'Seed',
    location: 'Bangalore',
  },
  {
    id: 2,
    name: 'MediConnect',
    logo: 'https://via.placeholder.com/150',
    industry: 'HealthTech',
    description: 'AI-powered telemedicine platform connecting patients with specialists and enabling remote diagnostics.',
    fundingStage: 'Series A',
    location: 'Mumbai',
  },
  {
    id: 3,
    name: 'RuralFinance',
    logo: 'https://via.placeholder.com/150',
    industry: 'FinTech',
    description: 'Microfinance platform for rural entrepreneurs, providing access to small business loans and financial education.',
    fundingStage: 'Pre-seed',
    location: 'Chennai',
  },
  {
    id: 4,
    name: 'AgriTech Innovations',
    logo: 'https://via.placeholder.com/150',
    industry: 'AgriTech',
    description: 'Smart farming solutions using IoT sensors and data analytics to increase crop yields and reduce water usage.',
    fundingStage: 'Seed',
    location: 'Pune',
  },
  {
    id: 5,
    name: 'EduLearn',
    logo: 'https://via.placeholder.com/150',
    industry: 'EdTech',
    description: 'Personalized learning platform using adaptive algorithms to tailor education to individual student needs.',
    fundingStage: 'Series A',
    location: 'Delhi',
  },
  {
    id: 6,
    name: 'LogiSmart',
    logo: 'https://via.placeholder.com/150',
    industry: 'Logistics',
    description: 'AI-powered logistics optimization platform for small businesses to reduce shipping costs and delivery times.',
    fundingStage: 'Pre-Series A',
    location: 'Hyderabad',
  },
];

// Industries for filtering
const industries = [
  'All',
  'CleanTech',
  'HealthTech',
  'FinTech',
  'AgriTech',
  'EdTech',
  'Logistics',
];

// Funding stages for filtering
const fundingStages = [
  'All',
  'Pre-seed',
  'Seed',
  'Pre-Series A',
  'Series A',
  'Series B+',
];

const Startups = () => {
  const [selectedIndustry, setSelectedIndustry] = useState('All');
  const [selectedStage, setSelectedStage] = useState('All');
  const [searchTerm, setSearchTerm] = useState('');
  
  // Filter startups based on selected filters and search term
  const filteredStartups = startupsData.filter((startup) => {
    const matchesIndustry = selectedIndustry === 'All' || startup.industry === selectedIndustry;
    const matchesStage = selectedStage === 'All' || startup.fundingStage === selectedStage;
    const matchesSearch = startup.name.toLowerCase().includes(searchTerm.toLowerCase()) || 
                         startup.description.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesIndustry && matchesStage && matchesSearch;
  });

  return (
    <div className="flex flex-col min-h-screen bg-white">
    <Navbar />
    
    <main className="flex-grow py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h1 className="text-4xl font-extrabold text-gray-900 mb-4">Startup Directory</h1>
          <p className="text-xl text-gray-600">
            Discover innovative startups across different sectors and connect with potential partners.
          </p>
        </div>
        
        {/* Search and Filters */}
        <div className="mb-12 bg-gray-50 p-8 rounded-2xl shadow-sm">
          <div className="flex flex-col space-y-6">
            <div>
              <label htmlFor="search" className="block text-sm font-semibold text-gray-700 mb-2">Search Startups</label>
              <div className="relative">
                <input
                  type="text"
                  id="search"
                  placeholder="Search by name or description..."
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
                <label htmlFor="industry" className="block text-sm font-semibold text-gray-700 mb-2">Industry</label>
                <select
                  id="industry"
                  className="block w-full rounded-lg border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 text-lg"
                  value={selectedIndustry}
                  onChange={(e) => setSelectedIndustry(e.target.value)}
                >
                  {industries.map((industry) => (
                    <option key={industry} value={industry}>{industry}</option>
                  ))}
                </select>
              </div>
              
              <div>
                <label htmlFor="stage" className="block text-sm font-semibold text-gray-700 mb-2">Funding Stage</label>
                <select
                  id="stage"
                  className="block w-full rounded-lg border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 text-lg"
                  value={selectedStage}
                  onChange={(e) => setSelectedStage(e.target.value)}
                >
                  {fundingStages.map((stage) => (
                    <option key={stage} value={stage}>{stage}</option>
                  ))}
                </select>
              </div>
            </div>
          </div>
        </div>
        
        {/* Results */}
        <div className="mb-16">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">
            {filteredStartups.length} Startups Found
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredStartups.map((startup) => (
              <StartupCard key={startup.id} startup={startup} />
            ))}
          </div>
          
          {filteredStartups.length === 0 && (
            <div className="text-center py-16 bg-gray-50 rounded-2xl">
              <svg className="mx-auto h-16 w-16 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <h3 className="mt-4 text-xl font-semibold text-gray-900">No startups found</h3>
              <p className="mt-2 text-gray-600">Try adjusting your search or filter criteria.</p>
            </div>
          )}
        </div>
        
        {/* Register CTA */}
        <div className="bg-blue-600 text-white rounded-xl p-12 text-center">
          <h3 className="text-3xl font-bold mb-4">Are you a startup founder?</h3>
          <p className="text-xl mb-8">Register your startup to get discovered by investors and potential collaborators.</p>
          <button className="bg-white text-blue-600 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-blue-50 transition-colors">
            Register Your Startup
          </button>
        </div>
      </div>
    </main>
    
    <Footer />
  </div>

  );
};

export default Startups;
