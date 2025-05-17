import React from "react";
import navItems from "../../Data/jsonData/navItems.json";
import { Link } from "react-scroll";

function HomePageNavItems() {
  return (
    <div className="navListContainer hamListContainer">
      <ul className="navList hamList">
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
    </div>
  );
}

export default HomePageNavItems;
