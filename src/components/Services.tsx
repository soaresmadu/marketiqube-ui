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
        <div className="mt-10 w-full flex flex-col justify-center items-center">
            <div className="w-[1200px]">
                <div className="w-[900px]" data-aos="fade-right">
                    <Button text="Alguns dos nossos serviços" />
                    <h3 className="mb-2 font-bold text-[24px]">
                        Serviços que transformam resultados
                    </h3>
                    <span className="text-[17px] text-left">
                        Oferecemos soluções estratégicas para ajudar sua empresa a crescer. Desde otimização de SEO até gestão de redes sociais, nossos serviços são pensados para aumentar sua visibilidade, engajar clientes e gerar resultados reais para o seu negócio.
                    </span>
                </div>
                <div className="flex flex-wrap justify-between mt-7 gap-5">
                    {services.map((service, index) => (
                        <div key={index} data-aos="zoom-in">
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
