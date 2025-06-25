import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Home from "./pages/home/Home";
import Booking from "./pages/booking/Booking";

import "./App.css";

function App() {
  return (
    <>
      <Router basename="/little-lemon-home-booking">
        <Routes>
          <Route path="/home" element={<Home />} />
          <Route path="/booking" element={<Booking />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
