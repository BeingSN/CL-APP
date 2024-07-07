import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, withRouter, NavLink } from "react-router-dom";
import { ReactComponent as MyLogo } from "../assets/images/ucl-app-logo.svg";
import Hamburger from "./hamburger";

const Header = ({ history }) => {
  const [state, setState] = useState({
    initial: false, //not open on loaded
    clicked: null,
    menuName: "Menu",
  });

  const [disabled, setDisabled] = useState(false);

  useEffect(() => {
    //listen for page changes
    history.listen(() => {
      setState({ clicked: false, menuName: "Menu" });
    });
  });

  const handleMenu = () => {
    console.log("asdasd");
    disableMenu();
    if (state.initial === false) {
      setState({
        initial: null,
        clicked: true,
        menuName: "Close",
      });
    } else if (state.clicked === true) {
      setState({
        clicked: !state.clicked,
        menuName: "Menu",
      });
    } else if (state.clicked === false) {
      setState({
        clicked: !state.clicked,
        menuName: "Close",
      });
    }
  };

  // determine if menu should be disabled
  const disableMenu = () => {
    setDisabled(!disabled);
    setTimeout(() => {
      setDisabled(false);
    }, 1200);
  };
  return (
    <div className="header">
      <div className="container-sticky ">
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
        <div className="menu mobile-menu-container">
          <div className="logo">
            <NavLink to="/">
              <MyLogo />
            </NavLink>
          </div>

          <div className="menu">
            <button onClick={handleMenu} disabled={disabled}>
              {state.menuName}
            </button>
          </div>
        </div>
        <Hamburger state={state} />
      </div>
    </div>
  );
};

export default withRouter(Header);
