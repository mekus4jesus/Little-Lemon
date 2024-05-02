// ConfirmedBooking.js
import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import Logo from '../../assets/img/Logo .svg'

const ConfirmedBooking = () => {
  const location = useLocation();
  const formData = location.state?.formData; // Access formData from location State 
 
  const handleLinkClick = () => {
    document.title = 'Little Lemon'; // Set your default title here
  };
  return (
    <div className='success grid-adjustable-columns'>
      <Link to='/' onClick={handleLinkClick}>
        <img src={Logo} alt='Logo' />
      </Link>
      <h1>Booking Confirmed</h1>
      <p>Your booking has been confirmed!</p>
      {formData && (
        <div>
          <h2>Booking Details</h2>
          <p>Full Name: {formData.fullName}</p>
          <p>Email: {formData.email}</p>
          <p>Date: {formData.date}</p>
          <p>Time: {formData.time}</p>
          <p>{formData.guests === 1 ? "Guest":"Guests:"}{formData.guests}</p>
          <p>Guest: {formData.guests}</p>
          <p>Occassion: {formData.occasion}</p>
          {/* Display other form data fields as needed */}
        </div>
      )}
    </div>
  );
};

export default ConfirmedBooking;
