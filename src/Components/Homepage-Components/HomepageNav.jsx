import React from "react";
import { Link } from "react-scroll";
import HomePageNavItems from "./HomePageNavItems";
import LoginButton from "./LoginButton";
import HamburgerMenu from "./Hamburger";

function Nav() {
  return (
    <nav className="nav">
      <Link href="/" className="logo">
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
