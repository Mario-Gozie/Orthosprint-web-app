import React from "react";
import services from "../../Data/jsonData/services.json";
import { Link } from "react-scroll";

function FooterServices() {
  return (
    <div>
      <h2>Services</h2>
      <ul className="service-list">
        {services.map((service, index) => {
          return (
            <li key={`service-${index}`}>
              <Link
                to="services"
                spy={true}
                smooth={true}
                offset={-100}
                duration={500}
                activeClass="active"
                className=""
              >
                {service.service}
              </Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default FooterServices;
