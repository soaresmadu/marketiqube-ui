import { Button } from "../ui/Button";
import React from "react";

const QuemSomos: React.FC = () => {
  return (
    <div className="w-full h-screen flex justify-center items-center">
      <div className="w-[1200px] flex justify-between items-center">
        <div className="w-[600px] flex flex-col justify-center items-start">
          <Button text="MarketiQube" />
          <h3 className="text-left mb-2 font-bold text-[25px] text-[#1C1C1E]">
            Onde marketing encontra inteligência
          </h3>
          <p className="text-left mb-2 text-[18px]">
            MarketiQube é uma empresa de consultoria em marketing digital que oferece soluções inteligentes baseadas em dados para otimizar campanhas, aumentar o engajamento e gerar resultados reais para seus clientes.
          </p>
          <p className="text-left mb-3 text-[16px] font-bold text-[#006677]">
            O foco é combinar criatividade com análise estratégica para entregar crescimento sólido e sustentável.
          </p>
        </div>

        <div className="w-[400px] flex flex-col justify-center items-end">
          {/* Aqui você pode adicionar imagem ou ilustração */}
        </div>
      </div>
    </div>
  );
};

export default QuemSomos;
