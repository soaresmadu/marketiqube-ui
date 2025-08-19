// src/components/Faq.tsx
import { useEffect, useState } from "react";
import { Button } from "../ui/Button";
import type { QuestionsFaq } from "../interfaces/interfaces";
import { faqData } from "../data/faqData";
import { IoIosArrowUp, IoIosArrowDown } from "react-icons/io";

const Faq: React.FC = () => {
    const [questions, setQuestions] = useState<QuestionsFaq[]>([]);
    const [openIndex, setOpenIndex] = useState<number | null>(null);

    useEffect(() => {
        setQuestions(faqData);
    }, []);

    const toggleQuestion = (index: number) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    return (
        <div className="mt-20 mb-10 w-full flex justify-center items-center">
            <div className="w-[1200px]">
                <div className="w-[900px]">
                    <Button text="Perguntas Frequentes" />
                    <h3 className="mb-2 font-bold text-[24px]">
                        Tudo o que você precisa saber em um só lugar
                    </h3>
                    <span className="text-[17px] text-left">
                        Para tornar sua experiência mais prática e transparente,
                        reunimos respostas para as questões mais recorrentes de nossos clientes.
                    </span>
                </div>

                <div className="w-full mt-7 flex flex-col gap-4">
                    {questions.map((item, index) => (
                        <div
                            key={index}
                            className="border rounded-xl border-gray-300 cursor-pointer"
                            data-aos="zoom-in"
                        >
                            <div
                                className="p-4 flex justify-between items-center rounded-xl hover:bg-gray-100 dark:hover:bg-[#181717] transition-colors"
                                onClick={() => toggleQuestion(index)}
                            >
                                <p className="text-[18px] font-medium">{item.question}</p>
                                <span className="text-xl">
                                    {openIndex === index ? <IoIosArrowUp /> : <IoIosArrowDown />}
                                </span>
                            </div>

                            {openIndex === index && (
                                <div className="p-4 w-full border-t border-gray-300">
                                    <p className="mt-2 text-[17px] font-medium text-gray-700 dark:text-[#cfcfcf]">
                                        {item.answer}
                                    </p>
                                </div>
                            )}
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Faq;
