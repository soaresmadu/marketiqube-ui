import type { Service } from "../interfaces/interfaces"
import { GiTalk } from "react-icons/gi";
import { TiSocialInstagram } from "react-icons/ti";
import { FaDigitalOcean } from "react-icons/fa6";

export const serviceData: Service[] = [
    {
        icon: <GiTalk />,
        title: "Consultoria em SEO",
        abstract: "Otimização para melhorar o posicionamento no Google.",
    },
    {
        icon: <TiSocialInstagram />,
        title: "Gestão de Redes Sociais",
        abstract: "Planejamento e criação de conteúdo para fortalecer a marca.",
    },
        {
        icon: <FaDigitalOcean />,
        title: "Branding Digital",
        abstract: "Identidade e presença online para engajar e fortalecer sua marca.",
    },
]