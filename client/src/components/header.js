import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

const Header = () => {
  return (
    <div className="header">
      <div className="container-sticky">
        <div className="col-left">
          <div className="wrapper">
            <nav>
              <ul className="menu">
                <li>
                  <Link to="/about">About</Link>
                </li>
                <li>
                  <Link to="/">Latest</Link>
                </li>
                <li>
                  <Link to="/">Fixtures</Link>
                </li>
                <li>
                  <Link to="/history">History</Link>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
