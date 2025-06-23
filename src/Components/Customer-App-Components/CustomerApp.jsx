import React from "react";
import { lazy, Suspense } from "react";

import { Routes, Route, Navigate } from "react-router-dom";
import { AuthRoutes } from "./AuthRoutes";

import { AuthProvider } from "./AuthProvider";

const CustomerAuthPage = lazy(() => import("./CustomerAuthPage"));
const Dashboard = lazy(() => import("./Dashboard"));
const Profile = lazy(() => import("./Profile"));
const Notification = lazy(() => import("./Notification"));
const Booking = lazy(() => import("./Booking"));
const EditAppointment = lazy(() => import("./EditAppointment"));

function CustomerApp() {
  return (
    <AuthProvider>
      <Suspense fallback={<div className="loading-spinner">Loading...</div>}>
        <Routes>
          {/* Public routes */}
          <Route
            path="/login"
            element={
              <AuthRoutes.Public>
                <CustomerAuthPage />
              </AuthRoutes.Public>
            }
          />

          {/* Protected routes */}
          <Route
            path="/:id/dashboard"
            element={
              <AuthRoutes.Private>
                <Dashboard />
              </AuthRoutes.Private>
            }
          />
          <Route
            path="/:id/profile"
            element={
              <AuthRoutes.Private>
                <Profile />
              </AuthRoutes.Private>
            }
          />
          <Route
            path="/:id/notification"
            element={
              <AuthRoutes.Private>
                <Notification />
              </AuthRoutes.Private>
            }
          />
          <Route
            path="/:id/booking"
            element={
              <AuthRoutes.Private>
                <Booking />
              </AuthRoutes.Private>
            }
          />
          <Route
            path="/booking/:appointmentId/edit"
            element={
              <AuthRoutes.Private>
                <EditAppointment />
              </AuthRoutes.Private>
            }
          />

          {/* Default routes */}
          <Route
            index
            element={
              <AuthRoutes.Private>
                <Dashboard />
              </AuthRoutes.Private>
            }
          />
          <Route
            path="*"
            element={
              <div className="not-found">Customer App 404 - Page not found</div>
            }
          />
        </Routes>
      </Suspense>
    </AuthProvider>
  );
}

export default CustomerApp;
