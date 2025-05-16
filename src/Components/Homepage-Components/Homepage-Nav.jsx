import React from "react";
import { Link } from "react-scroll";
import LoginButton from "./LoginButton";
import HamburgerMenu from "./Hamburger";

function Nav() {
  return (
    <nav className="nav">
      <Link href="/" className="logo">
        <div>Logo</div>
      </Link>

      <ul
        style={{
          listStyle: "none",
          display: "flex",
        }}
      >
        {["about", "services", "testimonies", "contact"].map((item) => (
          <li key={item} className="Nav-item">
            <Link
              className="Nav-link"
              to={item}
              spy={true}
              smooth={true}
              offset={-100}
              duration={500}
              activeClass="active"
            >
              {item}
            </Link>
          </li>
        ))}
      </ul>

      <LoginButton />
      <HamburgerMenu />
    </nav>
  );
}

export default Nav;
