import React from "react";
import Hamburger from "hamburger-react";
import { useState } from "react";
import HomePageNavItems from "./HomePageNavItems";
import LoginButton from "./LoginButton";

function HamburgerMenu() {
  const [open, setOpen] = useState(false);
  return (
    <div className="hamburger-container">
      <Hamburger
        size={24}
        toggled={open}
        toggle={setOpen}
        className="hamburger-icon"
      />

      {open && (
        <div className="HamMenu">
          <div>Hello</div>
          <HomePageNavItems
            className="HamNavItems"
            style={{ display: "flex" }}
          />
          <LoginButton className="HamLogin" style={{ display: "flex" }} />
        </div>
      )}

      {open && <div>menu</div>}
    </div>
  );
}

export default HamburgerMenu;
