// src/pages/Mentorship.jsx
import { useState } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import MentorProfile from '../components/MentorProfile';
import React from 'react'

// Mock data for mentors
const mentorsData = [
  {
    id: 1,
    name: 'Dr. Ravi Kumar',
    avatar: 'https://via.placeholder.com/150',
    title: 'Co-founder & CTO',
    company: 'TechInnovate Solutions',
    expertise: ['AI/ML', 'Cloud Architecture', 'Tech Strategy'],
    bio: 'Ex-Google engineer with 15+ years of experience in building scalable AI solutions. Passionate about mentoring tech entrepreneurs.',
    availability: 'Available 2 hours/week',
  },
  {
    id: 2,
    name: 'Priya Sharma',
    avatar: 'https://via.placeholder.com/150',
    title: 'Growth Marketing Expert',
    company: 'GrowthHackers Inc.',
    expertise: ['Digital Marketing', 'User Acquisition', 'Analytics'],
    bio: 'Helped 50+ startups scale their user base from zero to millions. Specializes in data-driven marketing strategies.',
    availability: 'Available 3 hours/week',
  },
  {
    id: 3,
    name: 'Amit Patel',
    avatar: 'https://via.placeholder.com/150',
    title: 'Serial Entrepreneur',
    company: 'Venture Builder Labs',
    expertise: ['Business Strategy', 'Fundraising', 'Product-Market Fit'],
    bio: 'Founded and exited 3 successful startups. Now dedicates time to guiding early-stage founders through their entrepreneurial journey.',
    availability: 'Available 4 hours/week',
  },
  // Add more mentor data as needed
];

// Expertise areas for filtering
const expertiseAreas = ['All', 'AI/ML', 'Cloud Architecture', 'Tech Strategy', 'Digital Marketing', 'User Acquisition', 'Analytics', 'Business Strategy', 'Fundraising', 'Product-Market Fit'];

const Mentorship = () => {
  const [selectedExpertise, setSelectedExpertise] = useState('All');
  const [searchTerm, setSearchTerm] = useState('');

  // Filter mentors based on selected expertise and search term
  const filteredMentors = mentorsData.filter((mentor) => {
    const matchesExpertise = selectedExpertise === 'All' || mentor.expertise.includes(selectedExpertise);
    const matchesSearch = mentor.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                          mentor.bio.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesExpertise && matchesSearch;
  });

  return (
    <div className="flex flex-col min-h-screen bg-white">
    <Navbar />
    
    <main className="flex-grow py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h1 className="text-4xl font-extrabold text-gray-900 mb-4">Expert Mentorship</h1>
          <p className="text-xl text-gray-600">
            Connect with experienced mentors who can guide you through your startup journey.
          </p>
        </div>
        
        {/* Search and Filters */}
        <div className="mb-12 bg-gray-50 p-8 rounded-2xl shadow-sm">
          <div className="flex flex-col md:flex-row gap-6">
            <div className="flex-grow">
              <label htmlFor="search" className="block text-sm font-semibold text-gray-700 mb-2">Search Mentors</label>
              <div className="relative">
                <input
                  type="text"
                  id="search"
                  placeholder="Search by name or expertise..."
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
            
            <div className="md:w-1/3">
              <label htmlFor="expertise" className="block text-sm font-semibold text-gray-700 mb-2">Expertise Area</label>
              <select
                id="expertise"
                className="block w-full rounded-lg border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 text-lg"
                value={selectedExpertise}
                onChange={(e) => setSelectedExpertise(e.target.value)}
              >
                {expertiseAreas.map((area) => (
                  <option key={area} value={area}>{area}</option>
                ))}
              </select>
            </div>
          </div>
        </div>
        
        {/* Results */}
        <div className="mb-16">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">
            {filteredMentors.length} Mentors Available
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredMentors.map((mentor) => (
              <MentorProfile key={mentor.id} mentor={mentor} />
            ))}
          </div>
          
          {filteredMentors.length === 0 && (
            <div className="text-center py-16 bg-gray-50 rounded-2xl">
              <svg className="mx-auto h-16 w-16 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <h3 className="mt-4 text-xl font-semibold text-gray-900">No mentors found</h3>
              <p className="mt-2 text-gray-600">Try adjusting your search or filter criteria.</p>
            </div>
          )}
        </div>
        
        {/* CTA for Mentors */}
        <div className="bg-blue-600 text-white rounded-xl p-12 text-center">
          <h3 className="text-3xl font-bold mb-4">Are you an experienced entrepreneur or industry expert?</h3>
          <p className="text-xl mb-8">Join our mentorship program to guide the next generation of startup founders.</p>
          <button className="bg-white text-blue-600 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-blue-50 transition-colors">
            Become a Mentor
          </button>
        </div>
      </div>
    </main>
    
    <Footer />
  </div>
);
};

export default Mentorship;

