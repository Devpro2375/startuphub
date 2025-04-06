// src/pages/Login.jsx
import { motion } from 'framer-motion';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import AIAssistant from '../components/AIAssistant';
import React from 'react';

const Login = () => {
  // State for login form fields
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  
  const handleLogin = (e) => {
    e.preventDefault();
    // Handle login logic here
    console.log('Logging in with', email, password);
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
        {/* Login Section */}
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
                  Log in to Your Account
                </motion.h1>
                <motion.p 
                  className="text-xl md:text-2xl mb-8 text-gray-700"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.4, duration: 0.8 }}
                >
                  Access your dashboard, connect with resources, and start building your startup today.
                </motion.p>
                
                <motion.div 
                  className="flex flex-wrap gap-4"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.6, duration: 0.8 }}
                >
                  {/* Login Form */}
                  <form onSubmit={handleLogin} className="bg-white p-8 rounded-xl shadow-md w-full max-w-md mx-auto">
                    <div className="mb-6">
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
                    <div className="mb-6">
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
                    <motion.button 
                      type="submit" 
                      whileHover={{ scale: 1.05 }} 
                      whileTap={{ scale: 0.95 }}
                      className="bg-blue-600 text-white px-8 py-4 rounded-lg font-semibold hover:bg-blue-700 transition-colors w-full"
                    >
                      Log in
                    </motion.button>
                  </form>
                  
                  {/* Sign Up Link */}
                  <motion.div 
                    className="mt-6 text-center"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.8, duration: 0.5 }}
                  >
                    <p className="text-lg text-gray-600">
                      Don't have an account? 
                      <Link to="/signup" className="text-blue-600 font-semibold hover:text-blue-700"> Sign up</Link>
                    </p>
                  </motion.div>
                </motion.div>
              </motion.div>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
      
      <AIAssistant />
    </motion.div>
  );
};

export default Login;
