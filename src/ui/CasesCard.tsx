import React from "react";

type CasesCardProps = {
    title: string;
    client: string;
    challenge: string;
    solution: string;
    results: string[];
};

export const CasesCard: React.FC<CasesCardProps> = ({ title, client, challenge, solution, results }) => {
    return (
        <div className="flex flex-col justify-center bg-white border border-gray-200 shadow-lg rounded-lg w-[575px] h-[305px] px-9">
            <h3 className="text-[22px] font-bold text-center">{title}</h3>
            <p className="mb-5 text-[19px] font-bold text-[#006677] text-center">{client}</p>
            <p className="text-[#363534] font-semibold text-left"><strong>Desafio:</strong> {challenge}</p>
            <p className="text-[#363534] font-semibold text-left"><strong>Solução:</strong> {solution}</p>

            <p className="font-bold text-[#363534]">Resultados:</p>
            <ul className="list-disc list-inside">
                {results.map((result, index) => (
                    <li key={index} className="text-[#363534] font-semibold">{result}</li>
                ))}
            </ul>
        </div>
    );
};
