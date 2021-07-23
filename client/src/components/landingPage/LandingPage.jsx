import React from "react";
import { Link } from "react-router-dom";
import "./LandingPage.css";

export default function LandingPage() {
  return (
    <div className="container">
      <h1>PI VIDEOGAMES</h1>
      <Link to="/home">
        <button type="submit">Start</button>
      </Link>
    </div>
  );
}
