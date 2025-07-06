import React from "react";
import { lazy, Suspense } from "react";

import { Routes, Route, Navigate } from "react-router-dom";

const CustomerAuthPage = lazy(() => import("./CustomerAuthPage"));

const Dashboard = lazy(() => import("./Dashboard"));
const Profile = lazy(() => import("./Profile"));
const Notification = lazy(() => import("./Notification"));
const Booking = lazy(() => import("./Booking"));
const EditAppointment = lazy(() => import("./EditAppointment"));

function CustomerApp() {
  return (
    <Suspense fallback={<div className="loading-spinner">Loading...</div>}>
      <Routes>
        {/* Public routes */}
        <Route
          path="/auth/*"
          element={
            <AuthRoutes.Public>
              <CustomerAuthPage />
            </AuthRoutes.Public>
          }
        />

        {/* Protected routes */}
        <Route element={<AuthRoutes.Private />}>
          <Route path="/:id/dashboard" element={<Dashboard />} />
          <Route path="/:id/profile" element={<Profile />} />
          <Route path="/:id/notification" element={<Notification />} />
          <Route path="/:id/booking" element={<Booking />} />
          <Route
            path="/:id/booking/:appointmentId/edit"
            element={<EditAppointment />}
          />
        </Route>

        {/* Default Route */}
        <Route
          index
          element={
            <AuthRoutes.Private>
              <Navigate to={`/:id/dashboard`} replace />
            </AuthRoutes.Private>
          }
        />

        {/* 404 Handling */}
        <Route
          path="*"
          element={
            <AuthRoutes.Private>
              <Navigate to={`/:id/dashboard`} replace />
            </AuthRoutes.Private>
          }
        />
      </Routes>
    </Suspense>
  );
}

export default CustomerApp;
