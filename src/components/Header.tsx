import { SiWikimediafoundation } from "react-icons/si";
import { MdWbSunny } from "react-icons/md";
import { IoMoon } from "react-icons/io5";
import { Link } from 'react-scroll';
import React from "react";
import { HiMenu, HiX } from "react-icons/hi";

type HeaderProps = {
    isDarkMode: boolean;
    setIsDarkMode: (value: boolean) => void;
};

const Header: React.FC<HeaderProps> = ({ isDarkMode, setIsDarkMode }) => {
    const [menuOpen, setMenuOpen] = React.useState(false);

    const sections = ["quem-somos", "services", "cases", "testimonials", "faq", "contact"];

    return (
        <div className='w-full flex justify-center items-center bg-[#f4f4f4] dark:bg-[#070c04] sticky top-0 z-50 shadow-xl'>
            <nav className="w-full max-w-[1200px] flex justify-between items-center px-4 h-[85px]">

                <div className='flex items-center gap-3'>
                    <SiWikimediafoundation size={24} color='#4f9e22' />
                    <h3 className='font-bold text-[22px] text-gray-900 dark:text-white'>
                        Marketi<span className='text-[#4f9e22]'>Qube</span>
                    </h3>
                </div>

                <div className='hidden md:flex gap-6 text-gray-900 dark:text-[#f4f4f4] font-semibold'>
                    {sections.map((section) => (
                        <Link
                            key={section}
                            to={section}
                            smooth={true}
                            duration={500}
                            offset={-140}
                            className="cursor-pointer hover:text-[#4f9e22]"
                        >
                            {section === "quem-somos" ? "Quem Somos" :
                                section === "services" ? "Serviços" :
                                    section === "cases" ? "Cases" :
                                        section === "testimonials" ? "Depoimentos" :
                                            section === "faq" ? "Perguntas Frequentes" : "Contato"}
                        </Link>
                    ))}
                </div>

                <div className='flex items-center gap-3'>
                    <button
                        className="cursor-pointer w-[43px] h-[43px] flex justify-center items-center border border-gray-600 rounded-md hover:bg-gray-200 dark:border-[#f4f4f4] dark:text-[#f4f4f4] dark:hover:bg-[#101010]"
                        onClick={() => setIsDarkMode(!isDarkMode)}
                    >
                        {isDarkMode ? <IoMoon size={24} /> : <MdWbSunny size={24} />}
                    </button>

                    <button
                        className='md:hidden cursor-pointer p-2 rounded-md dark:text-[#f4f4f4] dark:hover:bg-[#101010]'
                        onClick={() => setMenuOpen(!menuOpen)}
                    >
                        {menuOpen ? <HiX size={28} /> : <HiMenu size={28} />}
                    </button>
                </div>

                {menuOpen && (
                    <div className='absolute top-[85px] right-0 w-full md:w-60 bg-[#f4f4f4] dark:bg-[#122009] dark:text-[#f4f4f4] shadow-lg flex flex-col items-start p-4 gap-2 z-50'>
                        {sections.map((section) => (
                            <Link
                                key={section}
                                to={section}
                                smooth={true}
                                duration={500}
                                offset={-140}
                                className="w-full cursor-pointer px-4 py-2 rounded hover:bg-gray-200 dark:hover:bg-[#0d1408]"
                                onClick={() => setMenuOpen(false)}
                            >
                                {section === "quem-somos" ? "Quem Somos" :
                                    section === "services" ? "Serviços" :
                                        section === "cases" ? "Cases" :
                                            section === "testimonials" ? "Depoimentos" :
                                                section === "faq" ? "Perguntas Frequentes" : "Contato"}
                            </Link>
                        ))}
                    </div>
                )}
            </nav>
        </div>
    );
};

export default Header;
