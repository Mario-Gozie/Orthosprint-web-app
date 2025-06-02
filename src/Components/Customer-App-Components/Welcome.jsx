import React from "react";
import { FaBell } from "react-icons/fa";
import { Link } from "react-scroll";

function Welcome() {
  return (
    <div className="welcome-container">
      <div className="welcome-wrapper">
        <div
          className="welcome-info"
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <div className="img-container">
            {/* <img src="" alt="" /> */}Hello
          </div>
          <div className="welcome-text">
            <h3 className="welcome-note">Welcome Chigozirim!</h3>
            <p className="client-name"></p>
          </div>
        </div>
        <Link className="notification-icon-link" to="/:id/Notification">
          <div className="notification-bell">
            <FaBell size={24} />
            <span className="badge">3</span>{" "}
            {/* Displays "3" in a red circle */}
          </div>
        </Link>
      </div>
    </div>
  );
}

export default Welcome;
