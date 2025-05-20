import React, { useState } from "react";
import Hamburger from "hamburger-react";
import HomePageNavItems from "./HomePageNavItems";
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
          <HomePageNavItems
            type="mobile"
            activeClass="active"
            onclick={() => setOpen(false)}
          />

          <LoginButton className="mobile-login-btn" />
        </div>
      )}
    </div>
  );
}

export default HamburgerMenu;
