import React, { useState } from "react";
import { BookMarked, Download } from "lucide-react";
import "../styles/Informativo.css"; 


const pdfDatabase = {
  "2025": {
    "Agosto e Setembro": "/files/Informativo1.pdf",

  },

};

const availableYears = Object.keys(pdfDatabase).sort((a, b) => b - a);

export function InformativoSection() {
  const [selectedYear, setSelectedYear] = useState("");
  const [selectedMonth, setSelectedMonth] = useState("");

  const availableMonths = selectedYear ? Object.keys(pdfDatabase[selectedYear]) : [];
  
  const pdfUrl = (selectedYear && selectedMonth) 
    ? pdfDatabase[selectedYear][selectedMonth] 
    : null;

  const handleYearChange = (e) => {
    setSelectedYear(e.target.value);
    setSelectedMonth(""); 
  };

  const handleMonthChange = (e) => {
    setSelectedMonth(e.target.value);
  };

  return (
    <section id="informativos" className="newsletter-section">
      <div className="newsletter-container">
        <div className="newsletter-header">
          <BookMarked size={40} className="header-icon" />
          <h2>Informativos Mensais</h2>
          <p>
            Selecione o ano e o mês para consultar o boletim correspondente.
          </p>
        </div>

        <div className="pdf-selector-container">
          <div className="dropdown-group">
            <label htmlFor="year-select">Ano</label>
            <select id="year-select" value={selectedYear} onChange={handleYearChange}>
              <option value="" disabled>Selecione o Ano</option>
              {availableYears.map(year => (
                <option key={year} value={year}>{year}</option>
              ))}
            </select>
          </div>
          
          <div className="dropdown-group">
            <label htmlFor="month-select">Mês</label>
            <select id="month-select" value={selectedMonth} onChange={handleMonthChange} disabled={!selectedYear}>
              <option value="" disabled>Selecione o Mês</option>
              {availableMonths.map(month => (
                <option key={month} value={month}>{month}</option>
              ))}
            </select>
          </div>
          
          <a 
            href={pdfUrl}
            target="_blank"
            rel="noopener noreferrer"
            className={`pdf-download-button ${!pdfUrl ? 'disabled' : ''}`}
            onClick={(e) => !pdfUrl && e.preventDefault()}
            download
          >
            Ver Informativo
            <Download size={18} />
          </a>
        </div>
      </div>
    </section>
  );
}