import React from "react";
import "../styles/PartnersSection.css";

const partnersData = [
  { src: "/images/03.png", alt: "FEG", url: "#" },
  { src: "/images/04.png", alt: "Corredor Ecológico", url: "#" },
  { src: "/images/05.PNG", alt: "Governo Guaratinguetá", url: "#" },
  { src: "/images/06.png", alt: "Secretaria Meio Ambiente", url: "#" },
  { src: "/images/008.png", alt: "Fundação ECO+", url: "#" },
  { src: "/images/09.png", alt: "BASF", url: "#" },
  { src: "/images/10.jpg", alt: "UNESP", url: "#" },
];

export function PartnersSection() {
  return (
    <section id="parceiros" className="partners-section">
      <div className="partners-container">
        <div className="partners-header">
          <h2>
            Nossos{" "}
            <span className="highlight-text">Parceiros e Patrocinadores</span>
          </h2>
          <p>
            Esta iniciativa é viabilizada pelo apoio fundamental de organizações
            que acreditam na sustentabilidade e no futuro dos nossos recursos
            hídricos.
          </p>
        </div>

        <div className="partners-logo-grid">
          {partnersData.map((partner, index) => (
            <a
              href={partner.url}
              target="_blank"
              rel="noopener noreferrer"
              className="partner-logo-item"
              key={index}
              title={partner.alt}
            >
              <img src={partner.src} alt={partner.alt} />
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
