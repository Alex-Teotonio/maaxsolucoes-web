// pages/admin/events.tsx
"use client";

import React, { useEffect, useState } from "react";
import { getAllEvents, deleteEvent } from "@/utils/eventService";
import { useToast } from "@/hooks/use-toast";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { Event } from "@/types/Event"; // Importar a interface

const AdminEvents = () => {
  const [events, setEvents] = useState<Event[]>([]); // Definir o tipo do estado
  const { toast } = useToast();

  useEffect(() => {
    const fetchEvents = async () => {
      try {
        const data = await getAllEvents();
        setEvents(data);
      } catch (error) {
        toast({
          title: "Erro",
          description: "Não foi possível carregar os eventos.",
          variant: "destructive",
        });
      }
    };

    fetchEvents();
  }, [toast]);

  const handleDelete = async (id: string) => {
    if (confirm("Tem certeza que deseja excluir este evento?")) {
      try {
        await deleteEvent(id);
        setEvents(events.filter((event) => event.id !== id));
        toast({
          title: "Evento excluído",
          description: "O evento foi removido com sucesso.",
        });
      } catch (error) {
        toast({
          title: "Erro",
          description: "Não foi possível excluir o evento.",
          variant: "destructive",
        });
      }
    }
  };

  return (
    <div className="min-h-screen p-8 bg-gray-100">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl">Gerenciar Eventos</h2>
        <Link href="/admin/create-event">
          <Button>Criar Novo Evento</Button>
        </Link>
      </div>

      <table className="min-w-full bg-white rounded shadow">
        <thead>
          <tr>
            <th className="py-2">Nome</th>
            <th className="py-2">Data</th>
            <th className="py-2">Local</th>
            <th className="py-2">Categoria</th>
            <th className="py-2">Ações</th>
          </tr>
        </thead>
        <tbody>
          {events.map((event) => (
            <tr key={event.id} className="text-center border-t">
              <td className="py-2">{event.nome}</td>
              <td className="py-2">{event.data.toLocaleString()}</td>
              <td className="py-2">{event.local}</td>
              <td className="py-2">{event.categoria}</td>
              <td className="py-2">
                <Link href={`/admin/edit-event/${event.id}`}>
                  <Button variant="outline" className="mr-2">
                    Editar
                  </Button>
                </Link>
                <Button
                  variant="destructive"
                  onClick={() => handleDelete(event.id)}
                >
                  Excluir
                </Button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default AdminEvents;
