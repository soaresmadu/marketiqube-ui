import React from "react";
import Image from "next/image";

type TestimonialsCardProps = {
    text: string;
    client: string;
    picture: string;
};

export const TestimonialsCard: React.FC<TestimonialsCardProps> = ({ text, client, picture }) => {
    return (
        <div className="mb-20 sm:mb-12 flex flex-col justify-center items-center 
                        bg-white border border-gray-200 shadow-lg rounded-lg 
                        w-full h-full
                        sm:w-[900px] sm:h-[200px] px-6 py-6
                        dark:bg-[#080f04] dark:shadow-custom-dark dark:border-none">

            <div className="mb-4 flex flex-col sm:flex-row justify-center items-center gap-5">
                <div className="w-[70px] h-[70px] sm:w-[100px] sm:h-[100px] sm:mr-3 rounded-full overflow-hidden relative">
                    <Image
                        src={picture}
                        alt={client}
                        width={100}
                        height={100}
                        className="object-cover"
                    />
                </div>
                <p className="text-[12px] sm:text-[16px] text-center sm:text-left max-w-[600px]">
                    {text}
                </p>
            </div>

            <h3 className="text-[12px] sm:text-[16px] font-semibold text-center sm:text-left">{client}</h3>
        </div>
    );
};
