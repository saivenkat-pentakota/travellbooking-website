import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import 'react-datepicker/dist/react-datepicker.css';
import Header from './components/Header';
import ContactUs from './components/ContactUs';
import Home from './pages/Home';
import Footer from './components/Footer';
import BookingForm from './components/BookingForm';
import BookingDetails from './components/BookingDetails';

import './App.css';

function App() {
  return (
    <Router>
      <div>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/bookingform" element={<BookingForm />} />
          <Route path="/booking-details" element={<BookingDetails />} />
          <Route path="/contact" element={<ContactUs/>}/>
        </Routes>
        <Footer/>
      </div>
    </Router>
  );
}

export default App;
