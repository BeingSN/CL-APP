import React, { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import logo from "../assets/images/logo.svg";
import { gsap } from "gsap";

const Hero = () => {
  let title = useRef(null);

  useEffect(() => {
    gsap.from([title], 0.8, {
      delay: 0.8,
      ease: "power3.out",
      y: 34,
      stagger: {
        amount: 0.15,
      },
    });
  });

  return (
    <div className="hero-container">
      <div className="logo-container">
        <Link to="/">
          <img src={logo} />
        </Link>
      </div>
      <div className="row banner">
        <h2 ref={(el) => (title = el)} className="title">
          UEFA Champions League
        </h2>
      </div>
    </div>
  );
};

export default Hero;
