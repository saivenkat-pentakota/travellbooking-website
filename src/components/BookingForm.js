import React, { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import "./BookingForm.css";
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import { FaCaretDown } from 'react-icons/fa';

function BookingForm() {
  const initialState = {
    checkIn: "",
    checkOut: "",
    rooms: 1,
    firstname: "",
    lastname: "",
    email: "",
    phone: "",
    adults: 1,
    children: 0,
  };

  const [formData, setFormData] = useState(initialState);
  const [showCheckInCalendar, setShowCheckInCalendar] = useState(false);
  const [showCheckOutCalendar, setShowCheckOutCalendar] = useState(false);

  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    if (location.state) {
      setFormData((prevData) => ({
        ...prevData,
        checkIn: location.state.checkIn || "",
        checkOut: location.state.checkOut || "",
        rooms: location.state.rooms || 1,
      }));
    }
  }, [location.state]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]:
        name === "rooms" || name === "adults" || name === "children"
          ? Math.max(0, +value)
          : value,
    }));
  };

  const handleRoomChange = (increment) => {
    setFormData((prev) => ({
      ...prev,
      rooms: Math.max(1, prev.rooms + increment),
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const { firstname, lastname, email, phone, checkIn, checkOut } = formData;

    if (!firstname || !lastname || !email || !phone) {
      alert("Please fill in all required fields.");
      return;
    }

    if (new Date(checkIn) >= new Date(checkOut)) {
      alert("Check-Out date must be after Check-In date.");
      return;
    }

    // Calculate total price (dummy logic for now)
    // const totalPrice = formData.rooms * 1000 + formData.adults * 500 + formData.children * 300;

    navigate("/booking-details", { state: { ...formData } });
  };

  // Function to format the date as "1/Jan/2025"
  const formatDate = (date) => {
    const options = { day: '2-digit', month: 'short', year: 'numeric' };
    return new Intl.DateTimeFormat('en-GB', options).format(date);
  };

  return (
    <div className="booking-container">
      <form className="booking-form" onSubmit={handleSubmit}>
        <div className="user-details">
          <div className="form-row">
            <div className="form-field">
              <label htmlFor="firstname">First Name</label>
              <input
                type="text"
                id="firstname"
                name="firstname"
                placeholder="Enter your first name"
                value={formData.firstname}
                onChange={handleChange}
                required
              />
            </div>
            <div className="form-field">
              <label htmlFor="lastname">Last Name</label>
              <input
                type="text"
                id="lastname"
                name="lastname"
                placeholder="Enter your last name"
                value={formData.lastname}
                onChange={handleChange}
                required
              />
            </div>
            <div className="form-field">
              <label htmlFor="email">Email</label>
              <input
                type="email"
                id="email"
                name="email"
                placeholder="Enter your email"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>
          </div>
          <div className="form-row">
            <div className="form-field">
              <label htmlFor="phone">Phone Number</label>
              <input
                type="tel"
                id="phone"
                name="phone"
                placeholder="Enter your phone number"
                value={formData.phone}
                onChange={handleChange}
                required
              />
            </div>
            <div className="form-field">
              <label htmlFor="adults">Adults</label>
              <input
                type="number"
                id="adults"
                name="adults"
                placeholder="Enter number of adults"
                value={formData.adults}
                onChange={handleChange}
                min="1"
              />
            </div>
            <div className="form-field">
              <label htmlFor="children">Children</label>
              <input
                type="number"
                id="children"
                name="children"
                placeholder="Enter number of children"
                value={formData.children}
                onChange={handleChange}
                min="0"
              />
            </div>
          </div>
        </div>
        <div className="booking-details">
          <div className="details-row">
            <div className="editable-field">
              <label htmlFor="checkIn">Check-In</label>
              <div className="home-calendar-container">
                <button
                  type="button"
                  className="home-calendar-button"
                  onClick={() => setShowCheckInCalendar(!showCheckInCalendar)}
                >
                  {formatDate(formData.checkIn || new Date())}
                </button>
                <FaCaretDown
                  className="home-calendar-icon"
                  onClick={() => setShowCheckInCalendar(!showCheckInCalendar)}
                />
              </div>
              {showCheckInCalendar && (
                <Calendar
                  onChange={(date) => {
                    setFormData((prevData) => ({ ...prevData, checkIn: date }));
                    setShowCheckInCalendar(false);
                  }}
                  value={new Date(formData.checkIn)}
                  minDate={new Date()}
                  formatMonth={(locale, date) =>
                    new Intl.DateTimeFormat(locale, { month: 'short' }).format(date)
                  }
                />
              )}
            </div>
            <div class="vl"></div>
            <div className="editable-field">
              <label htmlFor="checkOut">Check-Out</label>
              <div className="home-calendar-container">
                <button
                  type="button"
                  className="home-calendar-button"
                  onClick={() => setShowCheckOutCalendar(!showCheckOutCalendar)}
                >
                  {formatDate(formData.checkOut || new Date())}
                </button>
                <FaCaretDown
                  className="home-calendar-icon"
                  onClick={() => setShowCheckOutCalendar(!showCheckOutCalendar)}
                />
              </div>
              {showCheckOutCalendar && (
                <Calendar
                  onChange={(date) => {
                    setFormData((prevData) => ({ ...prevData, checkOut: date }));
                    setShowCheckOutCalendar(false);
                  }}
                  value={new Date(formData.checkOut)}
                  minDate={new Date(formData.checkIn.getTime() + 86400000)} // Ensure check-out is after check-in
                  formatMonth={(locale, date) =>
                    new Intl.DateTimeFormat(locale, { month: 'short' }).format(date)
                  }
                />
              )}
            </div>
            <div class="vl"></div>
            <div className="editable-field">
              <label>Rooms</label>
              <div className="room-controls">
                <button type="button" onClick={() => handleRoomChange(-1)}>
                  -
                </button>
                <span>{formData.rooms}</span>
                <button type="button" onClick={() => handleRoomChange(1)}>
                  +
                </button>
              </div>
            </div>
            <div className="button-wrapper">
              <button type="submit" className="pay-now-button">
                <span className="button-text">
                  <span className="currency-symbol">₹</span> 12,430
                </span>
                <span className="arrow-symbol">→</span>
              </button>
              <p className="button-description">Click to pay token amount</p>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
}

export default BookingForm;
