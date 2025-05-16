import React from "react";
import { Link } from "react-scroll";
import LoginButton from "./LoginButton";

function Nav() {
  return (
    <nav
      className="nav"
      style={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        margin: "0.5rem",
      }}
    >
      <Link href="/" className="logo">
        <div>Logo</div>
      </Link>

      <ul
        style={{
          listStyle: "none",
          display: "flex",
        }}
      >
        <li className="Nav-item">
          <Link
            to="/"
            spy={true}
            smooth={true}
            offset={-100}
            duration={500}
            activeClass="active"
          >
            Home
          </Link>
        </li>
        <li className="Nav-item">
          <Link
            to="about"
            spy={true}
            smooth={true}
            offset={-100}
            duration={500}
            activeClass="active"
          >
            About
          </Link>
        </li>
        <li className="Nav-item">
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
        <li className="Nav-item">
          <Link
            to="testimonies"
            spy={true}
            smooth={true}
            offset={-100}
            duration={500}
            activeClass="active"
          >
            Testimonies
          </Link>
        </li>
        <li className="Nav-item">
          <Link
            to="contact"
            spy={true}
            smooth={true}
            offset={-100}
            duration={500}
            activeClass="active"
          >
            Contact
          </Link>
        </li>
      </ul>

      <LoginButton />
    </nav>
  );
}

export default Nav;
