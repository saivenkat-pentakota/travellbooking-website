import React from 'react';
import { useLocation, Link } from 'react-router-dom';
import './BookingDetails.css';

function BookingDetails() {
  const location = useLocation();
  const bookingData = location.state || {};

  const {
    firstname = 'N/A',
    lastname = 'N/A',
    phone = 'N/A',
    email = 'N/A',
    adults = 0,
    children = 0,
    checkIn,
    checkOut,
    rooms = 0,
  } = bookingData;

  const formatDate = (date) => {
    try {
      const options = { year: '2-digit', month: 'short', day: 'numeric' };
      return new Date(date).toLocaleDateString('en-GB', options); // '1 Jan 2025'
    } catch {
      return 'Invalid Date';
    }
  };

  return (
    <div className="booking-summary-container">
      <div className="user-info">
        <div>
          <div className="name">
            <h3>{firstname}</h3>
            <h3>{lastname}</h3>
          </div>
          <p>+91 - {phone}</p>
          <p>{email}</p>
          <p>
            {adults} Adults and {children} Children
          </p>
        </div>
        <div className="order-status">
          <div className="status-icon">
            <i className="checkmark">✔</i>
          </div>
          <div>
            <p className='order-complete' style={{fontSize:'24px',fontWeight:'bold',color:'black',marginBottom:'10px'}}>Order Complete</p>
            <p className='have-questions' style={{fontSize:'16px',fontWeight:'600'}}>
              have questions? 
            </p>
            <p><Link to="/contact">contact us</Link></p>
          </div>
        </div>
      </div>

      <div className="booking-details-summary">
        <div className="details-row">
          <div className="detail">
            <h4>CHECK-IN</h4>
            <p>{formatDate(checkIn)}</p>
          </div>
          <div class="vl"></div>
          <div className="detail">
            <h4>CHECK-OUT</h4>
            <p>{formatDate(checkOut)}</p>
          </div>
          <div class="vl"></div>
          <div className="detail">
            <h4>ROOMS</h4>
            <p>{rooms}</p>
          </div>
          <div className="amount-button">
            <Link to="/payment">
              <button>
                <span className="amount-button-text">
                  <span className="currency-symbol">₹</span> 12,430
                </span>
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default BookingDetails;
