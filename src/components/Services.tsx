import { useEffect, useState } from "react";
import type { Service } from "../interfaces/interfaces";
import { serviceData } from "../data/servicesData";
import { ServicesCard } from "../ui/ServicesCard";
import { Button } from "../ui/Button";
import React from "react";

const Services: React.FC = () => {
    const [services, setServices] = useState<Service[]>([]);

    useEffect(() => {
        setServices(serviceData);
    }, []);

    return (
        <div className="mt-10 mb-10 w-full flex flex-col justify-center items-center dark:bg-[#070c04] transition-colors duration-300">
            <div className="w-full max-w-[1200px] px-6 sm:px-0">
                <div className="w-full max-w-[900px] mx-auto sm:m-0" data-aos="fade-right">
                    <Button text="Alguns dos nossos serviços" />
                    <h3 className="mb-2 font-bold text-[18px] sm:text-[24px] text-gray-900 dark:text-white">
                        Serviços que transformam resultados
                    </h3>
                    <span className="text-[15px] sm:text-[17px] text-left text-gray-700 dark:text-gray-300">
                        Oferecemos soluções estratégicas para ajudar sua empresa a crescer. Desde otimização de SEO até gestão de redes sociais, nossos serviços são pensados para aumentar sua visibilidade, engajar clientes e gerar resultados reais para o seu negócio.
                    </span>
                </div>

                <div className="flex flex-wrap justify-between gap-5">
                    {services.map((service, index) => (
                        <div key={index} data-aos="zoom-in" className="w-full sm:w-[360px]">
                            <ServicesCard
                                icon={service.icon}
                                title={service.title}
                                abstract={service.abstract}
                            />
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Services;
