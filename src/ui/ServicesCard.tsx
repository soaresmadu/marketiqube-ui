import React, { type ReactNode } from "react";

type ServicesCardProps = {
    icon: ReactNode;
    title: string;
    abstract: string;
};

export const ServicesCard: React.FC<ServicesCardProps> = ({ icon, title, abstract }) => {
    return (
        <div className="mt-10 flex flex-col justify-center items-start bg-white border border-gray-200 shadow-lg rounded-lg w-[360px] h-[170px] px-9">
            <div className="mb-2 text-[30px] text-[#006677]">{icon}</div>
            <h3 className="font-bold text-[20px] text-[#1C1C1E]">{title}</h3>
            <p className="font-semibold text-[#363534] text-left">{abstract}</p>
        </div>
    );
};
