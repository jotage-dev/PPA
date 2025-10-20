import React from "react";

import {
  ClipboardEdit,
  CheckCircle,
  ArrowRight,
  Phone,
  Mail,
} from "lucide-react";

import "../styles/AdhesionSection.css";

export function AdhesionSection() {
  return (
    <section id="adesao" className="adhesion-section">
      <div className="adhesion-container">
        <div className="adhesion-header">
          <ClipboardEdit size={40} className="header-icon" />
          <h2>Como Participar do Programa</h2>
          <p>
            Um guia simples para produtores rurais interessados em fazer parte
            da mudança.
          </p>
        </div>

        <div className="adhesion-grid">
          <div className="adhesion-text-column">
            <h3>Adesão ao Programa</h3>
            <p>
              A adesão é <strong>voluntária</strong> e destinada a produtores
              com propriedades na Bacia Hidrográfica do Ribeirão Guaratinguetá,
              devidamente cadastrados no CAR (Cadastro Ambiental Rural), e em
              conformidade com a legislação ambiental.
            </p>

            <div className="cta-card">
              <h4>Pronto para Começar?</h4>
              <p>
                Clique no botão abaixo para preencher sua ficha de inscrição de
                forma rápida e segura.
              </p>
              <a
                href="https://forms.gle/2qzzzBKswttEifr36"
                target="_blank"
                rel="noopener noreferrer"
                className="cta-button"
              >
                <span>Inscrever-se Agora</span>
                <ArrowRight size={20} />
              </a>
            </div>

            <div className="secondary-contacts">
              <h4>Prefere outro canal ou tem dúvidas?</h4>
              <ul className="contact-list">
                <li className="contact-item">
                  <Phone size={20} />
                  <a href="tel:+551231285400">(12) 3128-5400</a>
                </li>
                <li className="contact-item">
                  <Phone size={20} />
                  <a href="tel:+5512982800180">(12) 98280-0180</a>
                </li>
                <li className="contact-item">
                  <Mail size={20} />
                  <a href="mailto:produtordeagua@guaratingueta.sp.gov.br">
                    produtordeagua@guaratingueta.sp.gov.br
                  </a>
                </li>
              </ul>
            </div>
          </div>

          <div className="adhesion-documents-column">
            <div className="documents-card">
              <h4>Documentos Necessários</h4>
              <ul className="documents-list">
                <li className="document-item">
                  <CheckCircle className="check-icon" />
                  <span>Documento pessoal (CPF, RG)</span>
                </li>
                <li className="document-item">
                  <CheckCircle className="check-icon" />
                  <span>Documento de propriedade ou posse da terra</span>
                </li>
                <li className="document-item">
                  <CheckCircle className="check-icon" />
                  <span>Cadastro Ambiental Rural (CAR)</span>
                </li>
                <li className="document-item">
                  <CheckCircle className="check-icon" />
                  <span>Ficha de inscrição preenchida (via link)</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
