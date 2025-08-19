import { FiGithub } from "react-icons/fi";

const Footer: React.FC = () => {
    return (
        <div className="w-full h-[100px] bg-[#f4f4f4] dark:bg-[#070c04] flex justify-center items-center">
            <div className="w-[1200px] flex justify-between items-center">
                <p>© 2025 MarketiQube. Todos os direitos reservados.</p>
                <span className="flex items-center gap-2">
                    <FiGithub size={20} />
                    <a
                        href="https://github.com/soaresmadu"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:text-[#4f9e22] transition-colors"
                    >
                        soaresmadu
                    </a>
                </span>
            </div>
        </div>
    );
};

export default Footer;
