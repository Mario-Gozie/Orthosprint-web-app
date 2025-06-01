import { React, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { about_services } from "../../Data/jsonData/about.json";
import { FiChevronDown, FiChevronUp } from "react-icons/fi";

function AboutServiceList() {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleItem = (index) => {
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
                    transition: "all 0.5s ease",
                  }}
                />
              ) : (
                <FiChevronDown
                  style={{
                    borderRadius: "50%",
                    width: "25px",
                    height: "25px",
                    transition: "all 0.5s ease",
                  }}
                />
              )}
            </div>
          </div>
          <AnimatePresence>
            {activeIndex === index && (
              <motion.div
                className="service-description"
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: "auto", opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                transition={{ duration: 0.5 }}
              >
                <p>{service.description}</p>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      ))}
    </div>
  );
}

export default AboutServiceList;
