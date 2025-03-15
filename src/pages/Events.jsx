// src/pages/Events.jsx
import { useState } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import React from 'react'

const eventsData = [
  {
    id: 1,
    title: 'Startup Pitch Night',
    date: '2023-07-15',
    time: '18:00',
    location: 'Tech Hub, Bangalore',
    description: 'Present your startup idea to a panel of investors and get valuable feedback.',
    category: 'Networking',
  },
  {
    id: 2,
    title: 'AI in Fintech Workshop',
    date: '2023-07-22',
    time: '10:00',
    location: 'Virtual Event',
    description: 'Learn how AI is transforming the fintech industry and how startups can leverage it.',
    category: 'Workshop',
  },
  {
    id: 3,
    title: 'Fundraising Masterclass',
    date: '2023-08-05',
    time: '14:00',
    location: 'Startup Incubator, Mumbai',
    description: 'Expert insights on crafting the perfect pitch and navigating the fundraising process.',
    category: 'Seminar',
  },
  // Add more events as needed
];

const categories = ['All', 'Networking', 'Workshop', 'Seminar', 'Hackathon'];

const Events = () => {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [searchTerm, setSearchTerm] = useState('');

  const filteredEvents = eventsData.filter((event) => {
    const matchesCategory = selectedCategory === 'All' || event.category === selectedCategory;
    const matchesSearch = event.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                          event.description.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="flex flex-col min-h-screen bg-white">
      <Navbar />
      
      <main className="flex-grow py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h1 className="text-4xl font-extrabold text-gray-900 mb-4">Upcoming Events</h1>
            <p className="text-xl text-gray-600">
              Discover networking opportunities, workshops, and seminars to accelerate your startup growth.
            </p>
          </div>
          
          {/* Search and Filters */}
          <div className="mb-12 bg-gray-50 p-8 rounded-2xl shadow-sm">
            <div className="flex flex-col md:flex-row gap-6">
              <div className="flex-grow">
                <label htmlFor="search" className="block text-sm font-semibold text-gray-700 mb-2">Search Events</label>
                <input
                  type="text"
                  id="search"
                  placeholder="Search by event name or description..."
                  className="block w-full rounded-lg border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 text-lg"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                />
              </div>
              <div className="md:w-1/3">
                <label htmlFor="category" className="block text-sm font-semibold text-gray-700 mb-2">Event Category</label>
                <select
                  id="category"
                  className="block w-full rounded-lg border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 text-lg"
                  value={selectedCategory}
                  onChange={(e) => setSelectedCategory(e.target.value)}
                >
                  {categories.map((category) => (
                    <option key={category} value={category}>{category}</option>
                  ))}
                </select>
              </div>
            </div>
          </div>
          
          {/* Event Cards */}
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {filteredEvents.map((event) => (
              <div key={event.id} className="bg-white rounded-xl shadow-md overflow-hidden border border-gray-200">
                <div className="p-6">
                  <h3 className="text-2xl font-semibold mb-3 text-gray-900">{event.title}</h3>
                  <p className="text-gray-600 mb-4">{event.description}</p>
                  <div className="flex items-center text-sm text-gray-500 mb-2">
                    <svg className="h-5 w-5 mr-2 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                    </svg>
                    {event.date} at {event.time}
                  </div>
                  <div className="flex items-center text-sm text-gray-500 mb-4">
                    <svg className="h-5 w-5 mr-2 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                    {event.location}
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="inline-block bg-blue-100 text-blue-800 text-sm px-3 py-1 rounded-full font-medium">
                      {event.category}
                    </span>
                    <button className="bg-blue-600 text-white px-6 py-2 rounded-lg font-medium hover:bg-blue-700 transition-colors">
                      Register
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          {/* No Events Found */}
          {filteredEvents.length === 0 && (
            <div className="text-center py-16 bg-gray-50 rounded-2xl">
              <svg className="mx-auto h-16 w-16 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <h3 className="mt-4 text-xl font-semibold text-gray-900">No events found</h3>
              <p className="mt-2 text-gray-600">Try adjusting your search or filter criteria.</p>
            </div>
          )}
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default Events;
