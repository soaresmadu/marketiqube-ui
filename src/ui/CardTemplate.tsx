import React from "react";

type CardProps = {
  title: string;
  description: string;
  client: string;
};

export const CardTemplate: React.FC<CardProps> = ({ title, description, client }) => {
  return (
    <div className="flex flex-col justify-around items-center bg-white shadow-lg rounded-lg w-100 h-40">
      <h2 className="text-xl font-bold">{title}</h2>
      <p className="text-gray-600 text-center">{description}</p>
      <p className="text-gray-900 text-center">{client}</p>
    </div>

  );
};
