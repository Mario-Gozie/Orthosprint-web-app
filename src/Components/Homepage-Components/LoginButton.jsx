import React from "react";
import { ChevronRight } from "lucide-react";

function LoginButton() {
  return (
    <div
      style={{
        width: "8.5rem",
        height: "3rem",
        background: "black",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        borderRadius: "25px",
        padding: "0.1rem",
      }}
    >
      <div
        style={{
          background: "white",
          borderRadius: "50%",
          width: "2rem",
          height: "2rem",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          marginRight: "0.2rem",
        }}
      >
        <ChevronRight background="white" strokeWidth={3} />
      </div>
      <p style={{ color: "white" }}>Get in touch</p>
    </div>
  );
}

export default LoginButton;
