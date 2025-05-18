import React from "react";
import { Link } from "react-scroll";
import HomePageNavItems from "./HomePageNavItems";
import LoginButton from "./LoginButton";
import HamburgerMenu from "./Hamburger";

function Nav() {
  return (
    <nav className="nav">
      <Link
        to="home"
        spy={true}
        smooth={true}
        offset={-70}
        duration={500}
        activeClass="active"
        className="logo"
      >
        <div>Logo</div>
      </Link>
      {/* Desktop navigation */}
      <HomePageNavItems />

      {/* Desktop login button */}
      <LoginButton className="desktop-login-btn" />

      {/* Mobile hamburger menu - will show on smaller screens */}
      <HamburgerMenu />
    </nav>
  );
}

export default Nav;
