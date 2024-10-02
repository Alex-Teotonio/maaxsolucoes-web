"use client";

import React, { useState } from "react";
import { collection, addDoc } from "firebase/firestore"; // Importa funções do Firestore
import { firestore } from "../firebase-config"; // Importa o Firestore inicializado

export const ContactForm: React.FC = () => {
  const [nome, setNome] = useState("");
  const [email, setEmail] = useState("");
  const [mensagem, setMensagem] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      await addDoc(collection(firestore, "contato"), {
        nome,
        email,
        mensagem,
        timestamp: new Date(),
      });

      alert("Mensagem enviada com sucesso!");
      setNome("");
      setEmail("");
      setMensagem("");
    } catch (error) {
      console.error("Erro ao enviar mensagem: ", error);
      alert("Erro ao enviar mensagem. Tente novamente.");
    }
  };

  return (
    <div className="w-full h-screen flex items-start justify-center py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full space-y-8">
        <h2 className="mt-6 text-center text-3xl font-extrabold ">
          Fale Conosco
        </h2>
        <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
          <div className="rounded-md shadow-sm -space-y-px">
            <div>
              <label htmlFor="nome" className="sr-only">
                Nome
              </label>
              <input
                id="nome"
                name="nome"
                type="text"
                required
                value={nome}
                onChange={(e) => setNome(e.target.value)}
                className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                placeholder="Seu Nome"
              />
            </div>
            <div>
              <label htmlFor="email" className="sr-only">
                E-mail
              </label>
              <input
                id="email"
                name="email"
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                placeholder="Seu E-mail"
              />
            </div>
            <div>
              <label htmlFor="mensagem" className="sr-only">
                Mensagem
              </label>
              <textarea
                id="mensagem"
                name="mensagem"
                required
                value={mensagem}
                onChange={(e) => setMensagem(e.target.value)}
                className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
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
