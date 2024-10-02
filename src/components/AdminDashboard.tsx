import React from "react";
import Sidebar from "./Sidebar";

const AdminDashboard = () => {
  const adminMenuItems = [
    { label: "Resumo dos Eventos", href: "#event-summary" },
    { label: "Gestão de Usuários", href: "#user-management" },
    { label: "Relatórios Financeiros", href: "#financial-reports" },
    { label: "Notificações", href: "#notifications" },
  ];

  return (
    <div className="flex h-screen">
      <Sidebar menuItems={adminMenuItems} />
      <div className="flex-1 p-8 bg-black text-white">
        <h1 className="text-3xl font-bold mb-6">Admin Dashboard</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="bg-white shadow-md p-6 rounded-lg">
            <h2 className="text-xl font-semibold">Resumo dos Eventos</h2>
            <p>Visualize todos os eventos, ingressos vendidos, e receitas.</p>
          </div>

          <div className="bg-white shadow-md p-6 rounded-lg">
            <h2 className="text-xl font-semibold">Gestão de Usuários</h2>
            <p>Gerencie todos os usuários cadastrados, edite e promova.</p>
          </div>

          <div className="bg-white shadow-md p-6 rounded-lg">
            <h2 className="text-xl font-semibold">Relatórios Financeiros</h2>
            <p>Veja relatórios de faturamento e exporte-os.</p>
          </div>

          <div className="bg-white shadow-md p-6 rounded-lg">
            <h2 className="text-xl font-semibold">Notificações</h2>
            <p>Receba alertas de problemas e atualizações.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;
