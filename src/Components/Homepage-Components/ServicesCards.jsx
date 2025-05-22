import React from "react";
import services from "../../Data/jsonData/services.json";
import {
  FaRobot,
  FaChild,
  FaHandsHelping,
  FaTools,
  FaCrutch,
  FaCube,
} from "react-icons/fa";
import { Md3dRotation } from "react-icons/md";

function ServicesCards() {
  // Map each service to an icon component
  const serviceIcons = {
    "Custom Prosthtics": <FaRobot size={40} color="#3a86ff" />,
    "Orthotic Devices": <FaCrutch size={40} color="#3a86ff" />,
    "Pediatric Care": <FaChild size={40} color="#3a86ff" />,
    "3D Scanning Technology": <Md3dRotation size={40} color="#3a86ff" />,
    "Rehabilitation Support": <FaHandsHelping size={40} color="#3a86ff" />,
    "Maintenance & Adjustments": <FaTools size={40} color="#3a86ff" />,
  };

  return (
    <div className="services-container">
      {services.map((service) => {
        return (
          <div key={service.service} className="service-card">
            <div className="icon-container">
              {serviceIcons[service.service]}
            </div>
            <h3>{service.service}</h3>
            <p>{service.description}</p>
          </div>
        );
      })}
    </div>
  );
}

export default ServicesCards;
