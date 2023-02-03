import React from 'react';
import ReservationForm from "./components/Form.js";
import { useReducer } from "react";
import { fetchAPI } from "./BookingsAPI.js";
import './styles/style.css';

export function BookingForm() {
  function updateTimes(date) {
    return fetchAPI(date);
  }
  const output = fetchAPI(new Date());

  const [availableTimes, dispatch] = useReducer(updateTimes, output);

  return (
    <>
      <div className='wrapper'>
        <ReservationForm availableTimes={availableTimes} updateTimes={dispatch} />
      </div>
    </>
  );
}
export default BookingForm;