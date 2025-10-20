import React from "react";
import "../styles/AboutSection.css";

export function AboutSection() {
  return (
    <section id="sobre" className="about-section-background">
      <div className="about-container">
        <div className="about-text-content">
          <h2 className="about-title">
            Sobre o Programa Produtor de Água {" "}
            <span className="highlight-text">Nova Geração</span>
          </h2>
          <div className="about-paragraphs">
            <p>
              O Programa Produtor de Água – Nova Geração é uma iniciativa que
              une o poder público, o setor privado, universidades e produtores
              rurais em prol da proteção dos mananciais do Ribeirão
              Guaratinguetá, principal fonte de abastecimento de água do
              município.
            </p>
            <p>
              Nascido na Serra da Mantiqueira e desaguando no Rio Paraíba do
              Sul, o Ribeirão é responsável por cerca de 95% da água que
              abastece Guaratinguetá — tornando sua preservação essencial para o
              futuro da cidade.
            </p>
            <p>
              O programa adota o modelo de Pagamento por Serviços Ambientais
              (PSA), que reconhece e recompensa financeiramente o produtor rural
              que protege e conserva o meio ambiente. Essa iniciativa inovadora
              faz de Guaratinguetá o segundo município do Estado de São Paulo a
              implementar o PSA, seguindo exemplos de sucesso como Joanópolis
              (SP) e Extrema (MG) — esta última premiada internacionalmente pela
              ONU pelo pioneirismo do modelo.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
