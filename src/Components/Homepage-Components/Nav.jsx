import React from "react";
import { Link } from "react-scroll";
import LoginButton from "./LoginButton";

function Nav() {
  return (
    <nav
      className="nav"
      style={{ display: "flex", justifyContent: "space-between" }}
    >
      <Link href="/" className="logo">
        <div>Logo</div>
      </Link>
      <div className="all-nav-buttons">
        <ul
          style={{
            listStyle: "none",
            display: "flex",
            flexDirection: "column",
            justifyContent: "flex-start",
            padding: "0 0 0 0.5rem",
          }}
        >
          <li>
            <Link to="/" spy={true} smooth={true} offset={-100} duration={500}>
              Home
            </Link>
          </li>
          <li>
            <Link
              to="about"
              spy={true}
              smooth={true}
              offset={-100}
              duration={500}
            >
              About
            </Link>
          </li>
          <li>
            <Link
              to="services"
              spy={true}
              smooth={true}
              offset={-100}
              duration={500}
            >
              Services
            </Link>
          </li>
          <li>
            <Link
              to="testimonies"
              spy={true}
              smooth={true}
              offset={-100}
              duration={500}
            >
              Testimonies
            </Link>
          </li>
          <li>
            <Link
              to="contact"
              spy={true}
              smooth={true}
              offset={-100}
              duration={500}
            >
              Contact
            </Link>
          </li>
        </ul>

        <LoginButton />
      </div>
    </nav>
  );
}

export default Nav;
