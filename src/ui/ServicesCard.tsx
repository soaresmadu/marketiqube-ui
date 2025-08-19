import React, { type ReactNode } from "react";

type ServicesCardProps = {
    icon: ReactNode;
    title: string;
    abstract: string;
};

export const ServicesCard: React.FC<ServicesCardProps> = ({ icon, title, abstract }) => {
    return (
        <div className="mt-10 flex flex-col justify-center items-start bg-white border border-gray-200 shadow-lg rounded-lg w-[360px] h-[170px] px-9
        dark:bg-[#080f04] dark:shadow-custom-dark dark:border-none
        ">
            <div className="mb-2 text-[30px] text-[#4f9e22]">{icon}</div>
            <h3 className="font-bold text-[20px]">{title}</h3>
            <p className="font-semibold text-left">{abstract}</p>
        </div>
    );
};
