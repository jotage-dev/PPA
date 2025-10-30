import { Calendar, ArrowRight, } from "lucide-react";
import "../styles/NewsSection.css";

export function NewsSection() {
  const news = [
    {
      image: "/images/noticia.jpeg",
      title: "Novo Programa Produtor de Água.",
      description:
        "Em comemoração ao Dia Mundial do Meio Ambiente, 5 de Junho, a Prefeitura de Guaratinguetá com apoio da BASF, Fundação Eco+ e SAEG, lança o edital e as inscrições para o Novo Programa Produtor de Água. Podem participar da ação todos os produtores rurais que compõem a Bacia Hidrográfica do Ribeirão Guaratinguetá.",
      date: "05 de Junho, 2025",
      link: "https://guaratingueta.sp.gov.br/wp-content/uploads/2025/06/EDITAL-PSA-01-2025-Programa-Produtor-de-Agua-final.pdf",
    },
  ];

  return (
    <section className="noticias">
      <div className="noticias-header">
        <h2>Últimas Notícias</h2>
        <p className="noticias-subtitle">
          Acompanhe as novidades e conquistas do nosso programa de conservação
        </p>
      </div>

      <div className="noticias-grid">
        {news.map((noticia, index) => (
          <article key={index} className="noticia-card">
            <div className="noticia-image-wrapper">
              <img src={noticia.image} alt={noticia.title} />
            </div>

            <div className="noticia-content">
              <div className="noticia-meta">
                <div className="meta-item">
                  <Calendar className="meta-icon" />
                  <span>{noticia.date}</span>
                </div>
              </div>

              <h3>{noticia.title}</h3>
              <p className="noticia-description">{noticia.description}</p>

              <a
                href={noticia.link}
                target="_blank"
                rel="noopener noreferrer"
                className="noticia-button"
              >
                Ler mais
                <ArrowRight className="button-icon" />
              </a>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
