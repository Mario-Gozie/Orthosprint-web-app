import React from "react";
import HomePageNavItems from "./HomePageNavItems";

function FooterQuickLink() {
  return (
    <div>
      <h2>Quick Links</h2>
      <HomePageNavItems type="Quicklink" />
      {/* <ul className="quick-links">
        {navItems.map((navItem) => {
          return <li></li>;
        })}
      </ul> */}
    </div>
  );
}

export default FooterQuickLink;
