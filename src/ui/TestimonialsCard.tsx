import React from "react";
import Image from "next/image";

type TestimonialsCardProps = {
    text: string;
    client: string;
    picture: string;
};

export const TestimonialsCard: React.FC<TestimonialsCardProps> = ({ text, client, picture }) => {
    return (
        <div className="mb-12 flex flex-col justify-center items-center 
                        bg-white border border-gray-200 shadow-lg rounded-lg 
                        w-full max-w-[800px] px-6 py-6
                        dark:bg-[#080f04] dark:shadow-custom-dark dark:border-none">

            <div className="mb-4 flex flex-col sm:flex-row justify-center items-center sm:items-start gap-4">
                <div className="w-[90px] h-[90px] rounded-full overflow-hidden relative">
                    <Image
                        src={picture}
                        alt={client}
                        width={100}
                        height={100}
                        className="object-cover"
                    />
                </div>
                <p className="text-center sm:text-left text-sm sm:text-base max-w-[600px]">
                    {text}
                </p>
            </div>

            <h3 className="font-semibold text-center sm:text-left">{client}</h3>
        </div>
    );
};
