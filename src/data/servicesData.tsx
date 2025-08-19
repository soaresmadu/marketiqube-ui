import type { Service } from "../interfaces/interfaces"
import { GiTalk } from "react-icons/gi";
import { TiSocialInstagram } from "react-icons/ti";
import { FaDigitalOcean } from "react-icons/fa6";
import { RiTeamFill } from "react-icons/ri";
import { FaDigitalTachograph } from "react-icons/fa";
import { GrTasks } from "react-icons/gr";

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
    {
        icon: <RiTeamFill />,
        title: "Treinamentos e Workshops",
        abstract: "Workshops práticos para criação e otimização de campanhas.",
    },
    {
        icon: <FaDigitalTachograph />,
        title: "Publicidade Digital",
        abstract: "Planejamento e execução de campanhas digitais.",
    },
    {
        icon: <GrTasks />,
        title: "Produção de Conteúdo",
        abstract: "Estratégias de conteúdo alinhadas ao funil de vendas.",
    },
]