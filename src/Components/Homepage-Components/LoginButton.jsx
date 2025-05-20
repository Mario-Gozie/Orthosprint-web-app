// import React from "react";
// import { ChevronRight } from "lucide-react";
// import { Link } from "react-router-dom";

// function LoginButton() {
//   return (
//     <Link
//       className="navLoginLink hamLoginLink"
//       to="/admin"
//       style={{ textDecoration: "none" }}
//     >
//       <div
//         style={{
//           width: "9rem",
//           height: "2.7rem",
//           background: "black",
//           display: "flex",
//           justifyContent: "space-between",
//           alignItems: "center",
//           borderRadius: "25px",
//         }}
//       >
//         <div
//           style={{
//             background: "white",
//             borderRadius: "50%",
//             width: "2.2rem",
//             height: "2.2rem",
//             display: "flex",
//             justifyContent: "center",
//             alignItems: "center",
//             marginLeft: "0.2rem",
//           }}
//         >
//           <ChevronRight background="white" color="black" />
//         </div>
//         <p style={{ color: "white", marginRight: "0.8rem" }}>Get in touch</p>
//       </div>
//     </Link>
//   );
// }

// export default LoginButton;
import React from "react";
import { ChevronRight } from "lucide-react";
import { Link } from "react-router-dom";

function LoginButton({ className = "" }) {
  return (
    <Link
      to="/admin"
      className={`login-button ${className}`}
      style={{ textDecoration: "none" }}
    >
      <div className="button-container">
        <div className="icon-circle">
          <ChevronRight className="ChevronRight" />
        </div>
        <p className="button-text">Get in touch</p>
      </div>
    </Link>
  );
}

export default LoginButton;
