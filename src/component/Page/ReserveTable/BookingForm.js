// BookingForm.js
import React, { useState } from 'react';

const BookingForm = ({ availableTimes, dispatch, onSubmit }) => {
  const [formData, setFormData] = useState({
    fullName: '',
    email:'',
    date: '',
    time: availableTimes[0], // Set default time to the first available time
    guests: '1',
    occasion: 'Birthday',
  });

  const [fullNameError, setFullNameError] = useState('')
  const [emailError, setEmailError] = useState('')
  const [dateError, setDateError] = useState('')
  const [timeError, setTimeError] = useState('')
  const [guestsError, setGuestsError] = useState('')
  const [ocassionError, setOcassionError] = useState('')


  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });

    const validateEmail = (email) => {
      // Basic validation for demonstration, you may use a library for more robust validation
      const pattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      return pattern.test(email);
    };

    switch (name) {
      case 'fullName':
        setFullNameError(value.trim() === '' ? 'Please You can not leave this space empty' : '')
        break;
       case 'email':
        setEmailError(!validateEmail(value) ? 'Please enter a valid email address' : '');
        break;
        case 'date':
        setDateError(value.trim() === '' ? 'Please select a date' : '')
        break;
        case 'time':
          setTimeError(value.trim() === '' ? 'Please select a time' : '')
          break;
        case 'guests':
          setGuestsError(value.trim() === '' ? 'Please select the number of guests' : '')
          break;
          case 'ocassion':
        setOcassionError(value.trim() === '' ? 'Please select an ocassion' : '')
        break;
      default:
        break;
    }


    if (name === 'date') {
      // Dispatch action to update availableTimes based on the selected date
      dispatch({ type: 'UPDATE_TIMES', payload: value });
    }
  };

 

  const handleSubmit = (e) => {
    e.preventDefault();
     
    if(formData.fullName.trim() === '' ){
     setFullNameError('Please Your FullName is Required')
     return
    }
    if(formData.email.trim() === ''){
       setEmailError('Your Email is Required')
    }
    if(formData.date.trim() === ''){
      setDateError('Please select a date')
    }
    if(formData.time.trim() === ''){
      setTimeError('Select Time')
    }
    if(formData.guests.trim() === ''){
      setGuestsError('Please Select the number of guests')
    }
    if(formData.occasion.trim() === ''){
      setOcassionError('Please Select an Ocassion.')
    }


    onSubmit(formData);

  };
  const isFormValid = () => {
    return formData.date.trim() !== '' && formData.time.trim() !== '' && formData.guests.trim() !== '' && formData.occasion.trim() !== '';
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <label htmlFor='res-fullName'> Your Full Name <sup>*</sup></label>
        <input 
        type='text' 
        id='res-fullName'
        name='fullName'
        placeholder='Your Full Name'
        value={formData.fullName}
        onChange={handleChange}
        required
        />
        {fullNameError && <label htmlFor="error" className="error">{fullNameError}</label>}
        <label htmlFor='res-email' > Your Email <sup>*</sup></label>
        <input 
        type='email' 
        id='res-email'
        name='email'
        placeholder='Your Email'
        value={formData.email}
        onChange={handleChange}
        required
        />
         {emailError && <label htmlFor="error" className="error">{emailError}</label>}
        <label htmlFor="res-date">Choose date<sup>*</sup></label>
        <input
          type="date"
          id="res-date"
          name="date"
          value={formData.date}
          onChange={handleChange}
          required
        />
         {dateError && <label htmlFor="error" className="error">{dateError}</label>}
        <label htmlFor="res-time">Choose time<sup>*</sup></label>
        <select
          id="res-time"
          name="time"
          value={formData.time}
          onChange={handleChange}
          required
        >
          {availableTimes.map(time => (
            <option key={time}>{time}</option>
          ))}
        </select>
        {timeError && <label htmlFor="error" className="error">{timeError}</label>}
        <label htmlFor="guests">Number of guests<sup>*</sup></label>
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
          required
        />
        {guestsError && <label htmlFor="error" className="error">{guestsError}</label>}
        <label htmlFor="occasion">Occasion<sup>*</sup></label>
        <select
          id="occasion"
          name="occasion"
          value={formData.occasion}
          onChange={handleChange}
          required
        >
          <option>Birthday</option>
          <option>Anniversary</option>
        </select>
        {ocassionError && <label htmlFor="error" className="error">{ocassionError}</label>}
        <input disabled={!isFormValid()} type="submit" value="Make Your reservation" />
      </form>
    </>
  );
};

export default BookingForm;
