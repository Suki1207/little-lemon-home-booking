import React, { useReducer, useState } from "react";
import { Link } from "react-router-dom";

import Header from "../../components/Header";

import "./Booking.css";

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

  const [date, setDate] = useState("");
  const [time, setTime] = useState("");
  const [guests, setGuests] = useState(1);
  const [occasion, setOccasion] = useState("Birthday");

  const handleChange = (e) => {
    const { id, value } = e.target;
    if (id === "res-date") {
      setDate(value);
      dispatch({ type: "update", date: value });
    } else if (id === "res-time") setTime(value);
    else if (id === "guests") setGuests(value);
    else if (id === "occasion") setOccasion(value);
  };

  return (
    <>
      <Header />
      <section className="booking-section">
        <div className="booking-container">
          <h2>Reserve a Table</h2>
          <p>
            Book your table at Little Lemon and enjoy a unique Mediterranean
            dining experience. Please fill out the form below to make your
            reservation.
          </p>
          <form style={{ display: "grid", maxWidth: "200px", gap: "20px" }}>
            <label htmlFor="res-date">Choose date</label>
            <input
              type="date"
              id="res-date"
              value={date}
              onChange={handleChange}
              aria-required="true"
              aria-label="Choose reservation date"
            />
            <label htmlFor="res-time">Choose time</label>
            <select
              id="res-time"
              value={time}
              onChange={handleChange}
              aria-required="true"
              aria-label="Choose reservation time"
            >
              <option value="" disabled>
                Select time
              </option>
              {availableTimes.map((t) => (
                <option key={t} value={t}>
                  {t}
                </option>
              ))}
            </select>
            <label htmlFor="guests">Number of guests</label>
            <input
              type="number"
              placeholder="1"
              min="1"
              max="10"
              id="guests"
              value={guests}
              onChange={handleChange}
              aria-required="true"
              aria-label="Number of guests"
              aria-describedby="guests-help"
            />
            <label htmlFor="occasion">Occasion</label>
            <select
              id="occasion"
              value={occasion}
              onChange={handleChange}
              aria-label="Select occasion"
            >
              <option>Birthday</option>
              <option>Anniversary</option>
            </select>
            <input type="submit" value="Make Your reservation" />
          </form>
          <Link to="/home" className="back-home-btn">
            Back to Home
          </Link>
        </div>
      </section>
    </>
  );
};

export default Booking;
