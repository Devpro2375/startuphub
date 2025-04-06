import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import React from "react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();
  const currentPath = location.pathname;

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "Resources", path: "/resources" },
    { name: "Startups", path: "/startups" },
    { name: "Investors", path: "/investors" },
    { name: "Mentorship", path: "/mentorship" },
    { name: "Pitch Desk", path: "/pitch-desk" },
    { name: "Events", path: "/events" },
  ];

  return (
    <nav className="bg-white sticky top-0 z-50  border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
              <Link to="/" className="flex-shrink-0 flex items-center">
                <span className="ml-2  w-36 pt-1 ">
                <img src="/logo.png" alt="Startup Incubator Logo" />

                </span>
              </Link>

            {/* Desktop Nav Links */}
            <div className="hidden md:ml-6 md:flex md:space-x-6">
              {navLinks.map((link) => {
                // Check if this link is active
                // For home path, we need exact matching
                const isActive = 
                  link.path === "/" 
                    ? currentPath === "/" 
                    : currentPath.startsWith(link.path);
                
                return (
                  <Link
                    key={link.name}
                    to={link.path}
                    className={`px-3 py-2 text-sm font-medium transition-all ${
                      isActive
                        ? "text-blue-600 border-b-2 border-blue-600"
                        : "text-gray-700 hover:text-blue-600 hover:border-b-2 hover:border-blue-600"
                    }`}
                  >
                    {link.name}
                  </Link>
                );
              })}
            </div>
          </div>

          {/* Auth Buttons */}
          <div className="hidden md:flex items-center space-x-3">
            <Link
              to="/login"
              className={`px-4 py-2 border rounded-md transition ${
                currentPath === "/login"
                  ? "border-blue-600 text-blue-600 bg-blue-50"
                  : "border-gray-300 text-gray-700 hover:bg-gray-100"
              }`}
            >
              Log in
            </Link>
            <Link
              to="/signup"
              className={`px-4 py-2 rounded-md transition ${
                currentPath === "/signup"
                  ? "bg-blue-700 text-white"
                  : "bg-blue-600 text-white hover:bg-blue-700"
              }`}
            >
              Sign up
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex items-center md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 rounded-md text-gray-700 hover:text-blue-600 focus:outline-none"
            >
              <svg
                className="h-6 w-6"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {isOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-white shadow-lg border-t border-gray-200 rounded-b-lg">
          <div className="px-4 pt-4 pb-3 space-y-2">
            {navLinks.map((link) => {
              // Check if this link is active for mobile menu too
              const isActive = 
                link.path === "/" 
                  ? currentPath === "/" 
                  : currentPath.startsWith(link.path);
              
              return (
                <Link
                  key={link.name}
                  to={link.path}
                  className={`block px-3 py-2 rounded-md text-base font-medium ${
                    isActive
                      ? "text-blue-600 bg-blue-50 font-semibold"
                      : "text-gray-700 hover:text-blue-600 hover:bg-gray-50"
                  }`}
                  onClick={() => setIsOpen(false)}
                >
                  {link.name}
                </Link>
              );
            })}
            <div className="pt-4 pb-2 border-t border-gray-200 flex flex-col space-y-2 px-3">
              <Link
                to="/login"
                className={`w-full text-center px-4 py-2 border rounded-md transition ${
                  currentPath === "/login"
                    ? "border-blue-600 text-blue-600 bg-blue-50"
                    : "border-gray-300 text-gray-700 hover:bg-gray-100"
                }`}
              >
                Log in
              </Link>
              <Link
                to="/signup"
                className={`w-full text-center px-4 py-2 rounded-md transition ${
                  currentPath === "/signup"
                    ? "bg-blue-700 text-white"
                    : "bg-blue-600 text-white hover:bg-blue-700"
                }`}
              >
                Sign up
              </Link>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
