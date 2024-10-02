"use client";

import React, { useState } from "react";
import Link from "next/link";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { doc, setDoc } from "firebase/firestore";
import { auth, firestore } from "../../firebase-config";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

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
      // Cria o usuário no Firebase Authentication
      const userCredential = await createUserWithEmailAndPassword(
        auth,
        formData.email,
        formData.password
      );

      const user = userCredential.user;

      let role = "client";
      if (
        formData.email === "alexteotonio29@gmail.com" ||
        formData.email === "mateus@gmail.com"
      ) {
        role = "admin";
      }

      await setDoc(doc(firestore, "users", user.uid), {
        name: formData.name,
        email: formData.email,
        role: role,
      });
    } catch (error) {
      console.error("Erro ao cadastrar o usuário:", error);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-black text-white w-full">
      <div className="flex w-full max-w-8xl items-center">
        <div className="w-1/2 h-screen hidden md:block">
          <img
            src="/maax-background.jpg"
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
              <Input
                id="name"
                name="name"
                type="text"
                placeholder="Digite seu nome"
                value={formData.name}
                onChange={handleChange}
              />
            </div>
            <div className="mb-4">
              <label htmlFor="email" className="block text-sm font-bold mb-2">
                Email
              </label>
              <Input
                id="email"
                name="email"
                type="email"
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
              <Input
                id="password"
                name="password"
                type="password"
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
              <Input
                id="confirmPassword"
                name="confirmPassword"
                type="password"
                placeholder="Confirme sua senha"
                value={formData.confirmPassword}
                onChange={handleChange}
              />
            </div>
            <div className="flex items-center justify-between">
              <Button type="submit" variant="secondary">
                Cadastrar
              </Button>
              <Link href="/login" className="text-blue-500 hover:underline">
                Já tenho uma conta
              </Link>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Signup;
