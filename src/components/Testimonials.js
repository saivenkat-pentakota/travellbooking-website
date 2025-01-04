import React from 'react';
import './Testimonials.css';
import homepageImage from '../images/homepage-img.jpg';
import profileImage from '../images/profile-icon.avif';

function Testimonials() {
  const testimonials = [
    {
      name: 'Arjun Raghav',
      review:
        'I am writing this after reflecting on my one month stay with Bricabin in Ladakh. Right from picking us up at the airport to dropping us back there after a month, Urgan was very responsible and took good care of my friends and me. read more',
    },
    {
      name: 'Anand Solanki', 
      review:
        'I am writing this after reflecting on my one month stay with Bricabin in Ladakh. Right from picking us up at the airport to dropping us back there after a month, Urgan was very responsible and took good care of my friends and me. read more',
    },
    {
      name: 'Arjun Raghav', 
      review:
        'I am writing this after reflecting on my one month stay with Bricabin in Ladakh. Right from picking us up at the airport to dropping us back there after a month, Urgan was very responsible and took good care of my friends and me. read more',
    },
    {
      name: 'Arjun Raghav',
      review:
        'I am writing this after reflecting on my one month stay with Bricabin in Ladakh. Right from picking us up at the airport to dropping us back there after a month, Urgan was very responsible and took good care of my friends and me. read more',
    },
    {
      name: 'Arjun Raghav',
      review:
        'I am writing this after reflecting on my one month stay with Bricabin in Ladakh. Right from picking us up at the airport to dropping us back there after a month, Urgan was very responsible and took good care of my friends and me. read more',
    },
  ];

  return (
    <div className="testimonials-section">
      <h2>Discover</h2>
      <div className="testimonials-layout">
        <div className="left-column">
          {testimonials.slice(0, 2).map((testimonial, index) => (
            <div key={index} className="testimonial-card">
              <div className="card-header">
                <div className="profile-image">
                  <img src={profileImage} alt={`${testimonial.name}`} />
                </div>
                <div>
                  <h4>{testimonial.name}</h4>
                  <div className="rating">⭐⭐⭐⭐</div>
                </div>
              </div>
              <p>{testimonial.review}</p>
            </div>
          ))}
        </div>
        <div className="image-container">
          <img src={homepageImage} alt="Ladakh landscape" />
        </div>
        <div className="right-column">
          {testimonials.slice(2, 4).map((testimonial, index) => (
            <div key={index} className="testimonial-card">
              <div className="card-header">
                <div className="profile-image">
                  <img src={profileImage} alt={`${testimonial.name}`} />
                </div>
                <div>
                  <h4>{testimonial.name}</h4>
                  <div className="rating">⭐⭐⭐⭐</div>
                </div>
              </div>
              <p>{testimonial.review}</p>
            </div>
          ))}
        </div>
      </div>
      <div className="bottom-card">
        <div className="testimonial-card">
          <div className="card-header">
            <div className="profile-image">
              <img src={profileImage} alt={`${testimonials[4].name}`} />
            </div>
            <div>
              <h4>{testimonials[4].name}</h4>
              <div className="rating">⭐⭐⭐⭐</div>
            </div>
          </div>
          <p>{testimonials[4].review}</p>
        </div>
      </div>
    </div>
  );
}

export default Testimonials;
