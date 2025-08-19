import { Button } from "../ui/Button";
import React from "react";

const QuemSomos: React.FC = () => {
  return (
    <div className="w-full h-screen flex justify-center items-center px-6 sm:px-0">
      <div className="w-full max-w-[1200px] flex flex-col sm:flex-row justify-between items-center am:items-start gap-10">
        <div className="w-full sm:w-[600px] flex flex-col justify-center items-start">
          <Button text="MarketiQube" />
          <h3 className="text-left mb-2 font-bold text-[18px] sm:text-[25px]">
            Onde marketing encontra inteligência
          </h3>
          <p className="text-left mb-2 text-[14px] sm:text-[18px]">
            MarketiQube é uma empresa de consultoria em marketing digital que oferece soluções inteligentes baseadas em dados para otimizar campanhas, aumentar o engajamento e gerar resultados reais para seus clientes.
          </p>
          <p className="text-left mb-3 text-[14px] sm:text-[18px] font-bold text-[#4f9e22]">
            O foco é combinar criatividade com análise estratégica para entregar crescimento sólido e sustentável.
          </p>
        </div>

        <div className="w-full sm:w-[400px] flex flex-col justify-center items-center sm:items-end">
          {/* Aqui você pode adicionar imagem ou ilustração */}
        </div>

      </div>
    </div>
  );
};

export default QuemSomos;
