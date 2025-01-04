import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Home.css';
import { FaFacebook, FaInstagram, FaCaretDown } from 'react-icons/fa'; 
import HomePageImage from '../images/homepage-img.jpg';
import Services from '../components/Services';
import Footer from '../components/Footer';
import Testimonials from '../components/Testimonials';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';

function Home() {
  const [rooms, setRooms] = useState(1);
  const [checkIn, setCheckIn] = useState(new Date());
  const [checkOut, setCheckOut] = useState(() => {
    const tomorrow = new Date();
    tomorrow.setDate(tomorrow.getDate() + 1);
    return tomorrow;
  });
  const [showCheckInCalendar, setShowCheckInCalendar] = useState(false);
  const [showCheckOutCalendar, setShowCheckOutCalendar] = useState(false);

  const navigate = useNavigate();

  const handleRoomChange = (increment) => {
    setRooms((prevRooms) => Math.max(1, prevRooms + increment));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Validation
    if (!checkIn || !checkOut) {
      alert('Please select both check-in and check-out dates.');
      return;
    }
    if (checkIn >= checkOut) {
      alert('Check-out date must be later than check-in date.');
      return;
    }

    // Navigate to booking form with state
    navigate('/bookingform', { state: { checkIn, checkOut, rooms } });
  };

  // Function to format the date as "1/Jan/2025"
  const formatDate = (date) => {
    const options = { day: '2-digit', month: 'short', year: 'numeric' };
    return new Intl.DateTimeFormat('en-GB', options).format(date);
  };

  return (
    <>
      <div className="homepage-container">
        {/* Intro Section */}
        <section className="home-intro-section">
          <div className="home-intro-text">
            <h1>Work from <br />Ladakh</h1>
            <p>India's first true digital tourism ecosystem</p>
            <div className="home-social-icons">
              <FaFacebook className="home-social-icon" />
              <FaInstagram className="home-social-icon" />
            </div>
          </div>
          <div className="home-intro-image">
            <img src={HomePageImage} alt="Ladakh Scenery" />
          </div>
        </section>

        {/* Booking Section */}
        <section className="home-booking-section">
          <form className="home-booking-form" onSubmit={handleSubmit}>
            <div className="home-booking-field">
              <label htmlFor="checkin">CHECK-IN</label>
              <div className="home-calendar-container">
                <button
                  type="button"
                  className="home-calendar-button"
                  onClick={() => setShowCheckInCalendar(!showCheckInCalendar)}
                >
                  {formatDate(checkIn)} {/* Using the custom formatDate function */}
                </button>
                <FaCaretDown
                  className="home-calendar-icon"
                  onClick={() => setShowCheckInCalendar(!showCheckInCalendar)}
                />
              </div>
              {showCheckInCalendar && (
                <Calendar
                  onChange={(date) => {
                    setCheckIn(date);
                    setShowCheckInCalendar(false);
                  }}
                  value={checkIn}
                  minDate={new Date()}
                  formatMonth={(locale, date) =>
                    new Intl.DateTimeFormat(locale, { month: 'short' }).format(date)
                  }
                />
              )}
            </div>
            <div class="vl"></div>
            <div className="home-booking-field">
              <label htmlFor="checkout">CHECK-OUT</label>
              <div className="home-calendar-container">
                <button
                  type="button"
                  className="home-calendar-button"
                  onClick={() => setShowCheckOutCalendar(!showCheckOutCalendar)}
                >
                  {formatDate(checkOut)}
                </button>
                <FaCaretDown
                  className="home-calendar-icon"
                  onClick={() => setShowCheckOutCalendar(!showCheckOutCalendar)}
                />
              </div>
              {showCheckOutCalendar && (
                <Calendar
                  onChange={(date) => {
                    setCheckOut(date);
                    setShowCheckOutCalendar(false);
                  }}
                  value={checkOut}
                  minDate={new Date(checkIn.getTime() + 86400000)}
                  formatMonth={(locale, date) =>
                    new Intl.DateTimeFormat(locale, { month: 'short' }).format(date)
                  }
                />
              )}
            </div>
            <div class="vl"></div>
            <div className="home-booking-field home-room-selector">
              <label>ROOMS</label>
              <div className="home-room-controls">
                <button type="button" onClick={() => handleRoomChange(-1)}>-</button>
                <span>{rooms}</span>
                <button type="button" onClick={() => handleRoomChange(1)}>+</button>
              </div>
            </div>
            <button type="submit" className="home-book-button">BOOK</button>
          </form>
        </section>
      </div>
      <Testimonials />
      <Services />
      <Footer />
    </>
  );
}

export default Home;
