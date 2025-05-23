import React from "react";
import HomePageNavItems from "./HomePageNavItems";

function FooterQuickLink() {
  return (
    <div className="footer-quicklink-container">
      <h2 className="footer-quicklink-header">Quick Links</h2>
      <HomePageNavItems type="Quicklink" />
    </div>
  );
}

export default FooterQuickLink;
