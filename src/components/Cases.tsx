import { useEffect, useState } from "react";
import type { Case } from "../interfaces/interfaces";
import { casesData } from "../data/casesData";
import { CardTemplate } from "../ui/CardTemplate";

function Cases() {

    const [cases, setCases] = useState<Case[]>([]);

    useEffect(() => {
        setCases(casesData)
    }, [])

    return (
        <>
            <div className="flex flex-wrap justify-center items-center gap-5">
            {cases.map((item, index) => (
                <CardTemplate
                    key={index}
                    title={item.title}
                    description={item.description}
                    client={item.client}
                />
            ))}
            </div>
        </>
    )
}

export default Cases;