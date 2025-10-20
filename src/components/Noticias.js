import { Calendar, Tag, ArrowRight, Clock } from 'lucide-react';
import '../styles/NewsSection.css';

export function NewsSection() {
  const news = [
    {
      image: 'https://conservadordamantiqueira.org/wp-content/uploads/2025/07/Guara-767x1024.jpeg',
      title: 'Recuperação de Nascentes Avança na Região da Mantiqueira',
      description: 'Projeto de conservação já recuperou mais de 65 nascentes, garantindo água limpa para as comunidades locais e a preservação da biodiversidade.',
      date: '15 de Setembro, 2024',
      readTime: '5 min',
      category: 'Recursos Hídricos',
      categoryColor: 'blue'
    },
    {
      image: 'https://conservadordamantiqueira.org/wp-content/uploads/2025/07/Guara-767x1024.jpeg',
      title: 'Plantio de 82 Mil Mudas Nativas Transforma Paisagem',
      description: 'Iniciativa de reflorestamento com espécies nativas está restaurando áreas degradadas e criando corredores ecológicos para a fauna local.',
      date: '28 de Agosto, 2024',
      readTime: '4 min',
      category: 'Reflorestamento',
      categoryColor: 'green'
    },
    {
      image: 'https://conservadordamantiqueira.org/wp-content/uploads/2025/07/Guara-767x1024.jpeg',
      title: 'Produtores Rurais Recebem Incentivos por Conservação',
      description: 'Programa de pagamento por serviços ambientais beneficia 67 propriedades rurais que se comprometeram com a preservação ambiental.',
      date: '10 de Agosto, 2024',
      readTime: '6 min',
      category: 'Programa PSA',
      categoryColor: 'green'
    }
  ];

  return (
    <section className="noticias">
      <div className="noticias-header">
        <h2>Últimas Notícias</h2>
        <p className="noticias-subtitle">Acompanhe as novidades e conquistas do nosso programa de conservação</p>
      </div>
      
      <div className="noticias-grid">
        {news.map((noticia, index) => (
          <article key={index} className="noticia-card">
            <div className="noticia-image-wrapper">
              <img
                src={noticia.image}
                alt={noticia.title}
              />
              <div className={`noticia-category category-${noticia.categoryColor}`}>
                <Tag className="category-icon" />
                <span>{noticia.category}</span>
              </div>
            </div>
            
            <div className="noticia-content">
              <div className="noticia-meta">
                <div className="meta-item">
                  <Calendar className="meta-icon" />
                  <span>{noticia.date}</span>
                </div>
                <div className="meta-item">
                  <Clock className="meta-icon" />
                  <span>{noticia.readTime}</span>
                </div>
              </div>
              
              <h3>{noticia.title}</h3>
              <p className="noticia-description">{noticia.description}</p>
              
              <button className="noticia-button">
                Ler mais
                <ArrowRight className="button-icon" />
              </button>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
