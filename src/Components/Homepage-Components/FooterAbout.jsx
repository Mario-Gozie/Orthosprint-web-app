import React from "react";
// import { FaTwitter, FaFacebook, FaLinkedin, FaInstagram } from "react-icons/fa"; // Font Awesome
import * as Icons from "react-icons/fa"; // Font Awesome
import socialmedia from "../../Data/jsonData/socialmedia.json";

function FooterAbout() {
  return (
    <div>
      <h2>About Us</h2>
      <p>
        Orthosprint Prosthetics and orthothics is dedicated to improving lives
        through inovatiive mobility solutions and compasionate care.
      </p>
      <ul className="social-media-icons-container">
        {socialmedia.map((social) => {
          const Icon = Icons[social.icon];
          return (
            <li key={social.name} className="social-media">
              <a
                href={social.url}
                aria-label={`${social.name} (opens in new tab)`}
                target="_blank"
                rel="noopener noreferrer"
                className="social-media-link"
                style={{ "--hover-color": social.color }} // CSS variable
              >
                <Icon size={24} className="social-media-icon" />
              </a>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default FooterAbout;
