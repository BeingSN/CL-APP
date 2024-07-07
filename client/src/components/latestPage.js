import React from "react";
import Header from "./header";
import Footer from "./footer";
import { Link } from "react-router-dom";
import mainImg from "../assets/images/bayern-flag.jpg";

const LatestPage = () => {
  return (
    <>
      <div className="flex header-top">
        <Header />
        <div className="latest-page-wrapper">
          <div className="logo-container"></div>
          <div className="container mw">
            <h1>Latest</h1>

            <div className="row">
              <div className="title">
                <h2>Meet the winners</h2>
                <p className="subheading">Lahore Qalandars</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default LatestPage;
