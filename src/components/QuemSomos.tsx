import { Button } from "../ui/Button"

function QuemSomos() {
    return (
        <>
            <div className="w-full h-screen flex justify-center items-center">

                <div className="w-[1200px] flex justify-between items-center">

                    <div className="w-[600px] flex flex-col justify-center items-start">
                        <Button text="MarketQube" />
                        <h3 className="text-left mb-2 font-bold text-[25px] text-[#1C1C1E]">Onde marketing encontra inteligência</h3>
                        <p className="text-left mb-2 text-[18px]">MarketiQube é uma empresa de consultoria em marketing digital que oferece soluções inteligentes baseadas em dados para otimizar campanhas, aumentar o engajamento e gerar resultados reais para seus clientes.</p>
                        <p className="text-left mb-3 text-[16px] font-bold text-[#006677]">O foco é combinar criatividade com análise estratégica para entregar crescimento sólido e sustentável.</p>
                    </div>

                    <div className="w-[400px] flex flex-col justify-center items-end">
                        <p className="text-right mb-3 text-[17px]">alguma imagem vai aparecer aqui</p>
                    </div>

                </div>
            </div>
        </>
    )
}

export default QuemSomos