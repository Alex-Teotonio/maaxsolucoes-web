import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faTicketAlt,
  faShieldAlt,
  faChartBar,
  faHeadset,
} from "@fortawesome/free-solid-svg-icons";
import { IconDefinition } from "@fortawesome/fontawesome-svg-core"; // Tipagem para os ícones

// Tipagem para os serviços
interface Service {
  title: string;
  description: string;
  icon: IconDefinition;
}

export const Services: React.FC = () => {
  const services: Service[] = [
    {
      title: "Gestão de Ingressos",
      description:
        "Automatize a venda de ingressos para seus eventos de maneira simples e rápida.",
      icon: faTicketAlt,
    },
    {
      title: "Pagamentos Seguros",
      description:
        "Processamos todos os pagamentos com total segurança e eficiência.",
      icon: faShieldAlt,
    },
    {
      title: "Relatórios Personalizados",
      description:
        "Gere relatórios detalhados sobre o desempenho do seu evento em tempo real.",
      icon: faChartBar,
    },
    {
      title: "Suporte 24/7",
      description:
        "Nossa equipe está disponível para ajudar você e seus participantes a qualquer momento.",
      icon: faHeadset,
    },
  ];

  return (
    <section className="text-white py-16 px-8 w-full h-screen" id="quem-somos">
      <div className="container mx-auto">
        {/* Título da Seção */}
        <h2 className="text-4xl font-bold mb-12 text-center">
          Serviços que Oferecemos
        </h2>

        {/* Grid para organizar os serviços */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {services.map((service, index) => (
            <div key={index} className="flex flex-col items-center text-center">
              <FontAwesomeIcon icon={service.icon} className="w-12 h-12 mb-4" />
              <h3 className="text-2xl font-semibold mb-2">{service.title}</h3>
              <p className="text-lg">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
