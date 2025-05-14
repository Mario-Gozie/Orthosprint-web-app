import React from "react";
import { ChevronRight } from "lucide-react";

function LoginButton() {
  return (
    <div
      style={{
        width: "9rem",
        height: "2.7rem",
        background: "black",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        borderRadius: "25px",
      }}
    >
      <div
        style={{
          background: "white",
          borderRadius: "50%",
          width: "2.2rem",
          height: "2.2rem",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          marginLeft: "0.2rem",
        }}
      >
        <ChevronRight background="white" />
      </div>
      <p style={{ color: "white", marginRight: "0.8rem" }}>Get in touch</p>
    </div>
  );
}

export default LoginButton;
