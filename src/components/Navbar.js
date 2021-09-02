import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "./Button";
import "./Navbar.css";

function Navbar() {
  const [isMenuClicked, setIsMenuClicked] = useState(false);
  const [isButtonVisible, setIsButtonVisible] = useState(true);

  useEffect(() => {
    showButton();
  }, []);
  const showButton = () => {
    if (window.innerWidth <= 960) {
      setIsButtonVisible(false);
    } else {
      setIsButtonVisible(true);
    }
  };
  const closeMobileMenu = () => setIsMenuClicked(false);
  const handleMenuClick = () => setIsMenuClicked(!isMenuClicked);

  window.addEventListener("resize", showButton);
  return (
    <>
      <nav className="navbar">
        <div className="navbar-container">
          <Link to="/" className="navbar-logo" onClick={closeMobileMenu}>
            TRVL <i className="fab fa-typo3"></i>
          </Link>
          <div className="menu-icon" onClick={handleMenuClick}>
            <i className={isMenuClicked ? "fas fa-times" : "fas fa-bars"}></i>
          </div>
          <ul className={isMenuClicked ? "nav-menu active" : "nav-menu"}>
            <li className="nav-item">
              <Link to="/" className="nav-links" onClick={closeMobileMenu}>
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link
                to="/services"
                className="nav-links"
                onClick={closeMobileMenu}
              >
                Services
              </Link>
            </li>
            <li className="nav-item">
              <Link
                to="/products"
                className="nav-links"
                onClick={closeMobileMenu}
              >
                Products
              </Link>
            </li>
            <li className="nav-item">
              <Link
                to="/sign-up"
                className="nav-links-mobile"
                onClick={closeMobileMenu}
              >
                Sign Up
              </Link>
            </li>
          </ul>
          {isButtonVisible && (
            <Button buttonStyle="btn--outline">SIGN UP</Button>
          )}
        </div>
      </nav>
    </>
  );
}

export default Navbar;
