import Link from "next/link";
import { Separator } from "@/components/ui/separator";
import { About } from "@/components/About";
import { Services } from "@/components/Services";
import { ContactForm } from "@/components/ContactForm";
export default function Home() {
  return (
    <div className="bg-black text-white h-full overflow-hidden flex flex-col">
      <header className="bg-black text-white py-2 fixed top-0 left-0 w-full z-10">
        <div className="w-full px-4 flex justify-between items-center">
          <img src="/logo.jpg" className="w-20 h-30" />
          <div className="flex items-center space-x-4">
            <Link href="/login" className="hover:text-gray-300">
              Log in
            </Link>
            <Link href="/signup">Sign up</Link>
          </div>
        </div>
      </header>

      <div className="pt-12">
        <Separator className="my-3.5 bg-gray-600" />
      </div>

      <div className="grid grid-cols-2 h-screen">
        <div className="relative h-full flex justify-start items-start h-screen">
          <img
            src="/maax-background.jpg"
            alt="Maax Soluções"
            className="h-screen w-fit object-contain"
          />
        </div>
        <div className="flex flex-col justify-center items-start h-full overflow-hidden">
          <h3 className="text-4xl">
            Tudo para seu Evento, em um só Aplicativo!
          </h3>
        </div>
      </div>
      <About />
      <Services />
      <ContactForm />
    </div>
  );
}
