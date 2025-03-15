

import { useState, useRef, useEffect } from 'react';

import { motion  , AnimatePresence } from 'framer-motion';
import React from 'react';
// Import Lottie for more complex animations
import Lottie from 'react-lottie-player';
// We'll use these animation JSONs (you'll need to download these)
import robotIdleAnimation from '../assets/animations/Animation - 1742058716674.json';


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
  const [robotState, setRobotState] = useState('idle'); // 'idle', 'talking', 'thinking', 'wave'
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
  
  // Suggestions with emoji themes
  const suggestions = [
    { text: "Find government schemes", icon: "🏛️" },
    { text: "Connect with investors", icon: "💰" },
    { text: "How to create a pitch deck", icon: "📊" },
    { text: "Discover startup events", icon: "🎪" }
  ];

  // Auto-scroll to bottom of messages
  useEffect(() => {
    if (messagesEndRef.current) {
      messagesEndRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  }, [messages]);

  // Handle sending a new message
  const handleSendMessage = (e) => {
    e.preventDefault();
    if (!input.trim()) return;
    
    // Add user message to chat
    setMessages(prev => [...prev, { text: input, sender: 'user' }]);
    setInput('');
    
    // Simulate AI thinking
    setIsTyping(true);
    setRobotState('thinking');
    
    // Simulate AI response (in a real app, this would call your AI API)
    setTimeout(() => {
      setIsTyping(false);
      setRobotState('talking');
      setMessages(prev => [
        ...prev, 
        { 
          text: generateResponse(input), 
          sender: 'ai'
        }
      ]);
      
      // Return to idle state after "speaking"
      setTimeout(() => setRobotState('idle'), 1500);
    }, 1500);
  };

  // Generate response based on input
  const generateResponse = (userInput) => {
    const input = userInput.toLowerCase();
    
    if (input.includes('investor') || input.includes('funding')) {
      return "Our investor directory has 500+ active investors. Would you like me to help you filter them based on your industry or funding stage?";
    } else if (input.includes('government') || input.includes('scheme') || input.includes('grant')) {
      return "StartupHub has information on 100+ government schemes. You can explore them in the Resources section, or I can help you find ones specific to your needs.";
    } else if (input.includes('pitch') || input.includes('deck')) {
      return "Our Pitch Desk tool can help you create a professional pitch deck with AI-powered feedback. Would you like to try it now?";
    } else if (input.includes('event') || input.includes('workshop')) {
      return "We have several upcoming events for startups. You can view the full calendar in the Events section. Any particular type of event you're looking for?";
    } else if (input.includes('hello') || input.includes('hi')) {
      return "Hello! I'm your AI assistant for navigating StartupHub. What are you looking to accomplish today?";
    } else {
      return "Thanks for your question. I can help you with finding resources, connecting with investors, creating pitch decks, and discovering events. Could you provide more details about what you need?";
    }
  };

  // Handle clicking a suggestion button
  const handleSuggestionClick = (suggestion) => {
    setMessages(prev => [...prev, { text: suggestion.text, sender: 'user' }]);
    
    // Simulate AI thinking
    setIsTyping(true);
    setRobotState('thinking');
    
    // Simulate AI response
    setTimeout(() => {
      setIsTyping(false);
      setRobotState('talking');
      setMessages(prev => [
        ...prev, 
        { 
          text: generateResponse(suggestion.text), 
          sender: 'ai'
        }
      ]);
      
      // Return to idle state after "speaking"
      setTimeout(() => setRobotState('idle'), 1500);
    }, 1500);
  };

  // Get the appropriate robot animation based on state
  const getRobotAnimation = () => {
    switch (robotState) {
      case 'talking':
        return console.log('wave');
      case 'thinking':
        return console.log('wave');
      case 'wave':
        return console.log('wave');
      default:
        return robotIdleAnimation;
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
                animationData={getRobotAnimation()}
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
                    animationData={getRobotAnimation()}
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
            
            {/* Chat messages with improved animation */}
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
              
              {/* AI typing indicator with character */}
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
            
            {/* Suggestion chips with icons */}
            <div className="px-4 py-2 border-t border-gray-200 flex gap-2 overflow-x-auto">
              {suggestions.map((suggestion, index) => (
                <motion.button
                  key={index}
                  className="whitespace-nowrap py-1 px-3 bg-blue-50 text-blue-600 rounded-full text-sm border border-blue-100 hover:bg-blue-100 transition flex items-center"
                  onClick={() => handleSuggestionClick(suggestion)}
                  whileHover={{ scale: 1.05, backgroundColor: "#dbeafe" }}
                  whileTap={{ scale: 0.95 }}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ 
                    delay: 0.1 * index,
                    type: "spring",
                    stiffness: 200
                  }}
                >
                  <span className="mr-1">{suggestion.icon}</span>
                  {suggestion.text}
                </motion.button>
              ))}
            </div>
            
            {/* Message input with animated focus state */}
            <form 
              onSubmit={handleSendMessage}
              className="px-4 py-3 border-t border-gray-200 flex items-center"
            >
              <motion.div 
                className="flex-grow relative"
                initial={false}
                whileFocus={{ scale: 1.02 }}
              >
                <motion.input
                  type="text"
                  placeholder="Type your message..."
                  className="w-full px-4 py-2 border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent pr-10"
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                />
                {input.length === 0 && (
                  <motion.div 
                    className="absolute right-3 top-2.5 text-gray-400"
                    initial={{ opacity: 0.5 }}
                    animate={{ opacity: [0.5, 1, 0.5] }}
                    transition={{ repeat: Infinity, duration: 2 }}
                  >
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 8h10M7 12h4m1 8l-4-4H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-3l-4 4z" />
                    </svg>
                  </motion.div>
                )}
              </motion.div>
              <motion.button
                type="submit"
                className="ml-2 bg-blue-600 text-white rounded-full p-2"
                whileHover={{ scale: 1.1, backgroundColor: "#2563eb" }}
                whileTap={{ scale: 0.9, rotate: 15 }}
                disabled={!input.trim()}
                animate={input.trim() ? 
                  { scale: [1, 1.05, 1], transition: { duration: 2, repeat: Infinity, repeatType: "mirror" }} 
                  : { scale: 1 }
                }
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
