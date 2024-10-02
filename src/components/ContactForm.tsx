"use client";

import React, { useState } from "react";
import { collection, addDoc } from "firebase/firestore"; // Importa funções do Firestore
import { firestore } from "../firebase-config"; // Importa o Firestore inicializado
import { Input } from "@/components/ui/input"; // Importa o Input do shadcn
import { Textarea } from "@/components/ui/textarea"; // Importa o Textarea do shadcn

export const ContactForm: React.FC = () => {
  const [nome, setNome] = useState("");
  const [email, setEmail] = useState("");
  const [telefone, setTelefone] = useState("");
  const [mensagem, setMensagem] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      await addDoc(collection(firestore, "contato"), {
        nome,
        email,
        telefone,
        mensagem,
        timestamp: new Date(),
      });

      alert("Mensagem enviada com sucesso!");
      setNome("");
      setEmail("");
      setTelefone("");
      setMensagem("");
    } catch (error) {
      console.error("Erro ao enviar mensagem: ", error);
      alert("Erro ao enviar mensagem. Tente novamente.");
    }
  };

  return (
    <div className="w-full h-screen flex items-start justify-center py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full space-y-8">
        <h2 className="mt-6 text-center text-3xl font-extrabold">
          Fale Conosco
        </h2>

        <p className="text-center text-lg text-gray-100">
          Quer descobrir como a Maax Soluções pode transformar seus eventos?{" "}
          <br />
          Entre em contato preenchendo o formulário abaixo, e nossa equipe
          retornará em breve.
        </p>

        <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
          <div className="rounded-md shadow-sm space-y-4">
            {/* Input para o Nome */}
            <div>
              <label htmlFor="nome" className="sr-only">
                Nome
              </label>
              <Input
                id="nome"
                name="nome"
                type="text"
                required
                value={nome}
                onChange={(e) => setNome(e.target.value)}
                placeholder="Seu Nome"
              />
            </div>

            {/* Input para o Email */}
            <div>
              <label htmlFor="email" className="sr-only">
                E-mail
              </label>
              <Input
                id="email"
                name="email"
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Seu E-mail"
              />
            </div>

            {/* Input para o Telefone */}
            <div>
              <label htmlFor="telefone" className="sr-only">
                Telefone
              </label>
              <Input
                id="telefone"
                name="telefone"
                type="text"
                required
                value={telefone}
                onChange={(e) => setTelefone(e.target.value)}
                placeholder="Seu Telefone"
              />
            </div>

            {/* Textarea para Mensagem */}
            <div>
              <label htmlFor="mensagem" className="sr-only">
                Mensagem
              </label>
              <Textarea
                id="mensagem"
                name="mensagem"
                required
                value={mensagem}
                onChange={(e) => setMensagem(e.target.value)}
                placeholder="Sua Mensagem"
              />
            </div>
          </div>

          <div>
            <button
              type="submit"
              className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            >
              Enviar Mensagem
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};
