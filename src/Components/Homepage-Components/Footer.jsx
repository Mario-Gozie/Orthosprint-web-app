import React from "react";
import FooterAbout from "./FooterAbout";
import FooterQuickLink from "./FooterQuickLink";
import FooterContact from "./FooterContact";
import FooterServices from "./FooterServices";
import contact from "../../Data/jsonData/contact.json";

function Footer() {
  const currentYear = new Date().getFullYear();
  return (
    <section>
      <div>
        <FooterAbout />
        <FooterQuickLink />
        <FooterServices />
        <FooterContact />
      </div>
      <hr />
      <p>
        &copy; {currentYear} {contact.companyName}. All Rights Reserved
      </p>
    </section>
  );
}

export default Footer;
