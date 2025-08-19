import React from "react";
import Image from "next/image";

type ClientsCardProps = {
    picture: string;
    title: string;
};

export const ClientsCard: React.FC<ClientsCardProps> = ({ title, picture }) => {
    return (
        <div className="flex flex-col justify-center items-center bg-white border border-gray-200 shadow-lg rounded-lg w-[200px] h-[200px]">
            <div className="w-[100px] h-[100px] rounded-full relative overflow-hidden">
                <Image
                    src={picture}
                    alt={title}
                    fill
                    className="object-cover"
                />
            </div>
            <h3 className="text-[16px] font-bold text-center mt-2">{title}</h3>
        </div>
    );
};
