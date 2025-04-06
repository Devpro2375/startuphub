import { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import React from 'react';
import Lottie from 'react-lottie-player';
import robotIdleAnimation from '../assets/animations/Animation - 1742058716674.json';
import axios from 'axios'; // Import axios for API requests

const AIAssistant = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    { 
      text: "Hi there! I'm your StartupHub assistant. How can I help you today?", 
      sender: 'ai'
    }
  ]);
  const [input, setInput] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef(null);
  const [robotState, setRobotState] = useState('idle');
  const [showAssistantButton, setShowAssistantButton] = useState(false);
  
  // Show the assistant button after a delay
  useEffect(() => {
    const timer = setTimeout(() => {
      setShowAssistantButton(true);
      setTimeout(() => {
        setRobotState('wave');
        setTimeout(() => setRobotState('idle'), 2500);
      }, 500);
    }, 2000);
    
    return () => clearTimeout(timer);
  }, []);

  // Auto-scroll to bottom of messages
  useEffect(() => {
    if (messagesEndRef.current) {
      messagesEndRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  }, [messages]);

  // Handle sending a new message
  const handleSendMessage = async (e) => {
    e.preventDefault();
    if (!input.trim()) return;
    
    // Add user message to the chat
    setMessages(prev => [...prev, { text: input, sender: 'user' }]);
    setInput('');
    setIsTyping(true);
    setRobotState('thinking');

    try {
      // Send POST request to Python FastAPI backend
      const response = await axios.post('http://localhost:8000/chat', {
        message: input,
        history: messages,
        system_message: "You are a friendly AI assistant.",
        max_tokens: 512,
        temperature: 0.7,
        top_p: 0.95,
      });

      // Set the response and AI state
      setIsTyping(false);
      setRobotState('talking');
      setMessages(prev => [...prev, { text: response.data.response, sender: 'ai' }]);

      setTimeout(() => setRobotState('idle'), 1500);
    } catch (error) {
      console.error('Error sending message to AI:', error);
      setIsTyping(false);
      setRobotState('idle');
    }
  };

  return (
    <>
      {/* Animated Robot Assistant Button */}
      <AnimatePresence>
        {showAssistantButton && (
          <motion.div
            className="fixed bottom-6 right-6 z-50"
            initial={{ opacity: 0, y: 100, scale: 0 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 100, scale: 0 }}
            transition={{ 
              type: "spring", 
              stiffness: 400, 
              damping: 15 
            }}
          >
            <motion.div
              className="absolute -top-20 -left-5 bg-white text-blue-600 p-2 rounded-xl shadow-md text-sm max-w-[140px]"
              initial={{ opacity: 0, scale: 0, y: 10 }}
              animate={{ 
                opacity: 1, 
                scale: 1, 
                y: 0,
                transition: { delay: 1 }
              }}
              exit={{ opacity: 0, scale: 0 }}
              transition={{ type: "spring" }}
            >
              <p>Need help with your startup?</p>
              <svg className="absolute bottom-0 -mb-2 left-6 text-white" width="10" height="10" viewBox="0 0 10 10">
                <polygon fill="currentColor" points="0,0 10,0 5,10" />
              </svg>
            </motion.div>
            
            <motion.button
              className="bg-white rounded-full p-2 shadow-lg flex items-center justify-center overflow-hidden"
              style={{ 
                width: '80px', 
                height: '80px',
                boxShadow: '0 10px 25px -5px rgba(59, 130, 246, 0.4)'
              }}
              onClick={() => setIsOpen(true)}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              <Lottie
                loop
                animationData={robotIdleAnimation}
                play
                style={{ width: 120, height: 120 }}
              />
            </motion.button>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Assistant popup dialog */}
      <AnimatePresence>
        {isOpen && (
          <motion.div 
            className="fixed bottom-6 right-6 w-96 h-[32rem] bg-white rounded-2xl shadow-2xl overflow-hidden z-50 flex flex-col"
            initial={{ opacity: 0, y: 100, scale: 0.8 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 100, scale: 0.8 }}
            transition={{ type: "spring", damping: 25, stiffness: 300 }}
          >
            {/* Chat header with animated background */}
            <motion.div 
              className="relative px-4 py-3 flex justify-between items-center overflow-hidden"
              style={{ backgroundColor: '#3b82f6' }}
            >
              {/* Animated background pattern */}
              <motion.div 
                className="absolute inset-0 z-0"
                initial={{ backgroundPosition: '0% 0%' }}
                animate={{ 
                  backgroundPosition: ['0% 0%', '100% 100%'],
                }}
                transition={{ 
                  repeat: Infinity, 
                  repeatType: "mirror", 
                  duration: 20,
                  ease: "linear"
                }}
                style={{
                  backgroundImage: `url("data:image/svg+xml,%3Csvg width='100' height='100' viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M11 18c3.866 0 7-3.134 7-7s-3.134-7-7-7-7 3.134-7 7 3.134 7 7 7zm48 25c3.866 0 7-3.134 7-7s-3.134-7-7-7-7 3.134-7 7 3.134 7 7 7zm-43-7c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zm63 31c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zM34 90c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zm56-76c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zM12 86c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm28-65c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm23-11c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm-6 60c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm29 22c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zM32 63c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm57-13c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm-9-21c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM60 91c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM35 41c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM12 60c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2z' fill='%232563eb' fill-opacity='0.1' fill-rule='evenodd'/%3E%3C/svg%3E")`,
                  backgroundSize: '60px 60px',
                }}
              />
              
              <div className="flex items-center z-10">
                <div className="w-12 h-12 mr-3 relative">
                  <Lottie
                    loop={robotState === 'idle' || robotState === 'talking'}
                    animationData={robotIdleAnimation}
                    play
                    style={{ width: 60, height: 60 }}
                  />
                </div>
                <div className="text-white">
                  <h3 className="font-bold">StartupHub Assistant</h3>
                  <div className="text-xs flex items-center">
                    <motion.span 
                      className="bg-green-400 rounded-full h-2 w-2 mr-1"
                      animate={{ scale: [1, 1.3, 1] }}
                      transition={{ 
                        repeat: Infinity, 
                        duration: 2,
                        repeatDelay: 1
                      }}
                    ></motion.span>
                    <span>Online</span>
                  </div>
                </div>
              </div>
              <motion.button 
                onClick={() => setIsOpen(false)}
                className="rounded-full p-2 hover:bg-blue-500 transition z-10 text-white"
                whileHover={{ rotate: 90 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </motion.button>
            </motion.div>
            
            {/* Chat messages */}
            <div className="flex-grow p-4 overflow-y-auto bg-gray-50">
              {messages.map((message, index) => (
                <motion.div
                  key={index}
                  className={`flex mb-4 ${message.sender === 'user' ? 'justify-end' : 'justify-start'}`}
                  initial={{ opacity: 0, y: 20, scale: 0.9 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  transition={{ 
                    delay: 0.1 * (index % 5),
                    type: "spring",
                    damping: 12
                  }}
                >
                  {message.sender === 'ai' && (
                    <motion.div 
                      className="w-8 h-8 mr-2 self-end mb-1"
                      initial={{ scale: 0 }}
                      animate={{ scale: 1, rotate: [0, -10, 10, 0] }}
                      transition={{ delay: 0.1 * (index % 5) + 0.2 }}
                    >
                      <Lottie
                        loop={false}
                        animationData={robotIdleAnimation}
                        play
                        style={{ width: 40, height: 40 }}
                      />
                    </motion.div>
                  )}
                  <motion.div 
                    className={`max-w-[80%] px-4 py-3 rounded-lg ${
                      message.sender === 'user' 
                        ? 'bg-blue-600 text-white rounded-br-none' 
                        : 'bg-white border border-gray-200 text-gray-800 rounded-bl-none'
                    }`}
                    whileHover={{ scale: 1.02 }}
                  >
                    {message.text}
                  </motion.div>
                </motion.div>
              ))}
              
              {/* AI typing indicator */}
              {isTyping && (
                <motion.div
                  className="flex mb-4 justify-start items-end"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                >
                  <motion.div className="w-8 h-8 mr-2 mb-1">
                    <Lottie
                      loop={true}
                      play
                      style={{ width: 40, height: 40 }}
                    />
                  </motion.div>
                  <div className="bg-white border border-gray-200 px-4 py-3 rounded-lg rounded-bl-none">
                    <div className="flex space-x-1">
                      <motion.div 
                        className="w-2 h-2 bg-blue-400 rounded-full"
                        animate={{ y: [0, -5, 0] }}
                        transition={{ duration: 0.6, repeat: Infinity }}
                      />
                      <motion.div 
                        className="w-2 h-2 bg-blue-400 rounded-full"
                        animate={{ y: [0, -5, 0] }}
                        transition={{ duration: 0.6, repeat: Infinity, delay: 0.2 }}
                      />
                      <motion.div 
                        className="w-2 h-2 bg-blue-400 rounded-full"
                        animate={{ y: [0, -5, 0] }}
                        transition={{ duration: 0.6, repeat: Infinity, delay: 0.4 }}
                      />
                    </div>
                  </div>
                </motion.div>
              )}
              
              <div ref={messagesEndRef} />
            </div>
            
            {/* Message input */}
            <form 
              onSubmit={handleSendMessage}
              className="px-4 py-3 border-t border-gray-200 flex items-center"
            >
              <motion.input
                type="text"
                placeholder="Type your message..."
                className="w-full px-4 py-2 border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent pr-10"
                value={input}
                onChange={(e) => setInput(e.target.value)}
              />
              <motion.button
                type="submit"
                className="ml-2 bg-blue-600 text-white rounded-full p-2"
                whileHover={{ scale: 1.1, backgroundColor: "#2563eb" }}
                whileTap={{ scale: 0.9, rotate: 15 }}
                disabled={!input.trim()}
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                </svg>
              </motion.button>
            </form>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default AIAssistant;
