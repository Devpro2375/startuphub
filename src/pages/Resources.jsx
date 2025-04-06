import { useState, useRef } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import ResourceCard from '../components/ResourceCard';
import React from 'react';

// Mock data for resources

const resourceListVariants = {
  initial: {
    opacity: 0,
    y: 20,
  },
  animate: {
    opacity: 1,
    y: 0,
    transition: {
      when: "beforeChildren",
      staggerChildren: 0.1, // Add stagger to ensure smooth appearance of items
      duration: 0.7, // Timing for the overall animation
      ease: "easeOut",
    },
  },
};


const resourcesData = [
  {
    id: 1,
    title: 'Startup India Seed Fund Scheme',
    category: 'Government Scheme',
    description: 'Financial assistance up to ₹5 crore to DPIIT-recognized startups for proof of concept, prototype development, product trials, and market entry.',
    imageUrl: 'https://images.unsplash.com/photo-1559526324-593bc073d938?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
    source: 'Startup India',
  },
  {
    id: 2,
    title: 'SIDBI Fund of Funds for Startups',
    category: 'Funding',
    description: 'Fund of Funds with a corpus of ₹10,000 crore to invest in SEBI registered Alternative Investment Funds which in turn invest in startups.',
    imageUrl: 'https://images.unsplash.com/photo-1604594849809-dfedbc827105?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
    source: 'SIDBI',
  },
  {
    id: 3,
    title: 'Credit Guarantee Fund for Startups',
    category: 'Loan Scheme',
    description: 'Enables term loans to eligible startups by providing credit guarantee coverage of up to ₹5 crore per eligible borrower.',
    imageUrl: 'https://images.unsplash.com/photo-1579621970563-ebec7560ff3e?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
    source: 'NCGTC',
  },
  {
    id: 4,
    title: 'Atal Innovation Mission',
    category: 'Incubator',
    description: 'Establishment of new incubation centers and scaling up of established ones to foster innovation and entrepreneurship across India.',
    imageUrl: 'https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
    source: 'NITI Aayog',
  },
  {
    id: 5,
    title: 'Startup Intellectual Property Protection Scheme',
    category: 'IP Protection',
    description: 'Facilitates startups to protect and commercialize their IPRs by providing access to IP services and resources.',
    imageUrl: 'https://images.unsplash.com/photo-1569937372950-f4881a5d0c00?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
    source: 'Startup India',
  },
  {
    id: 6,
    title: 'SAMRIDH Accelerator Program',
    category: 'Accelerator',
    description: 'Supports startups with funding up to ₹40 lakhs and technical assistance to help startups scale their impact solutions.',
    imageUrl: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
    source: 'MeitY',
  },
];

// Categories for filtering
const categories = [
  'All',
  'Government Scheme',
  'Funding',
  'Loan Scheme',
  'Incubator',
  'IP Protection',
  'Accelerator',
];

// Animation variants
const pageVariants = {
  initial: {
    opacity: 0,
    scale: 0.98,
  },
  animate: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.7,
      ease: "easeOut",
    },
  },
};

const itemVariants = {
  initial: {
    opacity: 0,
    y: 20,
  },
  animate: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: "easeOut",
    },
  },
};

const Resources = () => {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [searchTerm, setSearchTerm] = useState('');
  
  const headerRef = useRef(null);
  const searchRef = useRef(null);
  const resultsRef = useRef(null);
  const calloutRef = useRef(null);
  
  // Check if elements are in view
  const headerInView = useInView(headerRef, { once: true, amount: 0.3 });
  const searchInView = useInView(searchRef, { once: true, amount: 0.3 });
  const resultsInView = useInView(resultsRef, { once: true, amount: 0.1 });
  const calloutInView = useInView(calloutRef, { once: true, amount: 0.5 });
  
  const filteredResources = resourcesData.filter((resource) => {
    const matchesCategory = selectedCategory === 'All' || resource.category === selectedCategory;
    const matchesSearch = resource.title.toLowerCase().includes(searchTerm.toLowerCase()) || 
                         resource.description.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <motion.div 
      className="flex flex-col min-h-screen bg-white"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
    >
      <Navbar />
      
      <motion.main 
        className="flex-grow py-16"
        variants={pageVariants}
        initial="initial"
        animate="animate"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header with animation */}
          <motion.div 
            className="max-w-3xl mx-auto text-center mb-16"
            ref={headerRef}
            initial={{ opacity: 0, y: 30 }}
            animate={headerInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, ease: "easeOut" }}
          >
            <motion.h1 
              className="text-4xl font-extrabold text-gray-900 mb-4"
              initial={{ opacity: 0, y: 20 }}
              animate={headerInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.2, duration: 0.7 }}
            >
              Startup Resources Hub
            </motion.h1>
            <motion.p 
              className="text-xl text-gray-600"
              initial={{ opacity: 0, y: 20 }}
              animate={headerInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.4, duration: 0.7 }}
            >
              Discover government schemes, funding opportunities, and other resources to help grow your startup.
            </motion.p>
          </motion.div>
          
          {/* Search and Filter with animation */}
          <motion.div 
            className="mb-12 bg-blue-500 p-8 rounded-2xl shadow-sm"
            ref={searchRef}
            initial={{ opacity: 0, y: 20 }}
            animate={searchInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7 }}
          >
            <div className="flex flex-col md:flex-row gap-6">
              <motion.div 
                className="flex-grow"
                initial={{ opacity: 0, x: -20 }}
                animate={searchInView ? { opacity: 1, x: 0 } : {}}
                transition={{ delay: 0.2, duration: 0.5 }}
              >
                <label htmlFor="search" className="block text-sm font-semibold text-white mb-2">Search Resources</label>
                <motion.input
                  whileFocus={{ scale: 1.01 }}
                  transition={{ type: "spring", stiffness: 300 }}
                  type="text"
                  id="search"
                  placeholder="Search by keywords..."
                  className="block w-full rounded-lg border-gray-300 text-white border- focus:border-blue-500 focus:ring-blue-500 p-3 outline-none shadow-sm text-lg"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                />
              </motion.div>
              
              <motion.div 
                className="md:w-1/3"
                initial={{ opacity: 0, x: 20 }}
                animate={searchInView ? { opacity: 1, x: 0 } : {}}
                transition={{ delay: 0.3, duration: 0.5 }}
              >
                <label htmlFor="category" className="block text-sm font-semibold text-white mb-2">Filter by Category</label>
                <motion.select
                  whileFocus={{ scale: 1.01 }}
                  transition={{ type: "spring", stiffness: 300 }}
                  id="category"
                  className="block w-full rounded-lg border-gray-300 text-white bg-blue-500 focus:border-blue-500 focus:ring-blue-500 p-3 outline-none shadow-sm text-lg"
                  value={selectedCategory}
                  onChange={(e) => setSelectedCategory(e.target.value)}
                >
                  {categories.map((category) => (
                    <option key={category} value={category}>
                      {category}
                    </option>
                  ))}
                </motion.select>
              </motion.div>
            </div>
          </motion.div>
          
          {/* Results with animations */}
          <motion.div 
            className="mb-16"
            ref={resultsRef}
            variants={itemVariants}
          >
            <motion.h2 
              className="text-2xl font-bold text-gray-900 mb-6"
              initial={{ opacity: 0 }}
              animate={resultsInView ? { opacity: 1 } : {}}
              transition={{ duration: 0.5 }}
            >
              {filteredResources.length} Resources Found
            </motion.h2>
            
            <motion.div 
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
              variants={resourceListVariants}
              initial="initial"
              animate={resultsInView ? "animate" : "initial"}
              key={selectedCategory + searchTerm}
            >
              {filteredResources.map((resource, index) => (
                <motion.div
                  key={resource.id}
                  variants={{
                    initial: { opacity: 0, y: 20 },
                    animate: { 
                      opacity: 1, 
                      y: 0,
                      transition: { 
                        delay: index * 0.1,
                        duration: 0.5,
                        ease: "easeOut"
                      }
                    }
                  }}
                  whileHover={{ 
                    y: -10,
                    transition: { type: "spring", stiffness: 400, damping: 10 }
                  }}
                  whileTap={{ scale: 0.98 }}
                >
                  <ResourceCard resource={resource} />
                </motion.div>
              ))}
            </motion.div>
            
            {filteredResources.length === 0 && (
              <motion.div 
                className="text-center py-16 bg-gray-50 rounded-2xl"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, ease: "easeOut" }}
              >
                <motion.svg 
                  className="mx-auto h-16 w-16 text-gray-400" 
                  fill="none" 
                  stroke="currentColor" 
                  viewBox="0 0 24 24"
                  initial={{ scale: 0 }}
                  animate={{ scale: 1, rotate: [0, 10, -10, 0] }}
                  transition={{ duration: 0.8, delay: 0.2 }}
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </motion.svg>
                <motion.h3 
                  className="mt-4 text-xl font-semibold text-gray-900"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.5 }}
                >
                  No resources found
                </motion.h3>
                <motion.p 
                  className="mt-2 text-gray-600"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.7 }}
                >
                  Try adjusting your search or filter criteria.
                </motion.p>
              </motion.div>
            )}
          </motion.div>
          
          {/* Info Callout with animation */}
          <motion.div 
            className="bg-blue-50 border-l-4 border-blue-500 p-6 rounded-lg"
            ref={calloutRef}
            initial={{ opacity: 0, x: -20 }}
            animate={calloutInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, ease: "easeOut" }}
            whileHover={{ scale: 1.02, boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.1)" }}
          >
            <div className="flex items-center">
              <motion.div 
                className="flex-shrink-0"
                animate={{ 
                  scale: [1, 1.2, 1],
                }}
                transition={{ 
                  repeat: Infinity, 
                  repeatType: "mirror", 
                  duration: 2,
                  repeatDelay: 3
                }}
              >
                <svg className="h-6 w-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </motion.div>
              <div className="ml-4">
                <p className="text-lg text-blue-700">
                  Need help finding the right resources for your startup? <motion.a 
                    href="#" 
                    className="font-semibold underline hover:text-blue-800 transition-colors"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    Book a free consultation
                  </motion.a> with our experts.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </motion.main>
      
      <Footer />
    </motion.div>
  );
};

export default Resources;
