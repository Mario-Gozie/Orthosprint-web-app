import React from "react";
import navItems from "../../Data/jsonData/navItems.json";
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
        {navItems.map((item, index) => (
          <li key={`${item.path}-${index}`} className="Nav-item">
            <Link
              className="Nav-link"
              to={item.path}
              spy={true}
              smooth={true}
              offset={-100}
              duration={500}
              activeClass="active"
            >
              {item.label}
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
