// src/components/Footer.jsx
import { Link } from 'react-router-dom';
import React from 'react'
const Footer = () => {
  return (
    <footer className="bg-secondary-900 text-black">
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="col-span-1 md:col-span-1">
            <div className="flex items-center">
           
              <span className="ml-2 text-xl font-bold">StartupHub</span>
            </div>
            <p className="mt-4 text-sm text-gray-600">
              Empowering startups with resources, connections, and opportunities to scale their ventures.
            </p>
            <div className="mt-6 flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-black">
                <span className="sr-only">Twitter</span>
                <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                </svg>
              </a>
              <a href="#" className="text-gray-400 hover:text-black">
                <span className="sr-only">LinkedIn</span>
                <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                </svg>
              </a>
            </div>
          </div>
          
          {/* Quick Links */}
          <div>
            <h3 className="text-sm font-semibold text-gray-700 tracking-wider uppercase">Resources</h3>
            <ul className="mt-4 space-y-2">
              <li><Link to="/resources" className="text-base text-gray-600 hover:text-black">Startup Schemes</Link></li>
              <li><Link to="/resources" className="text-base text-gray-600 hover:text-black">Funding Opportunities</Link></li>
              <li><Link to="/resources" className="text-base text-gray-600 hover:text-black">Accelerator Programs</Link></li>
              <li><Link to="/resources" className="text-base text-gray-600 hover:text-black">Learning Resources</Link></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-sm font-semibold text-gray-700 tracking-wider uppercase">Community</h3>
            <ul className="mt-4 space-y-2">
              <li><Link to="/startups" className="text-base text-gray-600 hover:text-black">Startups</Link></li>
              <li><Link to="/investors" className="text-base text-gray-600 hover:text-black">Investors</Link></li>
              <li><Link to="/mentorship" className="text-base text-gray-600 hover:text-black">Mentors</Link></li>
              <li><Link to="/events" className="text-base text-gray-600 hover:text-black">Events</Link></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-sm font-semibold text-gray-700 tracking-wider uppercase">Subscribe</h3>
            <p className="mt-4 text-base text-gray-600">Get the latest news and updates.</p>
            <form className="mt-4">
              <div className="flex">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="px-4 py-2 w-full text-sm text-gray-900 bg-white rounded-l-md focus:outline-none"
                />
                <button
                  type="submit"
                  className="bg-primary-600 px-4 py-2 rounded-r-md text-sm font-medium text-black hover:bg-primary-700"
                >
                  Subscribe
                </button>
              </div>
            </form>
          </div>
        </div>
        
        <div className="mt-8 pt-8 border-t border-gray-700">
          <p className="text-base text-gray-400">&copy; 2025 StartupHub. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
