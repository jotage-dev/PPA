import { useState, useEffect } from "react";
import { Menu, X, Phone, Mail, Send } from "lucide-react";
import "../styles/Header.css";

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { href: "#inicio", text: "Início" },
    { href: "#sobre", text: "Sobre" },
    { href: "#objetivos", text: "Objetivos" },
    { href: "#adesao", text: "Como Participar" },
    { href: "#adesao", text: "Contato" },
  ];

  return (
    <header className={`header ${scrolled ? "scrolled" : ""}`}>
      <div className="header-content">
        <a href="#inicio" className="logo-container">
          <img
            src="/images/01.png"
            alt="Logo Produtor de Água"
            className="logo"
          />
          
        </a>

        <nav className="desktop-nav">
          {navLinks.map((link) => (
            <a key={link.href} href={link.href} className="nav-link">
              <span className="nav-link-text">{link.text}</span>
              <span className="nav-link-underline"></span>
            </a>
          ))}
        </nav>

        <div className="header-actions">
          <a href="tel:+5512982800180" className="action-button phone-button">
            <Phone className="action-icon" />
            <span className="action-text">(12) 98280-0180</span>
          </a>
          <a href="#adesao" className="action-button cta-button">
            <Send className="action-icon" />
            <span className="action-text">Inscreva-se</span>
          </a>
        </div>

        <button
          className="mobile-menu-button"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Toggle menu"
        >
          {mobileMenuOpen ? (
            <X className="menu-icon" />
          ) : (
            <Menu className="menu-icon" />
          )}
        </button>
      </div>

      <div className={`mobile-menu ${mobileMenuOpen ? "open" : ""}`}>
        <nav className="mobile-nav">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="mobile-nav-link"
              onClick={() => setMobileMenuOpen(false)}
            >
              {link.text}
            </a>
          ))}
        </nav>
        <div className="mobile-actions">
          <a href="tel:+5512982800180" className="mobile-action-button">
            <Phone className="mobile-action-icon" />
            Entre em Contato
          </a>
          <a
            href="#adesao"
            className="mobile-action-button primary"
            onClick={() => setMobileMenuOpen(false)}
          >
            <Send className="mobile-action-icon" />
            Participar do Programa
          </a>
        </div>
        <div className="mobile-contact">
          <a
            href="mailto:produtordeagua@guaratingueta.sp.gov.br"
            className="mobile-contact-item"
          >
            <Mail className="contact-icon" />
            <span>produtordeagua@guaratingueta.sp.gov.br</span>
          </a>
        </div>
      </div>

      {mobileMenuOpen && (
        <div
          className="mobile-overlay"
          onClick={() => setMobileMenuOpen(false)}
        />
      )}
    </header>
  );
}
