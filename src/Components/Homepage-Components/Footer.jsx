import React from "react";
import FooterAbout from "./FooterAbout";
import FooterQuickLink from "./FooterQuickLink";
import FooterContact from "./FooterContact";
import FooterServices from "./FooterServices";
import contact from "../../Data/jsonData/contact.json";

function Footer() {
  const currentYear = new Date().getFullYear();
  return (
    <footer className="footer-section">
      <div className="footer-container">
        <div className="footer-wrapper">
          <FooterAbout />
          <FooterQuickLink />
          <FooterServices />
          <FooterContact />
        </div>
      </div>
      <hr className="horizontal-line" />
      <p className="copy-right-text">
        &copy; {currentYear} {contact.companyName}. All Rights Reserved
      </p>
    </footer>
  );
}

export default Footer;
