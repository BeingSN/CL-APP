import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  NavLink,
} from "react-router-dom";
import { ReactComponent as MyLogo } from "../assets/images/ucl-app-logo.svg";

const Header = () => {
  return (
    <div className="header">
      <div className="container-sticky">
        <div className="col-left">
          <div className="wrapper">
            <nav>
              <ul className="menu">
                <li>
                  <NavLink to="/">
                    <MyLogo />
                  </NavLink>
                </li>

                <li>
                  <NavLink to="/about" activeStyle={{ fontWeight: "bold" }}>
                    About
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/latest" activeStyle={{ fontWeight: "bold" }}>
                    Latest
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/fixtures" activeStyle={{ fontWeight: "bold" }}>
                    Fixtures
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/history" activeStyle={{ fontWeight: "bold" }}>
                    History
                  </NavLink>
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
