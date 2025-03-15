// src/components/MentorProfile.jsx
import { Link } from 'react-router-dom';
import React from 'react';

const MentorProfile = ({ mentor }) => {
  const { id, name, avatar, title, company, expertise, bio, availability } = mentor;

  return (
    <div className="bg-white rounded-xl shadow-md hover:shadow-lg transition-shadow overflow-hidden flex flex-col h-full border border-gray-200">
      <div className="p-6 flex flex-col h-full">
        {/* Mentor Header */}
        <div className="flex flex-col items-center mb-6 text-center">
          <div className="w-24 h-24 bg-gray-100 rounded-full overflow-hidden mb-4">
            <img src={avatar} alt={name} className="w-full h-full object-cover" />
          </div>
          <h3 className="text-xl font-semibold text-gray-900">{name}</h3>
          <p className="text-gray-600 text-sm">{title} at {company}</p>
        </div>

        {/* Expertise Section */}
        <div className="mb-4">
          <h4 className="text-sm font-medium text-gray-700 mb-2">Expertise:</h4>
          <div className="flex flex-wrap gap-2 justify-center">
            {expertise.map((skill, index) => (
              <span
                key={index}
                className="bg-blue-100 text-blue-700 text-xs px-3 py-1 rounded-full"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>

        {/* Bio Section */}
        <p className="text-gray-600 text-sm mb-4 flex-grow">{bio}</p>

        {/* Availability Section */}
        <div className="mb-6">
          <h4 className="text-sm font-medium text-gray-700 mb-2">Availability:</h4>
          <div className="bg-green-100 text-green-700 text-sm p-2 rounded text-center">
            {availability}
          </div>
        </div>

        {/* Request Mentorship Button */}
        <div className="mt-auto pt-4 border-t border-gray-200 flex justify-center">
          <Link
            to={`/mentorship/request/${id}`}
            className="bg-blue-600 text-white py-2 px-4 rounded-lg font-medium text-sm hover:bg-blue-700 transition-colors w-full text-center"
          >
            Request Mentorship
          </Link>
        </div>
      </div>
    </div>
  );
};

export default MentorProfile;
