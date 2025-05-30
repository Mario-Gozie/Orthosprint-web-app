import { React, useState } from "react";
import { about_services } from "../../Data/jsonData/about.json";
import { FiChevronDown, FiChevronUp } from "react-icons/fi";

function AboutServiceList() {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleItem = (index) => {
    // Close all others by setting activeIndex to the clicked index
    // If clicking the already active item, close it by setting to null
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className="about-special-list">
      {about_services.map((service, index) => (
        <div
          key={index}
          className={`about-service-item ${
            activeIndex === index ? "active" : ""
          }`}
        >
          <div
            className="about-service-header"
            onClick={() => toggleItem(index)}
          >
            <div className="title-container">
              <h3>{service.title}</h3>
              {activeIndex === index ? (
                <FiChevronUp
                  style={{
                    background: "#3498db",
                    borderRadius: "50%",
                    width: "25px",
                    height: "25px",
                    color: "white",
                  }}
                />
              ) : (
                <FiChevronDown
                  style={{
                    borderRadius: "50%",
                    width: "25px",
                    height: "25px",
                  }}
                />
              )}
            </div>
          </div>
          {activeIndex === index && (
            <div className="service-description">
              <p>{service.description}</p>
            </div>
          )}
        </div>
      ))}
    </div>
  );
}

export default AboutServiceList;
