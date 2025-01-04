import React from 'react';
import { FaWifi, FaCar, FaHome, FaBicycle, FaUtensils, FaPlane, FaBriefcase, FaShoppingCart } from 'react-icons/fa';
import './Services.css';

function Services() {
  const services = [
    { icon: <FaWifi />, title: 'High Speed Internet', description: 'Optical fiber connections provided in not only your cabins but rather to all of the BriSphere scenic working spaces and dining areas.' },
    { icon: <FaUtensils />, title: 'Healthy Meals', description: 'A healthy breakfast and pleasant dinner will be serviced at your space every single day for your entire duration of stay with the option of paid order within BriSphere.' },
    { icon: <FaHome />, title: 'Homely Stay', description: 'Designed for working professionals with spacious interiors, comfortable beds, and sleekly attached kitchens are some of the comforts provided in your space.' },
    { icon: <FaCar />, title: 'Transportation', description: 'Transportation services provided for easy and convenient travel to and from BriSphere scenic working spaces and dining areas.' },
    { icon: <FaBicycle />, title: 'Food Delivery', description: 'Healthy meals delivered to your cabins or BriSphere scenic working spaces.' },
    { icon: <FaPlane />, title: 'Tourism', description: 'Explore nearby attractions and tourist activities organized by BriSphere for a memorable stay.' },
    { icon: <FaBriefcase />, title: 'Job', description: 'Professional opportunities and networking available at BriSphere scenic working spaces.' },
    { icon: <FaCar />, title: 'Rental Services', description: 'Hotel services provided for easy and convenient travel to and from BriSphere scenic working spaces and dining areas.' },
    { icon: <FaShoppingCart />, title: 'Online Shop', description: 'Access an online shop for essentials and local specialties, delivered to your location.' },
  ];

  return (
    <div className="services">
      <h2>Services</h2>
      <div className="services-container">
        {services.map((service, index) => (
          <div className="service-card" key={index}>
            <div className="service-icon">{service.icon}</div>
            <h3>{service.title}</h3>
            <p>{service.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Services;
