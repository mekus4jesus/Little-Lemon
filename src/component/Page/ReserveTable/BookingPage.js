// BookingPage.js

import BookingForm from './BookingForm';
import ReserveHeaderImg from '../../../assets/img/restaurant.jpg'

const BookingPage = () => {
  const handleBookingSubmit = (formData) => {
    // Handle form submission here, e.g., send data to server
    console.log('Form submitted with data:', formData);
  };

  return (
    <div>
      <div className="ReserveHeader">
        <img src={ReserveHeaderImg} alt='Restuarant' />
      </div>
      <div className="Booking grid-adjustable-columns">
      <h1>Book your appointment</h1>
      <p>Please fill out the form below to book your appointment.</p>
      <div className="FormClass">
      <BookingForm onSubmit={handleBookingSubmit} />
      </div>
      </div>
     
    </div>
  );
};

export default BookingPage;
