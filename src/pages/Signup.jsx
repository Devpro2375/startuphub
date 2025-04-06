// src/pages/Signup.jsx
import { motion } from 'framer-motion';
import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';  // Import useNavigate for redirection
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import AIAssistant from '../components/AIAssistant';
import React from 'react';

const Signup = () => {
  // States for each step in the form
  const [step, setStep] = useState(1);
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [startupName, setStartupName] = useState('');
  const [startupIndustry, setStartupIndustry] = useState('');
  const [startupStage, setStartupStage] = useState('');
  const [startupDescription, setStartupDescription] = useState('');
  const [thankYouMessage, setThankYouMessage] = useState(false); // State for showing Thank You message
  const navigate = useNavigate(); // useNavigate hook for redirection

  const handleSignup = (e) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      alert("Passwords don't match!");
      return;
    }

    // Simulate submitting the form
    console.log('Signing up with', fullName, email, password, startupName, startupIndustry);

    // Show the "Thank You" message and redirect after 2 seconds
    setThankYouMessage(true);
    setTimeout(() => {
      navigate('/');  // Redirect to the homepage after 2 seconds
    }, 2000);
  };

  // Steps for the form
  const renderStepContent = () => {
    switch (step) {
      case 1:
        return (
          <div className="flex flex-col space-y-4">
            <div>
              <label htmlFor="fullName" className="block text-lg font-semibold text-gray-900 mb-2">Full Name</label>
              <input 
                type="text" 
                id="fullName" 
                value={fullName} 
                onChange={(e) => setFullName(e.target.value)}
                required
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
                placeholder="Enter your full name"
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-lg font-semibold text-gray-900 mb-2">Email</label>
              <input 
                type="email" 
                id="email" 
                value={email} 
                onChange={(e) => setEmail(e.target.value)}
                required
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
                placeholder="Enter your email"
              />
            </div>
            <div>
              <label htmlFor="password" className="block text-lg font-semibold text-gray-900 mb-2">Password</label>
              <input 
                type="password" 
                id="password" 
                value={password} 
                onChange={(e) => setPassword(e.target.value)}
                required
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
                placeholder="Enter your password"
              />
            </div>
            <div>
              <label htmlFor="confirmPassword" className="block text-lg font-semibold text-gray-900 mb-2">Confirm Password</label>
              <input 
                type="password" 
                id="confirmPassword" 
                value={confirmPassword} 
                onChange={(e) => setConfirmPassword(e.target.value)}
                required
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
                placeholder="Confirm your password"
              />
            </div>
          </div>
        );
      case 2:
        return (
          <div className="flex flex-col space-y-4">
            <div>
              <label htmlFor="startupName" className="block text-lg font-semibold text-gray-900 mb-2">Startup Name</label>
              <input 
                type="text" 
                id="startupName" 
                value={startupName} 
                onChange={(e) => setStartupName(e.target.value)}
                required
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
                placeholder="Enter your startup's name"
              />
            </div>
            <div>
              <label htmlFor="startupIndustry" className="block text-lg font-semibold text-gray-900 mb-2">Industry</label>
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
                {["Tech", "Healthcare", "Finance", "E-commerce", "Education", "Other"].map((industry) => (
                  <motion.div 
                    key={industry}
                    className={`p-4 border-2 rounded-lg cursor-pointer ${startupIndustry === industry ? "bg-blue-500 text-white" : "bg-white text-gray-800"}`}
                    onClick={() => setStartupIndustry(industry)}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    {industry}
                  </motion.div>
                ))}
              </div>
            </div>
            <div>
              <label htmlFor="startupStage" className="block text-lg font-semibold text-gray-900 mb-2">Startup Stage</label>
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
                {["Idea", "Early Stage", "Growth", "Mature"].map((stage) => (
                  <motion.div 
                    key={stage}
                    className={`p-4 border-2 rounded-lg cursor-pointer ${startupStage === stage ? "bg-blue-500 text-white" : "bg-white text-gray-800"}`}
                    onClick={() => setStartupStage(stage)}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    {stage}
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        );
      case 3:
        return (
          <div className="flex flex-col space-y-4">
            <div>
              <label htmlFor="startupDescription" className="block text-lg font-semibold text-gray-900 mb-2">Startup Description</label>
              <textarea
                id="startupDescription"
                value={startupDescription}
                onChange={(e) => setStartupDescription(e.target.value)}
                required
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
                placeholder="Tell us about your startup"
              />
            </div>
          </div>
        );
      default:
        return null;
    }
  };

  const handleNext = () => {
    setStep(step + 1);
  };

  const handleBack = () => {
    setStep(step - 1);
  };

  return (
    <motion.div
      className="flex flex-col min-h-screen bg-white"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <Navbar />

      <main className="flex-grow">
        {/* Signup Section */}
        <section className="bg-gradient-to-r from-blue-50 to-blue-100 text-gray-900">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-28 lg:py-36">
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
                Join the Entrepreneur Community
              </motion.h1>
              <motion.p
                className="text-xl md:text-2xl mb-8 text-gray-700"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.4, duration: 0.8 }}
              >
                Fill in the details about yourself and your startup to get started on your entrepreneurial journey.
              </motion.p>

              {thankYouMessage ? (
                <div className="text-center text-xl text-green-600">
                  <p>Thank you for signing up! Redirecting to homepage...</p>
                </div>
              ) : (
                <form onSubmit={handleSignup}>
                  {/* Render Step Content */}
                  {renderStepContent()}
                  
                  {/* Navigation Buttons */}
                  <div className="flex justify-between mt-6">
                    {step > 1 && (
                      <motion.button
                        type="button"
                        onClick={handleBack}
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="bg-gray-300 text-gray-800 px-6 py-3 rounded-lg font-semibold hover:bg-gray-400 transition-colors"
                      >
                        Back
                      </motion.button>
                    )}
                    {step < 3 ? (
                      <motion.button
                        type="button"
                        onClick={handleNext}
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
                      >
                        Next
                      </motion.button>
                    ) : (
                      <motion.button
                        type="submit"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
                      >
                        Submit
                      </motion.button>
                    )}
                  </div>
                </form>
              )}
            </motion.div>
          </div>
        </section>
      </main>

      <Footer />

      <AIAssistant />
    </motion.div>
  );
};

export default Signup;
