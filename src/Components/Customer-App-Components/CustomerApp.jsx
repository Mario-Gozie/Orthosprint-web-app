import React from "react";
import { lazy, Suspense } from "react";
import { Routes, Route } from "react-router-dom";

const Dashboard = lazy(() => import("./Dashboard"));
const Profile = lazy(() => import("./Profile"));
const Notification = lazy(() => import("./Notification"));
const Booking = lazy(() => import("./Booking"));

function CustomerApp() {
  return (
    <Suspense fallback={<p>Loading...</p>}>
      <Routes>
        <Route path="/:id/dashboard" element={<Dashboard />} />
        <Route path="/:id/Profile" element={<Profile />} />
        <Route path="/:id/notification" element={<Notification />} />
        <Route path="/:id/booking" element={<Booking />} />
      </Routes>
    </Suspense>
  );
}

export default CustomerApp;
