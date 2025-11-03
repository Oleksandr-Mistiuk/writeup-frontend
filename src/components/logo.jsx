// src/components/Logo.jsx
import React from "react";
const logo = "/logo.png";

export default function Logo({ size = 96, className = "" }) {
  return (
    <div className={`logo-wrapper ${className}`} style={{ width: size, height: size }}>
      <img src={logo} alt="WriteUp logo" className="logo-image" />
    </div>
  );
}