import React, { useState } from 'react'
import ReserveHead from '../../../../assets/img/restaurant.jpg'

export const Form = () => {
  const [date, setDate] = useState(new Date())
  const [time, setTime] = useState('17:00')
  const [number, setNumber] = useState(1)
  const [occasion, setOccasion] = useState("Birthday")
  const [isFormValid, setIsFormValid] = useState(false)

  const checkFormVallidity = () => {
    setIsFormValid 
    (date && time && number && occasion)
  }
  const handleSubmit = (e) => {
    e.preventDefault()
    setDate(new Date())
    setTime("17:00")
    setNumber(1)
    setOccasion("Birthday")
  }

  return (
    <>
     <div className="reserveHeader">
     <img src={ReserveHead} alt='restuarant'/>
     </div>
    <div className='Form grid-adjustable-columns'>
      <form action="" className='FormClass' onSubmit={handleSubmit}>
          <label for="res-date">Choose date</label>
          <input 
          type="date" 
          id="res-date"
          value={date}
          onChange={(e) =>  setDate(new Date(e.target.value))}
          />
          <label for="res-time">Choose time</label>
          <select id="res-time"
          value={time}
          onChange={(e) => setTime(e.target.value)}
          >
              <option>17:00</option>
              <option>18:00</option>
              <option>19:00</option>
              <option>20:00</option>
              <option>21:00</option>
              <option>22:00</option>
          </select>
          <label for="guests">Number of guests</label>
          <input 
          type="number" 
          placeholder="1" 
          min="1" 
          max="10"
          id="guests"
          value={number}
          onChange={(e) => setNumber(Number(e.target.value))}
            />
          <label for="occasion">Occasion</label>
          <select id="occasion"
          value={occasion}
          onChange={(e) => setOccasion(e.target.value)}
          >
              <option>Birthday</option>
              <option>Anniversary</option>
          </select>
          <input
            type="submit" 
            disabled={!isFormValid}
            value="Make Your reservation" 
            onClick={checkFormVallidity}
            />
          </form>
    </div>
    </>
  )
}


