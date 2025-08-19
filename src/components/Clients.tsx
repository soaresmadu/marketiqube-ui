// src/components/Clients.tsx
import { useEffect, useState } from "react";
import type { Client } from "@/interfaces/interfaces";
import { clientsData } from "@/data/clientsData";
import { ClientsCard } from "@/ui/ClientsCard";
import { Button } from "@/ui/Button";

const Clients = () => {
    const [clients, setClients] = useState<Client[]>([]);

    useEffect(() => {
        setClients(clientsData);
    }, []);

    return (
        <div className="mt-20 mb-10 w-full flex justify-center items-center">
            <div className="w-[1200px]">
                <div className="w-[900px]">
                    <Button text="Alguns de nossos clientes" />
                    <h3 className="mb-2 font-bold text-[24px] text-[#1C1C1E]">
                        Marcas que confiam, resultados que transformam.
                    </h3>
                </div>

                <div className="mt-7 w-full flex justify-between items-center gap-5" data-aos="zoom-in">
                    {clients.map((client: Client, index: number) => (
                        <ClientsCard
                            key={index}
                            picture={client.picture}
                            title={client.title}
                        />
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Clients;
