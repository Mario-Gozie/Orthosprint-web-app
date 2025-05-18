import React from "react";
import { Link } from "react-scroll";
import navItems from "../../Data/jsonData/navItems.json";

function HomePageNavItems() {
  return (
    <nav className="desktop-nav">
      <ul className="desktop-nav-list">
        {navItems.map((item) => (
          <li key={item.path} className="desktop-nav-item">
            <Link
              to={item.path}
              spy={true}
              smooth={true}
              offset={-100}
              duration={500}
              activeClass="active"
              className="nav-link"
            >
              {item.label}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}

export default HomePageNavItems;
