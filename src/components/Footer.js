import React from "react";

import { MapPin, Phone, Mail } from "lucide-react";

import "../styles/Footer.css";

export function Footer() {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-column about-column">
          <img
            src="/images/01.png"
            alt="Logo Produtor de Água"
            className="footer-logo"
          />
          <p className="footer-about-text">
            Preservando nascentes e garantindo o futuro dos nossos recursos
            hídricos com sustentabilidade.
          </p>
        </div>

        <div className="footer-column links-column">
          <h4 className="footer-title">Navegação</h4>
          <ul className="footer-links">
            <li>
              <a href="#inicio">Início</a>
            </li>
            <li>
              <a href="#sobre">Sobre o Programa</a>
            </li>
            <li>
              <a href="#kpis">Nossos Números</a>
            </li>
            <li>
              <a href="#noticias">Últimas Notícias</a>
            </li>
            <li>
              <a href="#contato">Contato</a>
            </li>
          </ul>
        </div>

        <div className="footer-column contact-column">
          <h4 className="footer-title">Entre em Contato</h4>
          <ul className="contact-info">
            <li className="contact-item">
              <MapPin className="contact-icon" />
              <span>
                {" "}
                R. Ver. Octávio Nascimento Monteiro, 321, 1º andar - Polo
                Industrial I - Guaratinguetá - SP
              </span>
            </li>
            <li className="contact-item">
              <Phone className="contact-icon" />
              <a href="tel:+5512982800180">(12) 98280-0180</a>
            </li>
            <li className="contact-item">
              <Mail className="contact-icon" />
              <a href="mailto:produtordeagua@guaratingueta.sp.gov.br">
                produtordeagua@guaratingueta.sp.gov.br
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="footer-bottom">
        <p>
          &copy; {new Date().getFullYear()} Produtor de Água. Todos os direitos
          reservados.
        </p>
        <div className="footer-bottom-links">
          <a href="/politica-de-privacidade">Política de Privacidade</a>
          <a href="/termos-de-uso">Termos de Uso</a>
        </div>
      </div>
    </footer>
  );
}
