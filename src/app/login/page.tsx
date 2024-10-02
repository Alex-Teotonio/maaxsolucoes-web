"use client";

import React, { useState } from "react";
import Link from "next/link";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../firebase-config";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";
import { useToast } from "@/hooks/use-toast";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const router = useRouter();
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      await signInWithEmailAndPassword(auth, email, password);
      toast({
        title: "Login Efetuado com Sucesso!",
        description: "Você será redirecionado para a página inicial",
      });
      router.push("/dashboard");
    } catch (error) {
      console.error("Erro ao fazer login:", error);
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
          <h1 className="text-3xl mb-8 font-semibold text-center">Login</h1>
          <form onSubmit={handleSubmit} className="shadow-md rounded px-8 py-6">
            <div className="mb-4">
              <label htmlFor="email" className="block text-sm font-bold mb-2">
                Email
              </label>
              <Input
                id="email"
                type="email"
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
              <Input
                id="password"
                type="password"
                placeholder="Digite sua senha"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            <div className="flex items-center justify-between">
              <Button type="submit" variant="secondary">
                Entrar
              </Button>
              <Link href="/signup" className="text-blue-500 hover:underline">
                Criar uma conta
              </Link>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
