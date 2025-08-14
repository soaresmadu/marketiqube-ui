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
    <div className="flex flex-col justify-around items-center bg-white shadow-lg rounded-lg w-110 h-80">
      <h2 className="text-xl font-bold">{title}</h2>
      <h3 className="text-xl font-bold">{client}</h3>
      <p className="text-gray-900 text-center">{challenge}</p>
      <p className="text-gray-900 text-center">{soluction}</p>

      <ul>
        {results.map((result, index) => (
          <li key={index}>{result}</li>
        ))}
      </ul>
      
    </div>

  );
};
