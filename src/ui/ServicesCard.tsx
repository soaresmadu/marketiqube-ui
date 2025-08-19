import React, { type ReactNode } from "react";

type ServicesCardProps = {
    icon: ReactNode;
    title: string;
    abstract: string;
};

export const ServicesCard: React.FC<ServicesCardProps> = ({ icon, title, abstract }) => {
    return (
        <div
            className="
                mt-10 flex flex-col justify-center items-start 
                bg-white border border-gray-200 shadow-lg rounded-lg 
                w-[360px] h-[170px] px-6 py-4
                dark:bg-[#080f04] dark:shadow-custom-dark dark:border-none
                transition-colors duration-300
                sm:w-full sm:h-auto
            "
        >
            <div className="mb-2 text-[30px] text-[#4f9e22]">{icon}</div>
            <h3 className="font-bold text-[20px] text-gray-900 dark:text-white">{title}</h3>
            <p className="font-semibold text-left text-gray-700 dark:text-gray-300">{abstract}</p>
        </div>
    );
};
