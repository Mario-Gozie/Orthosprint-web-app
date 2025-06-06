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

import {
  FaTimesCircle,
  FaBan,
  FaHourglassHalf,
  FaSpinner,
} from "react-icons/fa";

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
          <div>
            <h3>Appointment type</h3>
            <p>Prosthetic</p>
          </div>
          <div className="status-container">
            <CheckCircle className="honored" />
            <FaBan className="cancelled" size={22} />
            <FaHourglassHalf className="pending" size={20} />
          </div>
        </div>
      </div>
      <div className="main-appointment-detail">
        <div className="appointment-detail-container">
          <div className="detail-icon-cont calendar-icon-container">
            <Calendar className="calendar-icon" />
          </div>
          <div className="main-detail">
            <div className="detail-bold">Jun 15</div>
            <div className="detail-small">2025</div>
          </div>
        </div>
        <div className="appointment-detail-container">
          <div className="detail-icon-cont clock-icon-container">
            <Clock className="clock-icon" />
          </div>
          <div className="main-detail">
            <div className="detail-bold">2:30 PM</div>
            <div className="detail-small">EST</div>
          </div>
        </div>
        <div className="appointment-detail-container">
          <div className="detail-icon-cont map-icon-container">
            <MapPin className="map-icon" />
          </div>
          <div className="main-detail">
            <div className="detail-bold">Othosprint clinic</div>
            <div className="detail-small">Room 305, Floor 3</div>
          </div>
        </div>
      </div>
      <PendingAppointmentButtons />
      <ViewReportButton />
    </div>
  );
}

export default AppointmentCards;
