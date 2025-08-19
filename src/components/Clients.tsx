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
    <section className="mt-20 mb-10 w-full flex justify-center items-center px-6 sm:px-0">
      <div className="max-w-[1200px] w-full">
        <div className="max-w-[900px]">
          <Button text="Alguns de nossos clientes" />
          <h3 className="mb-2 text-[18px] sm:text-[24px] font-bold text-gray-900 dark:text-gray-100">
            Marcas que confiam, resultados que transformam.
          </h3>
        </div>

        <div
          className="mt-7 flex flex-wrap sm:flex-row sm:justify-between gap-2 sm:gap-6"
          data-aos="zoom-in"
        >
          {clients.map((client: Client, index: number) => (
            <ClientsCard
              key={index}
              picture={client.picture}
              title={client.title}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Clients;
