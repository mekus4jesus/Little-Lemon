// Main.js
import BookingForm from './BookingForm';
import ReserveHeaderImg from '../../../assets/img/restaurant.jpg'
import { useReducer } from 'react';

const Main = () => {
  // Reducer function to handle state changes for availableTimes
  const availableTimesReducer = (state, action) => {
    switch (action.type) {
      case 'UPDATE_TIMES':
        return updateTimes(action.payload);
      default:
        return state;
    }
  };

  // Function to update availableTimes based on the selected date
  const updateTimes = (date) => {
    // For now, return the same available times regardless of the date
    return ['17:00', '18:00', '19:00', '20:00', '21:00', '22:00'];
  };

  // Function to initialize availableTimes state
  const initializeTimes = () => {
    return ['17:00', '18:00', '19:00', '20:00', '21:00', '22:00'];
  };

  // Initialize availableTimes state using useReducer
  const [availableTimes, dispatch] = useReducer(availableTimesReducer, [], initializeTimes);

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
          <BookingForm 
            availableTimes={availableTimes} 
            dispatch={dispatch} 
            onSubmit={handleBookingSubmit} 
          />
        </div>
      </div>
    </div>
  );
};

export default Main;
