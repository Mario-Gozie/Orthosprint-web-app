import React from "react";
import { lazy, Suspense } from "react";
import { Routes, Route } from "react-router-dom";
import { ImSpinner8 } from "react-icons/im";

const Home = lazy(() => import("./Home"));
const Profile = lazy(() => import("./Profile"));
const Notification = lazy(() => import("./Notification"));

function CustomerApp() {
  return (
    <Suspense fallback={<ImSpinner8 className="spin" size={30} />}>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/:id/Profile" element={<Profile />} />
        <Route path="/:id/Notification" element={<Notification />} />
      </Routes>
    </Suspense>
  );
}

export default CustomerApp;
