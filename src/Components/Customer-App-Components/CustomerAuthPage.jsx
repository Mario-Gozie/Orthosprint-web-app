// import React from "react";
// import Login from "./Login";
// import AuthPageNav from "./AuthPageNav";
// import SignUp from "./SignUp";
// import clsx from "clsx";
// import { FaBone } from "react-icons/fa";
// import { AnimatePresence } from "framer-motion";
// import { useState } from "react";
// import FormDisplayAnimation from "./formDisplayAnimation";
// import {
//   useLocation,
//   useNavigate,
//   Routes,
//   Route,
//   Link,
// } from "react-router-dom";

// import "../../Css/CustomerAppCss.css";

// function CustomerAuthPage() {
//   const location = useLocation(); // Get current route location
//   const navigate = useNavigate();
//   const [activeForm, setActiveForm] = useState("login");
//   const [showClientPassword, setShowClientPassword] = useState(false);
//   const [clientPassword, setClientPassword] = useState(""); // State for password
//   const [showNewPassword, setShowNewPassword] = useState(false);
//   const [newPassword, setNewPassword] = useState(""); // State for password
//   const [confirmPassword, setConfirmPassword] = useState(""); // State for password
//   const [showConfirmPassword, setShowConfirmPassword] = useState(false);
//   return (
//     <div className="login-signUp">
//       <AuthPageNav />
//       <div className="main-login-signUp-container">
//         <div className="text-login-signUp">
//           <div className="text-bone-container">
//             <div className="bone-icon-container">
//               <FaBone className="bone-Icon" />
//             </div>
//             <div className="login-signup-text">
//               <h3>Orthosprint P&O Centre</h3>
//               <p>Prosthetic & Orthotic Excellence</p>
//             </div>
//           </div>

//           <div className="login-signUp-button-container">
//             <div className="login-signUp-button-wrapper">
//               <div className="login-signUp-buttons">
//                 <Link
//                   to="app/login"
//                   className={clsx("login", {
//                     "active-btn": location.pathname === "/login",
//                   })}
//                 >
//                   Login
//                 </Link>
//                 <Link
//                   to="/signUp"
//                   className={clsx("signUp", {
//                     "active-btn": location.pathname === "/signUp",
//                   })}
//                 ></Link>
//               </div>

//               <AnimatePresence mode="wait">
//                 <Routes location={location} key={location.pathname}>
//                   <Route
//                     path="/login"
//                     element={
//                       <FormDisplayAnimation>
//                         <Login
//                           showClientPassword={showClientPassword}
//                           setShowClientPassword={setShowClientPassword}
//                           clientPassword={clientPassword}
//                           setClientPassword={setClientPassword}
//                         />
//                       </FormDisplayAnimation>
//                     }
//                   />
//                   <Route
//                     path="/signUp"
//                     element={
//                       <FormDisplayAnimation>
//                         <SignUp
//                           showNewPassword={showNewPassword}
//                           setShowNewPassword={setShowNewPassword}
//                           newPassword={newPassword}
//                           setNewPassword={setNewPassword}
//                           confirmPassword={confirmPassword}
//                           setConfirmPassword={setConfirmPassword}
//                           setShowConfirmPassword={setShowConfirmPassword}
//                           showConfirmPassword={showConfirmPassword}
//                         />
//                       </FormDisplayAnimation>
//                     }
//                   />
//                   {/* <Route path="/" element={<Navigate to="/login" replace />} /> */}
//                 </Routes>
//               </AnimatePresence>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default CustomerAuthPage;
