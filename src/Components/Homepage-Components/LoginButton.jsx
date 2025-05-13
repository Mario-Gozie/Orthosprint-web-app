import React from "react";
import { ArrowRightCircle, ChevronRight } from "lucide-react";

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
      <ChevronRight background="white" strokeWidth={3} />
      <p>Get in touch</p>
    </div>
  );
}

export default LoginButton;
