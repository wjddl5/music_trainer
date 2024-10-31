"use client";
// InstrumentSelectionPage.js
import React, { useState } from "react";
import { instruments } from "./instruments";
import "./MainPage.css";
import { useRouter } from "next/navigation";

function InstrumentSelectionPage() {
  const router = useRouter();
  const [hoveredItem, setHoveredItem] = useState(null);

  function ClickItem(item) {
    router.push(`/${item.name}`.toLowerCase());
  }

  return (
    <div className="instrument-page">
      <h2>Select Your Instrument</h2>
      <div className="instrument-grid">
        {instruments.map((item) => (
          <div
            key={item.id}
            className={`instrument-card ${hoveredItem === item.id ? "hover" : ""}`}
            onClick={() => ClickItem(item)}
            onMouseEnter={() => setHoveredItem(item.id)}
            onMouseLeave={() => setHoveredItem(null)}
          >
            <img src={hoveredItem === item.id ? item.gifImage : item.image} alt={item.name} className="instrument-image" />
            <div className="instrument-info">
              <h3>{item.name}</h3>
              <p>{item.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default InstrumentSelectionPage;
