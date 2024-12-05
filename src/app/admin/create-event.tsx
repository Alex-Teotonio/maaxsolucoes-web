// pages/admin/create-event.tsx
"use client";

import React, { useState } from "react";
import { createEvent } from "@/utils/eventService";
import { useToast } from "@/hooks/use-toast";
import { useRouter } from "next/navigation";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";

import { auth } from "@/firebase-config";

const CreateEvent = () => {
  const [formData, setFormData] = useState({
    nome: "",
    descrição: "",
    data: "",
    local: "",
    imagem: "",
    categoria: "",
  });
  const { toast } = useToast();
  const router = useRouter();

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      const userId = auth.currentUser?.uid;
      if (!userId) {
        toast({
          title: "Erro",
          description: "Usuário não autenticado.",
          variant: "destructive",
        });
        return;
      }
      await createEvent({
        ...formData,
        data: new Date(formData.data),
        criadorId: userId,
      });
      toast({
        title: "Evento criado com sucesso!",
        description: "Seu evento foi criado.",
      });
      router.push("/admin/events");
    } catch (error) {
      toast({
        title: "Erro ao criar evento",
        description: "Por favor, tente novamente.",
        variant: "destructive",
      });
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 p-4">
      <form
        onSubmit={handleSubmit}
        className="w-full max-w-lg bg-white p-8 rounded shadow-md"
      >
        <h2 className="text-2xl mb-6">Criar Novo Evento</h2>

        <div className="mb-4">
          <label htmlFor="nome" className="block text-gray-700">
            Nome do Evento
          </label>
          <Input
            id="nome"
            name="nome"
            type="text"
            value={formData.nome}
            onChange={handleChange}
            required
          />
        </div>

        <div className="mb-4">
          <label htmlFor="descrição" className="block text-gray-700">
            Descrição
          </label>
          <Textarea
            id="descrição"
            name="descrição"
            value={formData.descrição}
            onChange={handleChange}
            required
          />
        </div>

        <div className="mb-4">
          <label htmlFor="data" className="block text-gray-700">
            Data e Hora
          </label>
          <Input
            id="data"
            name="data"
            type="datetime-local"
            value={formData.data}
            onChange={handleChange}
            required
          />
        </div>

        <div className="mb-4">
          <label htmlFor="local" className="block text-gray-700">
            Local
          </label>
          <Input
            id="local"
            name="local"
            type="text"
            value={formData.local}
            onChange={handleChange}
            required
          />
        </div>

        <div className="mb-4">
          <label htmlFor="imagem" className="block text-gray-700">
            URL da Imagem
          </label>
          <Input
            id="imagem"
            name="imagem"
            type="url"
            value={formData.imagem}
            onChange={handleChange}
            required
          />
        </div>

        <div className="mb-6">
          <label htmlFor="categoria" className="block text-gray-700">
            Categoria
          </label>
          <Input
            id="categoria"
            name="categoria"
            type="text"
            value={formData.categoria}
            onChange={handleChange}
            required
          />
        </div>

        <Button type="submit" className="w-full">
          Criar Evento
        </Button>
      </form>
    </div>
  );
};

export default CreateEvent;
