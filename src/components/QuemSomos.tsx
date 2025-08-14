import { Button } from "../ui/Button"

function QuemSomos() {
    return (
        <>
            <div className="mt-10 w-full h-screen flex justify-center items-center">
                <div className="w-[950px] flex flex-col justify-center items-center">
                    <Button text="MarketQube" />
                    <h3 className="mb-2 font-bold text-[24px] text-[#1C1C1E] text-center">Onde marketing encontra inteligência</h3>
                    <p className="text-[17px] text-center">MarketiQube é uma empresa fictícia de consultoria em marketing digital que oferece soluções inteligentes baseadas em dados para otimizar campanhas, aumentar o engajamento e gerar resultados reais para seus clientes. O foco é combinar criatividade com análise estratégica para entregar crescimento sólido e sustentável.</p>
                </div>
            </div>
        </>
    )
}

export default QuemSomos