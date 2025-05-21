import React from "react";
import contact from "../../Data/jsonData/contact.json";

function FooterContact() {
  return (
    <div>
      <h2>Contact Us</h2>

      <div>
        <p>
          {contact.address.street}, {contact.address.district}
        </p>
        <p>
          {contact.address.city}, {contact.address.state}{" "}
          {contact.address.zipCode}
        </p>
        <p>Phone: {contact.contact.phone}</p>
        <p>Email: {contact.contact.email}</p>
        <p>
          {contact.hoursOfOperation.days}: {contact.hoursOfOperation.time}
        </p>
      </div>
    </div>
  );
}

export default FooterContact;
