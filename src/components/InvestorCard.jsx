// src/components/InvestorCard.jsx
import { Link } from 'react-router-dom';
import React from 'react'

const InvestorCard = ({ investor }) => {
  const { id, name, logo, type, sectors, minInvestment, maxInvestment, location, portfolio } = investor;
  
  return (
    <div className="bg-white rounded-xl shadow-md hover:shadow-lg transition-shadow overflow-hidden flex flex-col h-full border border-gray-200">
      <div className="p-6 flex flex-col h-full">
        <div className="flex items-center mb-4">
          <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mr-4 overflow-hidden">
            <img src={logo} alt={name} className="w-12 h-12 object-contain" />
          </div>
          <div>
            <h3 className="text-xl font-semibold text-gray-900 mb-1">{name}</h3>
            <span className="bg-blue-100 text-blue-700 text-xs px-2 py-1 rounded-full">
              {type}
            </span>
          </div>
        </div>
        
        <div className="mb-4">
          <h4 className="text-sm font-medium text-gray-700 mb-2">Investment Focus:</h4>
          <div className="flex flex-wrap gap-2">
            {sectors.map((sector, index) => (
              <span key={index} className="bg-gray-100 text-gray-700 text-xs px-3 py-1 rounded-full">
                {sector}
              </span>
            ))}
          </div>
        </div>
        
        <div className="grid grid-cols-2 gap-4 mb-4 text-sm">
          <div>
            <span className="text-gray-500">Investment Range:</span>
            <p className="font-medium text-gray-900">${minInvestment} - ${maxInvestment}</p>
          </div>
          <div>
            <span className="text-gray-500">Location:</span>
            <p className="font-medium text-gray-900">{location}</p>
          </div>
        </div>
        
        <div className="mb-4">
          <h4 className="text-sm font-medium text-gray-700 mb-2">Portfolio Highlights:</h4>
          <div className="flex -space-x-2 overflow-hidden">
            {portfolio.slice(0, 4).map((company, index) => (
              <div key={index} className="w-8 h-8 rounded-full border-2 border-white overflow-hidden bg-gray-100">
                <img src={company.logo} alt={company.name} className="w-full h-full object-cover" />
              </div>
            ))}
            {portfolio.length > 4 && (
              <div className="w-8 h-8 rounded-full border-2 border-white bg-gray-200 flex items-center justify-center text-xs font-medium text-gray-600">
                +{portfolio.length - 4}
              </div>
            )}
          </div>
        </div>
        
        <div className="mt-auto pt-4 border-t border-gray-200 flex justify-between items-center">
          <Link 
            to={`/investors/${id}`}
            className="text-blue-600 font-medium text-sm hover:text-blue-700 transition-colors"
          >
            View Profile
          </Link>
          <button className="bg-blue-600 text-white text-sm font-medium px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors">
            Contact
          </button>
        </div>
      </div>
    </div>
  );
};

export default InvestorCard;
