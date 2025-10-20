import React from "react";

import "../styles/hero.css";

export function Hero() {
  return (
    <section className="hero" id="inicio">
      <div className="hero-content">
        <div className="hero-text">
          <h1 className="hero-title">
            Programa Produtor de Água:
            <br />
            <span className="highlight-text">Nova Geração</span>
          </h1>

          <p className="hero-subtitle">
            Uma parceria inovadora que valoriza o produtor rural para proteger
            as nascentes e garantir a qualidade da água em Guaratinguetá.
            Cuidando do nosso presente, para colher um futuro sustentável.
          </p>

          <a href="#adesao" className="hero-cta-button">
            Participe do Programa
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M5 12h14" />
              <path d="m12 5 7 7-7 7" />
            </svg>
          </a>
        </div>

        <div className="hero-image">
          <img src="/images/01.png" alt="Logo do Programa Produtor de Água" />
        </div>
      </div>
    </section>
  );
}
