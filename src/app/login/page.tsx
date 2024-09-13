"use client";

import React, { useState } from "react";
import Link from "next/link";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../firebase-config";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      // Fazer login com Firebase Authentication
      await signInWithEmailAndPassword(auth, email, password);
      console.log("Login realizado com sucesso");
    } catch (error) {
      console.error("Erro ao fazer login:", error);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-black text-white w-full">
      <div className="flex w-full max-w-8xl items-center">
        <div className="w-1/2 hidden md:block">
          <img
            src="/card.png" // Substitua pelo caminho da sua imagem
            alt="Login Illustration"
            className="w-4/5 h-auto mx-auto"
          />
        </div>

        <div className="w-full md:w-1/2 max-w-md mx-auto">
          <h1 className="text-3xl mb-8 font-semibold text-center">Login</h1>
          <form onSubmit={handleSubmit} className="shadow-md rounded px-8 py-6">
            <div className="mb-4">
              <label htmlFor="email" className="block text-sm font-bold mb-2">
                Email
              </label>
              <input
                id="email"
                type="email"
                className="w-full px-3 py-2 text-black rounded"
                placeholder="Digite seu email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div className="mb-6">
              <label
                htmlFor="password"
                className="block text-sm font-bold mb-2"
              >
                Senha
              </label>
              <input
                id="password"
                type="password"
                className="w-full px-3 py-2 text-black rounded"
                placeholder="Digite sua senha"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            <div className="flex items-center justify-between">
              <button
                type="submit"
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
              >
                Entrar
              </button>
              <Link href="/signup">Criar uma conta</Link>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
