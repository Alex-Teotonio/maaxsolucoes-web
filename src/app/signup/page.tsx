"use client";

import React, { useState } from "react";
import Link from "next/link";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../firebase-config";

const Signup = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (formData.password !== formData.confirmPassword) {
      console.error("As senhas não coincidem");
      return;
    }

    try {
      await createUserWithEmailAndPassword(
        auth,
        formData.email,
        formData.password
      );
      console.log("Usuário cadastrado com sucesso");
    } catch (error) {
      console.error("Erro ao cadastrar o usuário:", error);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-black text-white w-full">
      <div className="flex w-full max-w-8xl items-center">
        <div className="w-1/2 h-screen hidden md:block">
          <img
            src="/color-back.png"
            alt="Login Illustration"
            className="w-5/5 h-full"
          />
        </div>

        <div className="w-full md:w-1/2 max-w-md mx-auto">
          <h1 className="text-3xl mb-8 font-semibold text-center">Cadastro</h1>
          <form onSubmit={handleSubmit} className="shadow-md rounded px-8 py-6">
            <div className="mb-4">
              <label htmlFor="name" className="block text-sm font-bold mb-2">
                Nome Completo
              </label>
              <input
                id="name"
                name="name"
                type="text"
                className="w-full px-3 py-2 text-black rounded"
                placeholder="Digite seu nome"
                value={formData.name}
                onChange={handleChange}
              />
            </div>
            <div className="mb-4">
              <label htmlFor="email" className="block text-sm font-bold mb-2">
                Email
              </label>
              <input
                id="email"
                name="email"
                type="email"
                className="w-full px-3 py-2 text-black rounded"
                placeholder="Digite seu email"
                value={formData.email}
                onChange={handleChange}
              />
            </div>
            <div className="mb-4">
              <label
                htmlFor="password"
                className="block text-sm font-bold mb-2"
              >
                Senha
              </label>
              <input
                id="password"
                name="password"
                type="password"
                className="w-full px-3 py-2 text-black rounded"
                placeholder="Digite sua senha"
                value={formData.password}
                onChange={handleChange}
              />
            </div>
            <div className="mb-6">
              <label
                htmlFor="confirmPassword"
                className="block text-sm font-bold mb-2"
              >
                Confirmar Senha
              </label>
              <input
                id="confirmPassword"
                name="confirmPassword"
                type="password"
                className="w-full px-3 py-2 text-black rounded"
                placeholder="Confirme sua senha"
                value={formData.confirmPassword}
                onChange={handleChange}
              />
            </div>
            <div className="flex items-center justify-between">
              <button
                type="submit"
                className=" hover:bg-black-700 text-white font-bold py-2 px-4 rounded"
              >
                Cadastrar
              </button>
              <Link href="/login">Já tenho uma conta</Link>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Signup;
