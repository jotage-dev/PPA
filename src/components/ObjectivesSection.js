import React from 'react';

import { useHoverScroll } from '../hooks/useHoverScroll';

import { 
  Droplets, Users, ShieldCheck, CircleDollarSign, Home, Trees, Trash2 
} from 'lucide-react';

import '../styles/ObjectivesSection.css';

const objectivesData = [
    {
        icon: <Droplets />,
        title: "Aumentar a Disponibilidade de Água",
        description: "Melhorar as condições de infiltração da água da chuva nos solos para aumentar a recarga hídrica."
      },
      {
        icon: <Users />,
        title: "Gestão Participativa",
        description: "Promover o envolvimento ativo da comunidade e produtores na gestão hídrica da bacia."
      },
      {
        icon: <ShieldCheck />,
        title: "Conservação do Solo",
        description: "Fomentar práticas que protejam o solo contra a erosão, melhorando sua qualidade e saúde."
      },
      {
        icon: <CircleDollarSign />,
        title: "Sustentabilidade e Incentivos",
        description: "Garantir a viabilidade socioeconômica e ambiental das práticas através de incentivos financeiros."
      },
      {
        icon: <Home />,
        title: "Saneamento Rural",
        description: "Implantar saneamento básico em 75% das propriedades rurais da bacia até o ano de 2028."
      },
      {
        icon: <Trees />,
        title: "Conservação de Florestas",
        description: "Incentivar e apoiar a proteção e manutenção das áreas de florestas nativas existentes."
      },
      {
        icon: <Trash2 />,
        title: "Gestão de Resíduos Sólidos",
        description: "Desenvolver e implementar soluções para a temática dos resíduos em toda a bacia."
      }
];

export function ObjectivesSection() {
  const scrollContainerRef = useHoverScroll({ scrollSpeed: 2.5, activationZone: 0.15 });

  return (
    <section id="objetivos" className="objectives-section-horizontal">
      <div className="objectives-container">
        <div className="objectives-header">
          <h2>Nossos <span className="highlight-text">Objetivos</span></h2>
          <p>
            O Programa Produtor de Água na Microbacia do Ribeirão Guaratinguetá tem as seguintes metas:
            <p style={{fontSize:15}}>(Passe o mouse)</p>
          </p>
        </div>

        <div ref={scrollContainerRef} className="horizontal-timeline-container">
          <div className="horizontal-timeline">
            {objectivesData.map((objective, index) => (
              <div className="timeline-step" key={index}>
                <div className="step-upper">
                  <div className="timeline-icon-wrapper">
                    {objective.icon}
                  </div>
                </div>
                <div className="step-lower">
                  <h3 className="timeline-title">{objective.title}</h3>
                  <p className="timeline-description">{objective.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}