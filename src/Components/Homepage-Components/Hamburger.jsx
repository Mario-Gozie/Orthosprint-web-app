import React from "react";
import Hamburger from "hamburger-react";
import { useState } from "react";

function HamburgerMenu() {
  const [open, setOpen] = useState(false);
  return (
    <>
      <Hamburger size={24} toggled={open} toggle={setOpen} />

      {open && <div>menu</div>}
    </>
  );
}

export default HamburgerMenu;
