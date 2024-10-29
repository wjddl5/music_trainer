"use client";
// InstrumentSelectionPage.js
import React, { useState } from "react";
import { instruments } from "./instruments";
import "./MainPage.css";

function InstrumentSelectionPage() {
  const [selectedItem, setSelectedItem] = useState(null);
  const [hoveredItemId, setHoveredItemId] = useState(null);

  const handleInstrumentClick = (item) => {
    setSelectedItem(item.id);
    // 미리보기 사운드 재생
    const audio = new Audio(item.previewSound);
    audio.play();
  };

  return (
    <div className="instrument-page">
      <h2>Select Your Instrument</h2>
      <div className="instrument-grid">
        {instruments.map((item) => (
          <div
            key={item.id}
            className={`instrument-card ${selectedItem === item.id ? "selected" : ""}`}
            onClick={() => handleInstrumentClick(item)}
            onMouseEnter={() => setHoveredItemId(item.id)}
            onMouseLeave={() => setHoveredItemId(null)}
          >
            <img src={hoveredItemId === item.id ? item.gifImage : item.image} alt={item.name} className="instrument-image" />
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
