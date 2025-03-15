// src/pages/Feedback.jsx
import { useState } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const Feedback = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    rating: '',
    feedbackType: '',
    message: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you would typically send the feedback to your backend
    console.log('Feedback submitted:', formData);
    // Reset form or show success message
    alert('Thank you for your feedback!');
    setFormData({
      name: '',
      email: '',
      rating: '',
      feedbackType: '',
      message: '',
    });
  };

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      
      <main className="flex-grow bg-gray-50 py-12">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl font-bold text-secondary-900 mb-4 text-center">We Value Your Feedback</h1>
          <p className="text-lg text-gray-600 mb-8 text-center">
            Help us improve our platform by sharing your thoughts and suggestions.
          </p>
          
          <div className="bg-white p-6 rounded-xl shadow-sm">
            <form onSubmit={handleSubmit}>
            <div className="mb-4">
                <label className="block text-sm font-medium text-gray-700 mb-2" htmlFor="name">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full rounded-md border-gray-300 shadow-sm focus:border-primary-500 focus:ring-primary-500"
                  required
                />
              </div>
              
              <div className="mb-4">
                <label className="block text-sm font-medium text-gray-700 mb-2" htmlFor="email">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full rounded-md border-gray-300 shadow-sm focus:border-primary-500 focus:ring-primary-500"
                  required
                />
              </div>
              
              <div className="mb-4">
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  How would you rate your experience?
                </label>
                <div className="flex space-x-4">
                  {[1, 2, 3, 4, 5].map((rating) => (
                    <label key={rating} className="flex items-center">
                      <input
                        type="radio"
                        name="rating"
                        value={rating}
                        checked={formData.rating === rating.toString()}
                        onChange={handleChange}
                        className="focus:ring-primary-500 h-4 w-4 text-primary-600 border-gray-300"
                      />
                      <span className="ml-2">{rating}</span>
                    </label>
                  ))}
                </div>
              </div>
              
              <div className="mb-4">
                <label className="block text-sm font-medium text-gray-700 mb-2" htmlFor="feedbackType">
                  What is your feedback about?
                </label>
                <select
                  id="feedbackType"
                  name="feedbackType"
                  value={formData.feedbackType}
                  onChange={handleChange}
                  className="w-full rounded-md border-gray-300 shadow-sm focus:border-primary-500 focus:ring-primary-500"
                  required
                >
                  <option value="">Select a category</option>
                  <option value="general">General Feedback</option>
                  <option value="bug">Bug Report</option>
                  <option value="feature">Feature Request</option>
                  <option value="content">Content Suggestion</option>
                  <option value="other">Other</option>
                </select>
              </div>
              
              <div className="mb-4">
                <label className="block text-sm font-medium text-gray-700 mb-2" htmlFor="message">
                  Your Feedback
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows="4"
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full rounded-md border-gray-300 shadow-sm focus:border-primary-500 focus:ring-primary-500"
                  required
                ></textarea>
              </div>
              
              <button
                type="submit"
                className="w-full bg-primary-600 text-white px-4 py-2 rounded-lg hover:bg-primary-700 transition-colors"
              >
                Submit Feedback
              </button>
            </form>
          </div>
          
          <div className="mt-8 bg-primary-50 border-l-4 border-primary-500 p-4 rounded-md">
            <div className="flex">
              <div className="flex-shrink-0">
                <svg className="h-5 w-5 text-primary-400" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
                </svg>
              </div>
              <div className="ml-3">
                <p className="text-sm text-primary-700">
                  Your feedback is important to us. We review all submissions and use them to improve our platform.
                </p>
              </div>
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default Feedback;
