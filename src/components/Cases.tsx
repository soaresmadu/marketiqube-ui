import { useEffect, useState } from "react";
import type { Case } from "../interfaces/interfaces";
import { casesData } from "../data/casesData";
import { CasesCard } from "../ui/CasesCard";

function Cases() {

    const [cases, setCases] = useState<Case[]>([]);

    useEffect(() => {
        setCases(casesData)
    }, [])

    return (
        <>
            <div className="flex flex-wrap justify-center items-center gap-5">
            {cases.map((item, index) => (
                <CasesCard
                    key={index}
                    title={item.title}
                    client={item.client}
                    challenge={item.challenge}
                    soluction={item.soluction}
                    results={item.results}
                />
            ))}
            </div>
        </>
    )
}

export default Cases;