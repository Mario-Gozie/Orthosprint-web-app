import React from "react";
import contact from "../../Data/jsonData/contact.json";

function FooterContact() {
  return (
    <div className="footer-contact-container">
      <h2 className="footer-contact-header">Contact Us</h2>

      <div>
        <p className="contact-item">
          {contact.address.street}, {contact.address.district}
        </p>
        <p className="contact-item">
          {contact.address.city}, {contact.address.state}{" "}
          {contact.address.zipCode}
        </p>
        <p className="contact-item">Phone: {contact.contact.phone}</p>
        <p className="contact-item">Email: {contact.contact.email}</p>
        <p className="contact-item">
          {contact.hoursOfOperation.days}: {contact.hoursOfOperation.time}
        </p>
      </div>
    </div>
  );
}

export default FooterContact;
