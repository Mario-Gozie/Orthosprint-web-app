import React from "react";
import { ArrowRight } from "lucide-react";

function LoginButton() {
  return (
    <div
      style={{
        width: "8rem",
        height: "3rem",
        background: "red",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        borderRadius: "25px",
      }}
    >
      <ArrowRight />
      <p>Get in touch</p>
    </div>
  );
}

export default LoginButton;
