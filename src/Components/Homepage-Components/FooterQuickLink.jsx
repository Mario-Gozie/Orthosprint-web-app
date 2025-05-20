import React from "react";
import HomePageNavItems from "./HomePageNavItems";
import navItems from "../../Data/jsonData/navItems.json";

function FooterQuickLink() {
  return (
    <div>
      <h2>Quick Links</h2>
      <HomePageNavItems linkType="Quicklink" />
      {/* <ul className="quick-links">
        {navItems.map((navItem) => {
          return <li></li>;
        })}
      </ul> */}
    </div>
  );
}

export default FooterQuickLink;
