import {
  Home,
  Trees,
  Leaf,
  Droplets,
  Sprout,
  Gift,
  TrendingUp,
  LandPlot
} from "lucide-react";
import "../styles/badge-grid.css";
import { useCountUpAnimation } from "../hooks/useCountUpAnimation";

const KpiValue = ({ value }) => {
  const countUpRef = useCountUpAnimation(value);

  const prefix = String(value).includes("R$") ? "R$ " : "";

  return (
    <p className="kpi-value">
      {prefix}
      <span ref={countUpRef}>0</span>
    </p>
  );
};

export function FeaturesSection() {
  const features = [
    {
      title: "Investimentos Totais",
      value: "R$ 2.060.705,30",
      icon: TrendingUp,
      category: "Resultado Financeiro",
      layout: "large",
    },
    {
      title: "Restauração Florestal",
      value: "119,45 ha",
      icon: Trees,
      category: "Recuperação Ambiental",
      layout: "wide",
    },
    {
      title: "Propriedades Cadastradas",
      value: "67",
      icon: Home,
      category: "Gestão de Território",
    },
    {
      title: "Nascentes Recuperadas",
      value: "65",
      icon: Droplets,
      category: "Recursos Hídricos",
    },
    {
      title: "Plantio de Mudas Nativas",
      value: "82.447",
      icon: Sprout,
      category: "Reflorestamento",
    },
    {
      title: "Conservação de Floresta",
      value: "185,10 ha",
      icon: Leaf,
      category: "Preservação",
    },
    {
      title: "Doação de Mudas",
      value: "140.856",
      icon: Gift,
      category: "Incentivo Comunitário",
    },
    {
      title: "Propriedades inscritas no Programa",
      value: "30",
      icon: LandPlot,
      category: "Total ",
    },
  ];

  return (
    <section id="features" className="kpi-mosaic-section">
      <div className="section-header">
        <h2>Painel de Conquistas</h2>
        <p>
          Um resumo visual dos resultados históricos do programa (2012-2024)
        </p>
      </div>

      <div className="kpi-grid">
        {features.map((feature, index) => {
          const Icon = feature.icon;
          const isNumeric = /^\d|R\$/.test(feature.value);

          return (
            <div key={index} className={`kpi-tile ${feature.layout || ""}`}>
              <Icon className="kpi-background-icon" />
              <div className="kpi-content">
                <span className="kpi-category">{feature.category}</span>

                {isNumeric ? (
                  <KpiValue value={feature.value} />
                ) : (
                  <p className="kpi-value">{feature.value}</p>
                )}

                <h3 className="kpi-title">{feature.title}</h3>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
