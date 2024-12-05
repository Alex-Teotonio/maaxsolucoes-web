// pages/index.tsx
"use client";

import Link from "next/link";
import { Separator } from "@/components/ui/separator";
import { About } from "@/components/About";
import { Services } from "@/components/Services";
import { ContactForm } from "@/components/ContactForm";

export default function Home() {
  return (
    <div className="bg-black text-white min-h-screen flex flex-col">
      {/* Header */}
      <header className="bg-black text-white py-4 fixed top-0 left-0 w-full z-20 shadow-md">
        <div className="container mx-auto px-4 flex justify-between items-center">
          <Link href="/">
            <img
              src="/logo.jpg"
              alt="MaaxSoluções Logo"
              className="w-24 h-auto"
            />
          </Link>
          <nav>
            <ul className="flex space-x-6">
              <li>
                <Link href="/login" className="hover:text-gray-300 transition">
                  Log in
                </Link>
              </li>
              <li>
                <Link
                  href="/signup"
                  className="bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded transition"
                >
                  Sign up
                </Link>
              </li>
            </ul>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <main className="flex-grow mt-20">
        <section className="container mx-auto px-4 py-12 grid grid-cols-1 md:grid-cols-2 items-center gap-8">
          <div>
            <h1 className="text-5xl font-bold mb-6">
              Tudo para seu Evento, em um só Aplicativo!
            </h1>
            <p className="text-lg mb-6">
              Gerencie, organize e execute seus eventos com facilidade e
              eficiência usando a MaaxSoluções.
            </p>
            <Link href="/signup">
              <button className="bg-green-500 hover:bg-green-600 text-white px-6 py-3 rounded-lg transition">
                Comece Agora
              </button>
            </Link>
          </div>
        </section>

        <Separator className="bg-gray-600 my-12" />

        {/* About Section */}
        <About />

        <Separator className="bg-gray-600 my-12" />

        {/* Services Section */}
        <Services />

        <Separator className="bg-gray-600 my-12" />

        {/* Contact Form Section */}
        <ContactForm />
      </main>

      {/* Footer */}
      <footer className="bg-black text-white py-6">
        <div className="container mx-auto px-4 text-center">
          <p>
            &copy; {new Date().getFullYear()} MaaxSoluções. Todos os direitos
            reservados.
          </p>
          <div className="flex justify-center space-x-4 mt-4">
            <Link href="/privacy" className="hover:text-gray-300 transition">
              Política de Privacidade
            </Link>
            <Link href="/terms" className="hover:text-gray-300 transition">
              Termos de Uso
            </Link>
          </div>
        </div>
      </footer>
    </div>
  );
}
