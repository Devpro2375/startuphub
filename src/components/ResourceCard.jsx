// src/components/ResourceCard.jsx
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import React from 'react';

const ResourceCard = ({ resource }) => {
  const { id, title, category, description, imageUrl, source } = resource;
  
  return (
    <motion.div 
      className="card flex flex-col h-full"
      whileHover={{ boxShadow: "0px 10px 30px rgba(0, 0, 0, 0.1)" }}
      transition={{ type: "spring", stiffness: 300 }}
    >
      <div className="relative h-48 overflow-hidden">
        <motion.img 
          src={imageUrl} 
          alt={title}
          className="w-full h-full object-cover"
          whileHover={{ scale: 1.1 }}
          transition={{ duration: 0.5 }}
        />
        <motion.span 
          className="absolute top-0 right-0 bg-primary-600 text-white text-xs font-bold px-3 py-1 rounded-bl-lg"
          whileHover={{ 
            scale: 1.05,
            backgroundColor: "#1a56db" // darker shade for hover
          }}
          initial={{ y: -10, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2 }}
        >
          {category}
        </motion.span>
      </div>
      <div className="p-5 flex flex-col flex-grow">
        <motion.h3 
          className="text-lg font-semibold mb-2 text-secondary-900"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
        >
          {title}
        </motion.h3>
        <motion.p 
          className="text-gray-600 text-sm mb-4 flex-grow"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
        >
          {description}
        </motion.p>
        <div className="flex justify-between items-center mt-auto">
          <motion.span 
            className="text-xs text-gray-500"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
          >
            Source: {source}
          </motion.span>
          <motion.div
            whileHover={{ x: 3 }}
            whileTap={{ scale: 0.95 }}
          >
            <Link 
              to={`/resources/${id}`}
              className="text-primary-600 text-sm font-medium hover:text-primary-700 flex items-center"
            >
              View Details
              <motion.svg 
                className="w-4 h-4 ml-1" 
                fill="none" 
                stroke="currentColor" 
                viewBox="0 0 24 24"
                initial={{ x: -5, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ delay: 0.6 }}
                whileHover={{ x: 2 }}
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
              </motion.svg>
            </Link>
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
};

export default ResourceCard;
