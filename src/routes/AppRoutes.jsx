// src/routes/AppRoutes.jsx
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from '../pages/Home';
import Resources from '../pages/Resources';
import Startups from '../pages/Startups';
import Investors from '../pages/Investors';
import Mentorship from '../pages/Mentorship';
import PitchDesk from '../pages/PitchDesk';
import Events from '../pages/Events';
import Feedback from '../pages/Feedback';
import React from 'react'
import ResourceDetails from '../pages/ResourceDetails';
import Login from '../pages/Login';
import Signup from '../pages/Signup';


const AppRoutes = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />
        <Route path="/resources" element={<Resources />} />
        <Route path="/resources/:id" element={<ResourceDetails />} />
        <Route path="/startups" element={<Startups />} />
        <Route path="/investors" element={<Investors />} />
        <Route path="/mentorship" element={<Mentorship />} />
        <Route path="/pitch-desk" element={<PitchDesk />} />
        <Route path="/events" element={<Events />} />
        <Route path="/feedback" element={<Feedback />} />

      </Routes>
    </Router>
  );
};

export default AppRoutes;
