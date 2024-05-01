// BookingForm.js
import React, { useState } from 'react';

const BookingForm = ({ availableTimes, dispatch, onSubmit }) => {
  const [formData, setFormData] = useState({
    date: '',
    time: availableTimes[0], // Set default time to the first available time
    guests: '1',
    occasion: 'Birthday',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });

    if (name === 'date') {
      // Dispatch action to update availableTimes based on the selected date
      dispatch({ type: 'UPDATE_TIMES', payload: value });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(formData);
  };
  const isFormValid = () => {
    return formData.date.trim() !== '' && formData.time.trim() !== '' && formData.guests.trim() !== '' && formData.occasion.trim() !== '';
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <label htmlFor="res-date">Choose date</label>
        <input
          type="date"
          id="res-date"
          name="date"
          value={formData.date}
          onChange={handleChange}
        />
        <label htmlFor="res-time">Choose time</label>
        <select
          id="res-time"
          name="time"
          value={formData.time}
          onChange={handleChange}
        >
          {availableTimes.map(time => (
            <option key={time}>{time}</option>
          ))}
        </select>
        <label htmlFor="guests">Number of guests</label>
        <input
         aria-label='Guest'
          type="number"
          placeholder="1"
          min="1"
          max="10"
          id="guests"
          name="guests"
          value={formData.guests}
          onChange={handleChange}
        />
        <label htmlFor="occasion">Occasion</label>
        <select
          id="occasion"
          name="occasion"
          value={formData.occasion}
          onChange={handleChange}
        >
          <option>Birthday</option>
          <option>Anniversary</option>
        </select>
        <input disabled={!isFormValid()} type="submit" value="Make Your reservation" />
      </form>
    </>
  );
};

export default BookingForm;
