import React from "react";
import Image from "next/image";

type TestimonialsCardProps = {
    text: string;
    client: string;
    picture: string;
};

export const TestimonialsCard: React.FC<TestimonialsCardProps> = ({ text, client, picture }) => {
    return (
        <div className="mb-12 flex flex-col justify-center items-center bg-white border border-gray-200 shadow-lg rounded-lg w-[800px] h-[170px] px-9">
            <div className="mb-4 flex justify-center items-center gap-5">
                <div className="min-w-[90px] h-[90px] rounded-full overflow-hidden relative">
                    <Image
                        src={picture}
                        alt={client}
                        fill
                        className="object-cover"
                    />
                </div>
                <p className="text-right">{text}</p>
            </div>
            <h3>{client}</h3>
        </div>
    );
};
