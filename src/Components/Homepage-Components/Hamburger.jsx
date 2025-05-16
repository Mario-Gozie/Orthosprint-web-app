import React from "react";
import Hamburger from "hamburger-react";
import { useState } from "react";

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

      {/* {open && <div>menu</div>} */}
    </div>
  );
}

export default HamburgerMenu;
