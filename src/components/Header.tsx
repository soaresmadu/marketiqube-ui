import { useState } from 'react';
import { SiWikimediafoundation } from "react-icons/si";
import { MdWbSunny } from "react-icons/md";
import { IoMoon } from "react-icons/io5";
import { Link } from 'react-scroll';

const Header = () => {
    const [isDarkMode, setIsDarkMode] = useState(false);
    const [open, setOpen] = useState(false);

    return (
        <div className='w-full h-[85px] flex justify-around items-center bg-[#f4f4f4] sticky top-0 z-50 shadow-lg'>
            <nav className="w-[1200px] flex justify-between items-center">
                <div className='flex items-center gap-3'>
                    <SiWikimediafoundation size={24} color='#006677' />
                    <h3 className='font-bold text-[22px]'>Marketi<span className='text-[#006677]'>Qube</span></h3>
                </div>

                <div className='w-[700px] flex justify-between items-center text-[17px] font-semibold'>
                    {["quem-somos", "services", "cases", "testimonials", "faq", "contact"].map((section) => (
                        <Link
                            key={section}
                            to={section}
                            smooth={true}
                            duration={500}
                            offset={-140}
                            className="cursor-pointer hover:text-[#006677]"
                        >
                            {section === "quem-somos" ? "Quem Somos" :
                                section === "services" ? "Serviços" :
                                    section === "cases" ? "Cases" :
                                        section === "testimonials" ? "Depoimentos" :
                                            section === "faq" ? "Perguntas Frequentes" :
                                                "Contato"}
                        </Link>
                    ))}
                </div>

                <div className='flex justify-center items-center gap-3 relative'>
                    <button
                        className="cursor-pointer w-[43px] h-[43px] flex justify-center items-center border border-gray-600 rounded-md hover:bg-gray-200"
                        onClick={() => setOpen(!open)}
                    >
                        {isDarkMode ? <IoMoon size={24} /> : <MdWbSunny size={24} />}
                    </button>

                    {open && (
                        <div className="absolute top-full mt-2 right-0 w-40 bg-[#f4f4f4] rounded-md shadow-lg z-50">
                            <button
                                className="w-full text-left px-4 py-2 flex items-center gap-2 hover:bg-gray-200 cursor-pointer"
                                onClick={() => { setIsDarkMode(false); setOpen(false); }}
                            >
                                <MdWbSunny size={20} /> Modo Claro
                            </button>
                            <button
                                className="w-full text-left px-4 py-2 flex items-center gap-2 hover:bg-gray-200 cursor-pointer"
                                onClick={() => { setIsDarkMode(true); setOpen(false); }}
                            >
                                <IoMoon size={20} /> Modo Escuro
                            </button>
                        </div>
                    )}
                </div>
            </nav>
        </div>
    );
};

export default Header;
