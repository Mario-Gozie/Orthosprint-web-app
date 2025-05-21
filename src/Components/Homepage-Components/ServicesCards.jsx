import React from "react";
import services from "../../Data/jsonData/services.json";
import { FaRobot, FaChild, FaHandsHelping, FaTools } from "react-icons/fa";
import { Md3DRotation, MdMedicalServices } from "react-icons/md";
import { GiOrthotic } from "react-icons/gi";

function ServicesCards() {
  // Map each service to an icon component
  const serviceIcons = {
    "Custom Prosthtics": <FaRobot />,
    "Orthotic Devices": <GiOrthotic />,
    "Pediatric Care": <FaChild />,
    "3D Scanning Technology": <Md3DRotation />,
    "Rehabilitation Support": <FaHandsHelping />,
    "Maintenance & Adjustments": <FaTools />,
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
