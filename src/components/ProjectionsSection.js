import React, { useState } from "react";
import { projectionsData } from "../components/data/projectionsData.js";
import "../styles/projections.css";

export function ProjectionsSection() {
  const [selectedYear, setSelectedYear] = useState("2025");

  const years = Object.keys(projectionsData);
  const currentYearData = projectionsData[selectedYear];

  return (
    <section id="projections" className="projections-section">
      <div className="title-card">
        <h2>Metas Futuras do Programa</h2>
        <p>Projeções de crescimento para os próximos anos</p>
      </div>

      <nav className="timeline-nav">
        {years.map((year) => (
          <button
            key={year}
            className={`timeline-year ${selectedYear === year ? "active" : ""}`}
            onClick={() => setSelectedYear(year)}
          >
            {year}
          </button>
        ))}
      </nav>

      <div className="projections-content">
        {currentYearData.map((item, index) => {
          const Icon = item.icon;
          return (
            <div key={index} className="stat-block">
              <div className="stat-icon-wrapper">
                <Icon className="stat-icon" />
              </div>
              <div className="stat-info">
                <span className="stat-title">{item.title}</span>
                <p className="stat-value">{item.value}</p>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
