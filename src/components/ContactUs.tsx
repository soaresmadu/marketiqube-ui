import { Button } from "../ui/Button";
import React from "react";

const Contact: React.FC = () => {
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
  };

  return (
    <div className="mt-20 mb-10 w-full flex justify-center items-center">
      <div className="w-[1200px]">
        <div className="w-[900px]">
          <Button text="Contato" />
          <h3 className="mb-2 font-bold text-[24px]">
            Entre em contato com a MarketiQube
          </h3>
          <p className="text-[17px] text-left">
            Queremos entender suas necessidades e ajudar seu projeto a alcançar novos resultados.
          </p>
          <p className="text-[17px] text-left">
            Fale conosco agora mesmo.
          </p>
        </div>

        <form onSubmit={handleSubmit} className="flex flex-col justify-center items-start mt-5">
          <label htmlFor="subject" className="mt-5 text-[17px]">Assunto:</label>
          <input
            type="text"
            name="subject"
            id="subject"
            className="mt-1 w-[650px] h-[50px] border border-gray-300 rounded-md px-2 py-1 focus:outline-none focus:ring-2 focus:ring-[#4f9e22] dark:bg-[#080f04]"
          />

          <label htmlFor="message" className="mt-5 text-[17px]">Mensagem:</label>
          <textarea
            name="message"
            id="message"
            className="w-[650px] min-h-[100px] max-h-[100px] mt-1 border border-gray-300 rounded-md px-2 py-1 focus:outline-none focus:ring-2 focus:ring-[#4f9e22] dark:bg-[#080f04]"
          ></textarea>

          <button
            type="submit"
            className="mt-4 w-[130px] h-[40px] py-1.5 px-5 rounded-full bg-[#4f9e22] font-bold text-white cursor-pointer hover:bg-[#38691b] transition-colors"
          >
            Enviar
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
