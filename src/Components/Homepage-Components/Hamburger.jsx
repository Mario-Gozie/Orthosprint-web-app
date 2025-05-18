import React, { useState } from "react";
import { Link } from "react-scroll";
import Hamburger from "hamburger-react";
import navItems from "../../Data/jsonData/navItems.json";
import LoginButton from "./LoginButton";

function HamburgerMenu() {
  const [isOpen, setOpen] = useState(false);

  return (
    <div className="hamburger-container">
      {/* Hamburger icon button */}
      <Hamburger
        size={24}
        toggled={isOpen}
        toggle={setOpen}
        className="hamburger-icon"
      />

      {/* Mobile menu that appears when hamburger is clicked */}
      {isOpen && (
        <div className="mobile-menu">
          <ul className="mobile-nav-list">
            {navItems.map((item) => (
              <li key={item.path} className="mobile-nav-item">
                <Link
                  to={item.path}
                  spy={true}
                  smooth={true}
                  offset={-100}
                  duration={500}
                  activeClass="active"
                  onClick={() => setOpen(false)} // Close menu when item is clicked
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>

          <LoginButton className="mobile-login-btn" />
        </div>
      )}
    </div>
  );
}

export default HamburgerMenu;
