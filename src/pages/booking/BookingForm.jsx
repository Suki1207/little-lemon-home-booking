import React, { useState } from "react";
import PropTypes from "prop-types";

const BookingForm = ({ availableTimes, dispatch }) => {
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
      <form style={{ display: "grid", maxWidth: "200px", gap: "20px" }}>
        <label htmlFor="res-date">Choose date</label>
        <input type="date" id="res-date" value={date} onChange={handleChange} />
        <label htmlFor="res-time">Choose time</label>
        <select id="res-time" value={time} onChange={handleChange}>
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
        />
        <label htmlFor="occasion">Occasion</label>
        <select id="occasion" value={occasion} onChange={handleChange}>
          <option>Birthday</option>
          <option>Anniversary</option>
        </select>
        <input type="submit" value="Make Your reservation" />
      </form>
    </>
  );
};

BookingForm.propTypes = {
  availableTimes: PropTypes.arrayOf(PropTypes.string).isRequired,
  dispatch: PropTypes.func.isRequired,
};

export default BookingForm;
