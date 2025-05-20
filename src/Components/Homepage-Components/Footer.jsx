import React from "react";
import FooterAbout from "./FooterAbout";
import FooterQuickLink from "./FooterQuickLink";
import FooterContact from "./FooterContact";
import FooterServices from "./FooterServices";

function Footer() {
  return (
    <section>
      <FooterAbout />
      <FooterQuickLink />
      <FooterServices />
      <FooterContact />
    </section>
  );
}

export default Footer;
