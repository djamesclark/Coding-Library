import React from "react";
import Auth from "../../utils/auth";
import { Link } from "react-router-dom";
import logo from "../../assets/logo-coding-library.png"
import words from "../../assets/coding-library-words.png"
function Nav() {
  function showNavigation() {
    if (Auth.loggedIn()) {
      return (
        <ul className="flex-row">
          <li className="mx-1">
            <Link to="/orderHistory">
              Your Order History
            </Link>
          </li>
          <li className="mx-1">
            {/* this is not using the Link component to logout or user and then refresh the application to the start */}
            <a href="/" onClick={() => Auth.logout()}>
              Logout
            </a>
          </li>
        </ul>
      );
    } else {
      return (
        <div>
        <ul className="flex-row">
          <li className="mx-1">
            <Link to="/signup">
              Signup
            </Link>
          </li>
          <li className="mx-1">
            <Link to="/login">
              Login
            </Link>
          </li>
        </ul>
        </div>
      );
    }
  }
  return (
    <header className="flex-row px-1">
      <h1>
        <Link to="/">
        <img src={logo} alt="Logo"/>
        <img src={words} alt="the coding library" className="imagewords" />
        </Link>
      </h1>
      <nav>
        {showNavigation()}
      </nav>
    </header>
  );
}
export default Nav;