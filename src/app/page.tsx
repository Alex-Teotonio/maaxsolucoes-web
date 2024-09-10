import BlurIn from "@/components/magicui/blur-in";
import TypingAnimation from "@/components/magicui/typing-animation";
import ShimmerButton from "@/components/magicui/shimmer-button";

export default function Home() {
  return (
    <div className="bg-black text-white min-h-screen">
      {/* Header */}
      <header className="bg-black text-white py-4">
        <div className="container mx-auto flex justify-between items-center">
          {/* Logo */}
          <div className="text-lg font-semibold">Maax Soluções</div>

          {/* Links de navegação */}
          <div className="flex items-center space-x-4">
            <a href="#" className="hover:text-gray-300">
              Log in
            </a>
            <ShimmerButton shimmerColor="#ffffff" background="rgba(0, 0, 0, 1)">
              Sign up
            </ShimmerButton>
          </div>
        </div>
      </header>

      {/* Espaço entre o header e o conteúdo */}
      <main className="flex flex-col justify-center items-center h-full mt-12 space-y-8">
        {/* Título chamativo */}
        <BlurIn word={"Inovação e eficiência em cada evento!"} />

        {/* Animação de texto digitando */}
        <TypingAnimation
          className="text-xl"
          text={"Soluções rápidas e confiáveis para o sucesso do seu evento"}
          duration={150}
        />

        {/* Outra animação de texto digitando */}
        <TypingAnimation
          className="text-lg text-gray-400"
          text={"Cadastre produtos, venda com segurança e otimize seu tempo."}
          duration={100}
        />

        {/* Shimmer Button adicional para ação */}
        <ShimmerButton shimmerColor="#00FF00" background="rgba(0, 0, 0, 0.8)">
          Saiba Mais
        </ShimmerButton>
      </main>
    </div>
  );
}
