// src/components/StartupCard.jsx
import { Link } from 'react-router-dom';
import React from 'react'

const StartupCard = ({ startup }) => {
  const { id, name, logo, industry, description, fundingStage, location } = startup;
  
  return (
    <div className="card flex flex-col h-full">
      <div className="p-6 flex flex-col h-full">
        <div className="flex items-center mb-4">
          <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mr-3 overflow-hidden">
            <img src={logo} alt={name} className="w-12 h-12 object-contain" />
          </div>
          <div>
            <h3 className="text-lg font-semibold text-secondary-900">{name}</h3>
            <span className="bg-gray-300 text-secondary-500 text-xs px-2 py-1 rounded">
              {industry}
            </span>
          </div>
        </div>
        
        <p className="text-gray-600 text-sm mb-4 flex-grow">{description}</p>
        
        <div className="flex flex-wrap gap-2 mb-4">
          <span className="bg-blue-50 text-blue-700 text-xs px-2 py-1 rounded">
            {fundingStage}
          </span>
          <span className="bg-gray-100 text-gray-700 text-xs px-2 py-1 rounded flex items-center">
            <svg className="w-3 h-3 mr-1" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
            </svg>
            {location}
          </span>
        </div>
        
        <div className="mt-auto pt-4 border-t border-gray-600 flex justify-between items-center">
          <Link 
            to={`/startups/${id}`}
            className="text-blue-600  font-medium text-sm hover:text-primary-700"
          >
            View Profile
          </Link>
          <div  className=' px-3 py-1 bg-green-500 rounded-lg '>

          <button className=" text-white py-1">Connect</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StartupCard;
