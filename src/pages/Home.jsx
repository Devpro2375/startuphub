// src/pages/Home.jsx
import { Link } from 'react-router-dom';
import { motion, useInView } from 'framer-motion';
import { useRef, useState, useEffect } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import HeroImage from '../assets/3343150.png';
import React from 'react';
import AIAssistant from '../components/AIAssistant';

// Define a Counter component for animating statistics
const Counter = ({ from, to, duration = 2 }) => {
  const [count, setCount] = useState(from);
  const nodeRef = useRef(null);
  const isInView = useInView(nodeRef, { once: true });
  
  useEffect(() => {
    if (isInView) {
      let start = from;
      const end = to;
      const range = end - start;
      const increment = end > start ? 1 : -1;
      const stepTime = Math.abs(Math.floor(duration * 1000 / range));
      
      const timer = setInterval(() => {
        start += increment;
        setCount(start);
        if (start === end) {
          clearInterval(timer);
        }
      }, stepTime);
      
      return () => {
        clearInterval(timer);
      };
    }
  }, [from, to, duration, isInView]);
  
  return <span ref={nodeRef}>{count}</span>;
};

const Home = () => {
  // References for scroll animations
  const featuresRef = useRef(null);
  const statsRef = useRef(null);
  const testimonialsRef = useRef(null);
  const ctaRef = useRef(null);
  
  // Detect when sections are in view
  const isInViewFeatures = useInView(featuresRef, { once: true, amount: 0.2 });
  const isInViewStats = useInView(statsRef, { once: true, amount: 0.3 });
  const isInViewTestimonials = useInView(testimonialsRef, { once: true });
  const isInViewCta = useInView(ctaRef, { once: true, amount: 0.5 });
  
  const features = [
    {
      title: 'Resource Hub',
      description: 'Access government schemes, loans, and programs specially designed for startups.',
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
        </svg>
      ),
      path: '/resources',
    },
    {
      title: 'Startup Network',
      description: 'Connect with innovative startups across sectors and explore collaboration opportunities.',
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
        </svg>
      ),
      path: '/startups',
    },
    {
      title: 'Investor Directory',
      description: 'Find the right investors for your startup from our curated network of VCs and angel investors.',
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
      path: '/investors',
    },
    {
      title: 'Expert Mentorship',
      description: 'Get guidance from industry experts who have built and scaled successful businesses.',
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
        </svg>
      ),
      path: '/mentorship',
    },
    {
      title: 'Pitch Desk',
      description: 'Create and share your pitch deck with potential investors and get AI-powered feedback.',
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 12l3-3 3 3 4-4M8 21l4-4 4 4M3 4h18M4 4h16v12a1 1 0 01-1 1H5a1 1 0 01-1-1V4z" />
        </svg>
      ),
      path: '/pitch-desk',
    },
    {
      title: 'Events Calendar',
      description: 'Stay updated with upcoming networking events, workshops, and startup competitions.',
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
        </svg>
      ),
      path: '/events',
    },
  ];
  
  const stats = [
    { value: "500+", label: "Active Startups", countTo: 500 },
    { value: "50Cr+", label: "Funding Secured", countTo: 50 },
    { value: "200+", label: "Expert Mentors", countTo: 200 },
    { value: "100+", label: "Gov't Schemes", countTo: 100 }
  ];

  return (
    <motion.div 
      className="flex flex-col min-h-screen bg-white"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <Navbar />
      
      <main className="flex-grow">
        {/* Hero Section with Animations */}
        <section className="bg-gradient-to-r from-blue-50 to-blue-100 text-gray-900">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-28 lg:py-36">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
              >
                <motion.h1 
                  className="text-4xl sm:text-5xl font-extrabold leading-tight mb-6 text-blue-900"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.2, duration: 0.8 }}
                >
                  Launch and Scale Your Startup Faster
                </motion.h1>
                <motion.p 
                  className="text-xl md:text-2xl mb-8 text-gray-700"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.4, duration: 0.8 }}
                >
                  Connect with resources, investors, and mentors all in one platform. Get access to government schemes and funding opportunities.
                </motion.p>
                <motion.div 
                  className="flex flex-wrap gap-4"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.6, duration: 0.8 }}
                >
                  <motion.div 
                    whileHover={{ scale: 1.05 }} 
                    whileTap={{ scale: 0.95 }}
                  >
                    <Link 
                      to="/events" 
                      className="bg-blue-600 text-white px-8 py-4 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
                    >
                      Get Started
                    </Link>
                  </motion.div>
                  <motion.div 
                    whileHover={{ scale: 1.05 }} 
                    whileTap={{ scale: 0.95 }}
                  >
                    <Link 
                      to="/resources" 
                      className="bg-white text-blue-600 border-2 border-blue-600 px-8 py-4 rounded-lg font-semibold hover:bg-blue-50 transition-colors"
                    >
                      Explore Resources
                    </Link>
                  </motion.div>
                </motion.div>
              </motion.div>
              <motion.div 
                className="hidden md:block"
                initial={{ opacity: 0, x: 20 }}
                animate={{ 
                  opacity: 1, 
                  x: 0,
                  y: [0, -10, 0],
                }}
                transition={{
                  x: { duration: 0.8, delay: 0.5 },
                  y: { duration: 3, repeat: Infinity, repeatType: "mirror" }
                }}
              >
                <img src={HeroImage} alt="Startup Growth" className="w-full max-w-lg mx-auto" />
              </motion.div>
            </div>
          </div>
        </section>
        
        {/* Features Section with Staggered Animations */}
        <section className="py-20 bg-white" ref={featuresRef}>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div 
              className="text-center mb-16"
              initial={{ opacity: 0, y: 20 }}
              animate={isInViewFeatures ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">Everything You Need to Succeed</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Our platform brings together all the resources, connections, and tools startups need to succeed in one place.
              </p>
            </motion.div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
              {features.map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInViewFeatures ? { opacity: 1, y: 0 } : {}}
                  transition={{ 
                    delay: index * 0.1, 
                    duration: 0.5 
                  }}
                  whileHover={{ 
                    y: -5, 
                    boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.1)" 
                  }}
                >
                  <Link 
                    to={feature.path}
                    className="bg-white rounded-xl shadow-md h-full transition-shadow p-8 flex flex-col items-center text-center border border-gray-200"
                  >
                    <motion.div 
                      className="bg-blue-100 text-blue-600 p-4 rounded-full mb-6"
                      whileHover={{ 
                        rotate: [0, 10, -10, 10, 0],
                        transition: { duration: 0.5 }
                      }}
                    >
                      {feature.icon}
                    </motion.div>
                    <h3 className="text-2xl font-semibold mb-3 text-gray-900">{feature.title}</h3>
                    <p className="text-gray-600 text-lg">{feature.description}</p>
                  </Link>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
        
        {/* Stats Section with Counter Animations */}
        <section className="py-20 bg-blue-50" ref={statsRef}>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div 
              className="text-center mb-16"
              initial={{ opacity: 0, y: 20 }}
              animate={isInViewStats ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">Driving Startup Success</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Our platform has helped numerous startups secure funding, find mentors, and access valuable resources.
              </p>
            </motion.div>
            
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
              {stats.map((stat, index) => (
                <motion.div 
                  key={index} 
                  className="p-8 bg-white rounded-xl shadow-md"
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={isInViewStats ? { opacity: 1, scale: 1 } : {}}
                  transition={{ delay: index * 0.1, duration: 0.5 }}
                  whileHover={{ scale: 1.05 }}
                >
                  <p className="text-4xl font-bold text-blue-600 mb-2">
                    {stat.value.includes('₹') ? '₹' : ''}
                    <Counter from={0} to={stat.countTo} />
                    {stat.value.includes('+') ? '+' : ''}
                  </p>
                  <p className="text-gray-700 text-lg">{stat.label}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
        
        {/* Testimonials Section with Animations */}
        <section className="py-20 bg-white" ref={testimonialsRef}>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div 
              className="text-center mb-16"
              initial={{ opacity: 0, y: 20 }}
              animate={isInViewTestimonials ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">Success Stories</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Hear from founders who have accelerated their growth with our platform.
              </p>
            </motion.div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
              {/* One animated testimonial */}
              <motion.div 
                className="bg-white p-8 rounded-xl shadow-md border border-gray-200"
                initial={{ opacity: 0, y: 20 }}
                animate={isInViewTestimonials ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.2, duration: 0.8 }}
                whileHover={{ 
                  y: -10, 
                  boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)" 
                }}
              >
                <div className="flex items-center mb-6">
                  <motion.div 
                    className="w-16 h-16 rounded-full bg-gray-200 overflow-hidden mr-4"
                    initial={{ scale: 0.8 }}
                    animate={isInViewTestimonials ? { scale: 1 } : {}}
                    transition={{ delay: 0.3, duration: 0.5, type: "spring" }}
                  >
                    <img src="https://randomuser.me/api/portraits/women/32.jpg" alt="Testimonial" className="w-full h-full object-cover" />
                  </motion.div>
                  <div>
                    <h4 className="font-semibold text-lg">Priya Sharma</h4>
                    <p className="text-gray-600">Founder, EcoTech Solutions</p>
                  </div>
                </div>
                <p className="text-gray-700 text-lg italic mb-6">
                  "Through StartupHub, we connected with the perfect investors who shared our vision for sustainable technology. We secured ₹2 Cr in seed funding and found mentors who guided us through scaling challenges."
                </p>
                <motion.div 
                  className="flex text-yellow-400"
                  initial={{ opacity: 0 }}
                  animate={isInViewTestimonials ? { opacity: 1 } : {}}
                  transition={{ delay: 0.5, duration: 0.5 }}
                >
                  {[...Array(5)].map((_, i) => (
                    <motion.svg 
                      key={i} 
                      className="w-6 h-6" 
                      fill="currentColor" 
                      viewBox="0 0 20 20"
                      initial={{ scale: 0 }}
                      animate={isInViewTestimonials ? { scale: 1 } : {}}
                      transition={{ delay: 0.5 + (i * 0.1), duration: 0.3 }}
                    >
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </motion.svg>
                  ))}
                </motion.div>
              </motion.div>
              
              {/* Second testimonial with animation */}
              <motion.div 
                className="bg-white p-8 rounded-xl shadow-md border border-gray-200"
                initial={{ opacity: 0, y: 20 }}
                animate={isInViewTestimonials ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.3, duration: 0.8 }}
                whileHover={{ 
                  y: -10, 
                  boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)" 
                }}
              >
                <div className="flex items-center mb-6">
                  <motion.div 
                    className="w-16 h-16 rounded-full bg-gray-200 overflow-hidden mr-4"
                    initial={{ scale: 0.8 }}
                    animate={isInViewTestimonials ? { scale: 1 } : {}}
                    transition={{ delay: 0.4, duration: 0.5, type: "spring" }}
                  >
                    <img src="https://randomuser.me/api/portraits/men/44.jpg" alt="Testimonial" className="w-full h-full object-cover" />
                  </motion.div>
                  <div>
                    <h4 className="font-semibold text-lg">Rajiv Mehta</h4>
                    <p className="text-gray-600">CEO, FinEdge</p>
                  </div>
                </div>
                <p className="text-gray-700 text-lg italic mb-6">
                  "The resources available on StartupHub helped us navigate complex regulatory requirements for our fintech startup. We connected with experienced mentors who transformed our go-to-market strategy."
                </p>
                <motion.div 
                  className="flex text-yellow-400"
                  initial={{ opacity: 0 }}
                  animate={isInViewTestimonials ? { opacity: 1 } : {}}
                  transition={{ delay: 0.6, duration: 0.5 }}
                >
                  {[...Array(5)].map((_, i) => (
                    <motion.svg 
                      key={i} 
                      className="w-6 h-6" 
                      fill="currentColor" 
                      viewBox="0 0 20 20"
                      initial={{ scale: 0 }}
                      animate={isInViewTestimonials ? { scale: 1 } : {}}
                      transition={{ delay: 0.6 + (i * 0.1), duration: 0.3 }}
                    >
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </motion.svg>
                  ))}
                </motion.div>
              </motion.div>
              
              {/* Third testimonial with animation */}
              <motion.div 
                className="bg-white p-8 rounded-xl shadow-md border border-gray-200"
                initial={{ opacity: 0, y: 20 }}
                animate={isInViewTestimonials ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.4, duration: 0.8 }}
                whileHover={{ 
                  y: -10, 
                  boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)" 
                }}
              >
                <div className="flex items-center mb-6">
                  <motion.div 
                    className="w-16 h-16 rounded-full bg-gray-200 overflow-hidden mr-4"
                    initial={{ scale: 0.8 }}
                    animate={isInViewTestimonials ? { scale: 1 } : {}}
                    transition={{ delay: 0.5, duration: 0.5, type: "spring" }}
                  >
                    <img src="https://randomuser.me/api/portraits/women/68.jpg" alt="Testimonial" className="w-full h-full object-cover" />
                  </motion.div>
                  <div>
                    <h4 className="font-semibold text-lg">Aisha Khan</h4>
                    <p className="text-gray-600">Founder, HealthTech AI</p>
                  </div>
                </div>
                <p className="text-gray-700 text-lg italic mb-6">
                  "StartupHub's government scheme directory was a game-changer for us. We applied for and received grants that funded our R&D phase. The platform simplified what would have been a complex process."
                </p>
                <motion.div 
                  className="flex text-yellow-400"
                  initial={{ opacity: 0 }}
                  animate={isInViewTestimonials ? { opacity: 1 } : {}}
                  transition={{ delay: 0.7, duration: 0.5 }}
                >
                  {[...Array(5)].map((_, i) => (
                    <motion.svg 
                      key={i} 
                      className="w-6 h-6" 
                      fill="currentColor" 
                      viewBox="0 0 20 20"
                      initial={{ scale: 0 }}
                      animate={isInViewTestimonials ? { scale: 1 } : {}}
                      transition={{ delay: 0.7 + (i * 0.1), duration: 0.3 }}
                    >
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </motion.svg>
                  ))}
                </motion.div>
              </motion.div>
            </div>
          </div>
        </section>
        
        {/* CTA Section with Gradient Animation */}
        <motion.section 
          className="py-20 bg-blue-600 text-white"
          ref={ctaRef}
          initial={{ opacity: 0.9 }}
          animate={isInViewCta ? { 
            opacity: 1,
            background: [
              "linear-gradient(90deg, #2563eb 0%, #3b82f6 100%)",
              "linear-gradient(90deg, #3b82f6 0%, #2563eb 100%)",
            ],
          } : {}}
          transition={{ 
            duration: 3, 
            repeat: Infinity, 
            repeatType: "reverse" 
          }}
        >
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <motion.h2 
              className="text-3xl sm:text-4xl font-bold mb-6"
              initial={{ opacity: 0, y: 20 }}
              animate={isInViewCta ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8 }}
            >
              Ready to Accelerate Your Startup Journey?
            </motion.h2>
            <motion.p 
              className="text-xl mb-10 max-w-3xl mx-auto"
              initial={{ opacity: 0, y: 20 }}
              animate={isInViewCta ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.2, duration: 0.8 }}
            >
              Join thousands of founders who are building faster and smarter with our platform.
            </motion.p>
            <motion.div 
              className="flex flex-wrap justify-center gap-6"
              initial={{ opacity: 0, y: 20 }}
              animate={isInViewCta ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.4, duration: 0.8 }}
            >
              <motion.div 
                whileHover={{ scale: 1.05, boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.2)" }} 
                whileTap={{ scale: 0.95 }}
                initial={{ x: -10 }}
                animate={isInViewCta ? { x: 0 } : {}}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <Link to="/signup" className="bg-white text-blue-600 px-8 py-4 rounded-lg font-semibold hover:bg-blue-50 transition-colors text-lg">
                  Create Free Account
                </Link>
              </motion.div>
              <motion.div 
                whileHover={{ scale: 1.05 }} 
                whileTap={{ scale: 0.95 }}
                initial={{ x: 10 }}
                animate={isInViewCta ? { x: 0 } : {}}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <Link to="/resources" className="bg-transparent border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-blue-700 transition-colors text-lg">
                  Explore Resources
                </Link>
              </motion.div>
            </motion.div>
          </div>
        </motion.section>
      </main>
      
      <Footer />

      <AIAssistant />
    </motion.div>
  );
};

export default Home;
