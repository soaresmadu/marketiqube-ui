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
        <div className="
            flex flex-col justify-center 
            border border-gray-200 shadow-lg rounded-lg 
            w-full max-w-[575px] h-auto px-6 py-5
            dark:bg-[#080f04] dark:shadow-custom-dark dark:border-none
            sm:px-8 sm:py-6
        ">
            <h3 className="text-[22px] font-bold text-center">{title}</h3>
            <p className="mb-4 text-[19px] font-bold text-[#4f9e22] text-center">{client}</p>
            <p className="font-semibold text-left mb-2"><strong>Desafio:</strong> {challenge}</p>
            <p className="font-semibold text-left mb-2"><strong>Solução:</strong> {solution}</p>

            <p className="font-bold mt-2">Resultados:</p>
            <ul className="list-disc list-inside">
                {results.map((result, index) => (
                    <li key={index} className="font-semibold">{result}</li>
                ))}
            </ul>
        </div>
    );
};
