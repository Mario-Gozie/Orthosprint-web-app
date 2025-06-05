import React, { useState } from "react";
import PendingAppointmentButtons from "./PendingAppointmentButtons";
import ViewReportButton from "./ViewReportButton";
import {
  Calendar,
  X,
  Clock,
  QrCode,
  FileText,
  User,
  CheckCircle,
  MapPin,
  Stethoscope,
  RotateCcw,
} from "lucide-react";

function AppointmentCards() {
  return (
    <div className="appointment-card">
      <div className="appointment-blue-bg">
        <div className="logo-appointment-id">
          <div className="logo-icon">
            <Stethoscope className="stetho" />
            <p>Orthosprint</p>
          </div>
          <p className="appointment-id">123456</p>
        </div>
        <div className="appointment-type-container">
          <h3>Appointment type</h3>
          <p>Prosthetic</p>
        </div>
      </div>
      <div className="main-appointment-detail">
        <div className="appointment-detail-container">
          <Calendar />
          <div className="main-detail">
            <div className="detail-bold">Jun 15</div>
            <div className="detail-small">2025</div>
          </div>
        </div>
        <div className="appointment-detail-container">
          <Clock />
          <div className="main-detail">
            <div className="detail-bold">2:30 PM</div>
            <div className="detail-small">EST</div>
          </div>
        </div>
        <div className="appointment-detail-container">
          <MapPin />
          <div className="main-detail">
            <div className="detail-bold">Othosprint clinic</div>
            <div className="detail-small">Room 305, Floor 3</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AppointmentCards;
