// src/pages/PitchDesk.jsx
import { useState } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import React from 'react'

const PitchDesk = () => {
  const [file, setFile] = useState(null);
  const [feedback, setFeedback] = useState(null);

  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you would typically send the file to your backend
    // For demo purposes, we'll just set some mock feedback
    setFeedback({
      score: 8.5,
      strengths: ['Clear value proposition', 'Strong market analysis'],
      improvements: ['Expand on financial projections', 'Add more details about the team'],
    });
  };

  return (
    <div className="flex flex-col min-h-screen bg-white">
    <Navbar />
    
    <main className="flex-grow py-16">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-extrabold text-gray-900 mb-4">Pitch Deck AI Analyzer</h1>
          <p className="text-xl text-gray-600">
            Upload your pitch deck and get instant AI-powered feedback to fine-tune your presentation.
          </p>
        </div>
        
        {/* Upload Form */}
        <div className="bg-gray-50 p-8 rounded-2xl shadow-md mb-8">
          <form onSubmit={handleSubmit}>
            <div className="mb-6">
              <label
                htmlFor="pitch-deck"
                className="block text-lg font-semibold text-gray-700 mb-3"
              >
                Upload your pitch deck (PDF format):
              </label>
              <input
                type="file"
                id="pitch-deck"
                accept=".pdf"
                onChange={handleFileChange}
                className="block w-full text-sm text-gray-500
                  file:mr-4 file:py-2 file:px-4
                  file:rounded-lg file:border-0
                  file:text-sm file:font-semibold
                  file:bg-blue-50 file:text-blue-700
                  hover:file:bg-blue-100"
              />
            </div>
            <button
              type="submit"
              className={`w-full px-6 py-3 font-medium text-lg rounded-lg ${
                file
                  ? 'bg-blue-600 text-white hover:bg-blue-700 transition-colors'
                  : 'bg-gray-300 text-gray-500 cursor-not-allowed'
              }`}
              disabled={!file}
            >
              Analyze Pitch Deck
            </button>
          </form>
        </div>

        {/* Display Feedback */}
        {feedback && (
          <div className="bg-white p-8 rounded-2xl shadow-md">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">AI Feedback</h2>
            
            {/* Overall Score */}
            <div className="mb-6">
              <p className="text-lg font-semibold text-gray-700 mb-2">Overall Score:</p>
              <div className="text-4xl font-extrabold text-blue-600">{feedback.score}/10</div>
            </div>
            
            {/* Strengths Section */}
            <div className="mb-6">
              <p className="text-lg font-semibold text-gray-700 mb-3">Strengths:</p>
              <ul className="list-disc pl-5">
                {feedback.strengths.map((strength, index) => (
                  <li key={index} className="text-green-600 text-lg">{strength}</li>
                ))}
              </ul>
            </div>

            {/* Areas for Improvement Section */}
            <div>
              <p className="text-lg font-semibold text-gray-700 mb-3">Areas for Improvement:</p>
              <ul className="list-disc pl-5">
                {feedback.improvements.map((improvement, index) => (
                  <li key={index} className="text-red-600 text-lg">
                    {improvement}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        )}
      </div>
    </main>
    
    <Footer />
  </div>
  );
};

export default PitchDesk;
