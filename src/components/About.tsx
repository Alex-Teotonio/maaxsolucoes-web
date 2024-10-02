// components/About.js
export const About = () => {
  return (
    <section className="text-white py-16 px-8 w-full h-screen" id="quem-somos">
      <div className="container mx-auto flex flex-col justify-start items-center h-full">
        {/* Centralização do Título */}
        <h2 className="text-4xl font-bold mb-6 text-center">Quem Somos</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          {/* Coluna do Texto */}
          <div>
            <p className="text-lg leading-relaxed mb-4">
              A Maax Soluções é uma empresa especializada em desenvolver
              soluções inovadoras para gestão de eventos. Com uma equipe
              experiente e dedicada, nosso objetivo é facilitar e automatizar
              todos os processos necessários para o sucesso de um evento, desde
              a organização de ingressos até a gestão de pagamentos e logística.
            </p>
            <p className="text-lg leading-relaxed">
              Nossos valores são centrados na eficiência, inovação e excelência,
              proporcionando sempre as melhores soluções para nossos clientes.
              Junte-se a nós e descubra como podemos transformar o seu evento!
            </p>
          </div>

          {/* Coluna da Imagem */}
          <div className="flex justify-center">
            <img
              src="/logo.jpg"
              alt="Sobre a Maax Soluções"
              className="max-w-full h-auto rounded-lg shadow-lg"
            />
          </div>
        </div>
      </div>
    </section>
  );
};
