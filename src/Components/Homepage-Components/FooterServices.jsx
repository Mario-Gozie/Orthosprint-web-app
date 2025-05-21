import React from "react";
import services from "../../Data/jsonData/services.json";
import { Link } from "react-scroll";

function FooterServices() {
  return (
    <div>
      <h2>Services</h2>
      <ul>
        {services.map((service) => {
          return (
            <li>
              <Link
                to="services"
                spy={true}
                smooth={true}
                offset={-100}
                duration={500}
                //   activeClass={activeClass}
                //   className={`${type}-nav-link`}
                //   onClick={onclick}
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
