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

  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.classList.add("mobile-menu-open");
    } else {
      document.body.classList.remove("mobile-menu-open");
    }
    return () => {
      document.body.classList.remove("mobile-menu-open");
    };
  }, [mobileMenuOpen]);
  

  const navLinks = [
    { href: "#inicio", text: "Início" },
    { href: "#sobre", text: "Sobre" },
    { href: "#objetivos", text: "Objetivos" },
    { href: "#adesao", text: "Como Participar" },
    { href: "#adesao", text: "Contato" },
  ];

  const closeMenu = () => {
    setMobileMenuOpen(false);
  };

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
            <a key={link.text} href={link.href} className="nav-link">
              {link.text}
            </a>
          ))}
        </nav>

        <div className="header-actions">
          <a
            href="https://wa.me/5512982800180"
            target="_blank"
            rel="noreferrer"
            className="action-button phone-button"
          >
            <Phone className="action-icon" />
            <span>(12) 98280-0180</span>
          </a>
          <a href="#adesao" className="action-button cta-button">
            <Send className="action-icon" />
            <span>Inscreva-se</span>
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
        <nav className="mobile-nav-links">
          {navLinks.map((link) => (
            <a
              key={link.text}
              href={link.href}
              className="nav-link"
              onClick={closeMenu}
            >
              {link.text}
            </a>
          ))}
        </nav>

        <div className="mobile-menu-actions">
          <a
            href="tel:+5512982800180"
            className="action-button phone-button"
            onClick={closeMenu}
          >
            <Phone className="action-icon" />
            <span>(12) 98280-0180</span>
          </a>
          <a
            href="#adesao"
            className="action-button cta-button"
            onClick={closeMenu}
          >
            <Send className="action-icon" />
            <span>Participar do Programa</span>
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

      {mobileMenuOpen && <div className="mobile-overlay" onClick={closeMenu} />}
    </header>
  );
}
