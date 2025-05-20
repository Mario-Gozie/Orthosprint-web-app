import React from "react";
import { Link } from "react-scroll";
import navItems from "../../Data/jsonData/navItems.json";

function HomePageNavItems({ type = "", onclick, activeClass = "" }) {
  return (
    <nav className={`${type}-nav`}>
      <ul className={`${type}-nav-list`}>
        {navItems.map((item) => (
          <li key={item.path} className={`${type}-nav-item`}>
            <Link
              to={item.path}
              spy={true}
              smooth={true}
              offset={-100}
              duration={500}
              activeClass={activeClass}
              className={`${type}-nav-link`}
              onClick={onclick}
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
