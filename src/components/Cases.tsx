import { useEffect, useState } from "react";
import { Case } from "@/interfaces/interfaces";
import { casesData } from "@/data/casesData";
import { CasesCard } from "@/ui/CasesCard";
import { Button } from "@/ui/Button";

const Cases = () => {
    const [cases, setCases] = useState<Case[]>([]);

    useEffect(() => {
        setCases(casesData);
    }, []);

    return (
        <div className="mt-20 mb-10 w-full flex justify-center items-center">
            <div className="w-full max-w-[1200px] px-6 sm:px-0">
                <div className="w-full max-w-[900px]">
                    <Button text="Alguns dos nossos cases de sucesso" />
                    <h3 className="mb-2 font-bold text-[18px] sm:text-[24px]">
                        Resultados que falam por nós
                    </h3>
                    <span className="text-[15px] sm:text-[17px] text-left">
                        Explore nossos cases de sucesso e veja como ajudamos empresas de diferentes setores a crescer. Através de estratégias digitais personalizadas, otimizamos resultados, aumentamos o engajamento e fortalecemos a presença online de cada cliente, gerando impactos reais e duradouros.
                    </span>
                </div>

                <div className="mt-7 flex flex-wrap justify-center sm:justify-between items-center gap-5" data-aos="fade-left">
                    {cases.map((item: Case, index: number) => (
                        <CasesCard
                            key={index}
                            title={item.title}
                            client={item.client}
                            challenge={item.challenge}
                            solution={item.solution}
                            results={item.results}
                        />
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Cases;
