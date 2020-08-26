import React from "react";
import { Link } from "react-router-dom";
import logo from "../assets/images/logo.svg";

const Hero = () => {
  return (
    <div className="hero-container">
      <div className="logo-container">
        <Link to="/">
          <img src={logo} />
        </Link>
      </div>
      <div className="row banner">
        <h2>UEFA Champions League</h2>
      </div>
    </div>
  );
};

export default Hero;
