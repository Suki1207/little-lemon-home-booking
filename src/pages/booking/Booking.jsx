import React, { useReducer } from "react";

import BookingForm from "./BookingForm";

const initialTimes = ["17:00", "18:00", "19:00", "20:00", "21:00", "22:00"];

function updateTimes(state, action) {
  if (action.type === "update") {
    return initialTimes;
  }
  return state;
}

function initializeTimes() {
  return initialTimes;
}

const Booking = () => {
  const [availableTimes, dispatch] = useReducer(
    updateTimes,
    [],
    initializeTimes
  );

  return (
    <>
      <BookingForm availableTimes={availableTimes} dispatch={dispatch} />
    </>
  );
};

export default Booking;
