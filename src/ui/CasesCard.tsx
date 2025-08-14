import React from "react";

type CardProps = {
    title: string
    client: string;
    challenge: string;
    soluction: string;
    results: string[];
};

export const CasesCard: React.FC<CardProps> = ({ title, client, challenge, soluction, results }) => {
  return (
    <div className="flex flex-col justify-center bg-white border border-gray-200 shadow-lg rounded-lg w-[570px] h-[300px] px-9">
      <h2 className="text-[20px] font-bold text-center">{title}</h2>
      <p className="mb-5 text-[16px] font-bold text-[#006677] text-center">{client}</p>
      <p className="text-[#363534] font-semibold text-left"><strong>Desafio:</strong> {challenge}</p>
      <p className="text-[#363534] font-semibold text-left"><strong>Solução:</strong> {soluction}</p>

      <p className="font-bold text-[#363534]">Resultados:</p>
      <ul className="list-disc list-inside">
        {results.map((result, index) => (
          <li key={index} className="text-[#363534] font-semibold">{result}</li>
        ))}
      </ul>
      
    </div>

  );
};
