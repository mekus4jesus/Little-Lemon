// Main.js
import BookingForm from './BookingForm';
import ReserveHeaderImg from '../../../assets/img/restaurant.jpg'
import { useReducer, useState } from 'react';
import { fetchAPI, submitAPI } from '../../API/api';
import { useNavigate } from 'react-router-dom';

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

   // Function to initialize availableTimes state
   const initializeTimes = () => {
    const today = new Date()
    const availableTimes = fetchAPI(today)
    return availableTimes
  };

  const navigate = useNavigate()
  const [formData, setFormData] = useState(null); // Initialize formData state


  // Function to update availableTimes based on the selected date
  const updateTimes = (date) => {
    // For now, return the same available times regardless of the date
    const availableTimes = fetchAPI(date);
  return availableTimes;
  };

 

  // Initialize availableTimes state using useReducer
  const [availableTimes, dispatch] = useReducer(availableTimesReducer, [], initializeTimes);

  const submitForm = (formData) => {
    const isBookingSuccessful = submitAPI(formData);
    if (isBookingSuccessful) {
      setFormData(formData); // Set form data in state
      navigate('/confirmed', { state: { formData } }); 
      // Pass form data in location state
      document.title = 'Confirmation'
    } else {
      // Handle booking submission failure
      document.title = ''
    }
  };

  return (
    <div>
      <div className="ReserveHeader">
        <img src={ReserveHeaderImg} alt='Restuarant' />
      </div>
      <div className="Booking grid-adjustable-columns">
        <h1>Book Now</h1>
        <p>Please fill out the form below to book your reservation.</p>
        <div className="FormClass">
          <BookingForm 
            availableTimes={availableTimes} 
            dispatch={dispatch} 
            onSubmit={submitForm} 
          />
        </div>
      </div>
    </div>
  );
};

export default Main;
