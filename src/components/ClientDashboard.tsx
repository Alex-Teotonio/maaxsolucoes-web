import React from "react";
import Sidebar from "./Sidebar";

const ClientDashboard = () => {
  const clientMenuItems = [
    { label: "Meus Ingressos", href: "#my-tickets" },
    { label: "Próximos Eventos", href: "#upcoming-events" },
    { label: "Histórico de Pagamentos", href: "#payment-history" },
    { label: "Configurações de Perfil", href: "#profile-settings" },
  ];

  return (
    <div className="flex h-screen">
      <Sidebar menuItems={clientMenuItems} />

      <div className="flex-1 p-8 bg-black text-white">
        <h1 className="text-3xl font-bold mb-6">Client Dashboard</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="bg-white shadow-md p-6 rounded-lg">
            <h2 className="text-xl font-semibold">Meus Ingressos</h2>
            <p>Visualize seus ingressos, QR codes e status dos eventos.</p>
          </div>

          <div className="bg-white shadow-md p-6 rounded-lg">
            <h2 className="text-xl font-semibold">Próximos Eventos</h2>
            <p>Veja detalhes dos próximos eventos em que você está inscrito.</p>
          </div>

          <div className="bg-white shadow-md p-6 rounded-lg">
            <h2 className="text-xl font-semibold">Histórico de Pagamentos</h2>
            <p>Acesse seu histórico de pagamentos e gere comprovantes.</p>
          </div>

          <div className="bg-white shadow-md p-6 rounded-lg">
            <h2 className="text-xl font-semibold">Configurações de Perfil</h2>
            <p>Atualize suas informações pessoais e preferências.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ClientDashboard;
