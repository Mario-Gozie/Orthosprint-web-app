import React from "react";
import { lazy, Suspense } from "react";
import { Routes, Route } from "react-router-dom";

const Home = lazy(() => import("./Home"));
const Profile = lazy(() => import("./Profile"));
const Notification = lazy(() => import("./Notification"));
const Booking = lazy(() => import("./Booking"));

function CustomerApp() {
  return (
    <Suspense fallback={<p>Loading...</p>}>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/:id/Profile" element={<Profile />} />
        <Route path="/:id/Notification" element={<Notification />} />
        <Route path="/:id/Booking" element={<Booking />} />
      </Routes>
    </Suspense>
  );
}

export default CustomerApp;
