import React from "react";
import { lazy, Suspense } from "react";
import { Routes, Route } from "react-router-dom";

const Login = lazy(() => import("./Login"));
const SignUp = lazy(() => import("./SignUp"));
const Dashboard = lazy(() => import("./Dashboard"));
const Profile = lazy(() => import("./Profile"));
const Notification = lazy(() => import("./Notification"));
const Booking = lazy(() => import("./Booking"));
const EditAppointment = lazy(() => import("./EditAppointment"));

function CustomerApp() {
  return (
    <Suspense fallback={<p>Loading...</p>}>
      <Routes>
        <Route path="/Login" element={<Login />} />
        <Route path="/SignUp" element={<SignUp />} />
        <Route path="/:id/dashboard" element={<Dashboard />} />
        <Route path="/:id/profile" element={<Profile />} />
        <Route path="/:id/notification" element={<Notification />} />
        <Route path="/:id/booking" element={<Booking />} />
        <Route
          path="booking/:appointmentId/edit"
          element={<EditAppointment />}
        />

        {/* This below is my default path */}
        <Route index element={<Dashboard />} />
        <Route
          path="*"
          element={<div>Customer App 404 - Page not found</div>}
        />
      </Routes>
    </Suspense>
  );
}

export default CustomerApp;
