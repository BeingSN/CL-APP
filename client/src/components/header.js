import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  NavLink,
} from "react-router-dom";

const Header = () => {
  return (
    <div className="header">
      <div className="container-sticky">
        <div className="col-left">
          <div className="wrapper">
            <nav>
              <ul className="menu">
                <li>
                  <NavLink to="/about" activeStyle={{ fontWeight: "bold" }}>
                    About
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/">Latest</NavLink>
                </li>
                <li>
                  <NavLink to="/">Fixtures</NavLink>
                </li>
                <li>
                  <NavLink to="/history">History</NavLink>
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
