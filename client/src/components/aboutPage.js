import React from "react";
import Header from "./header";
import Footer from "./footer";
import logo from "../assets/images/logo.svg";
import { Link } from "react-router-dom";
import aboutImg from "../assets/images/about.jpeg";

const AboutPage = () => {
  return (
    <>
      <div className="flex header-top">
        <Header />
        <div className="about-page-wrapper">
          <div className="logo-container"></div>
          <div className="container mw">
            <h1>About</h1>

            <div className="row">
              <div className="title">
                <h2>2020/21 Season</h2>
              </div>
            </div>
            <div className="row banner-img">
              <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTLJPqyfW2CT2CzI_W3DxeCPhpD0WpGJSGiNA&s"
                alt=""
              />
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default AboutPage;
