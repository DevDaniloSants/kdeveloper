import {
    AwardIcon,
    CircleHelp,
    Home,
    LaptopMinimal,
    Mail,
    Wrench,
} from 'lucide-react';

export const SIDEBAR_DATA = [
    {
        title: 'Home',
        url: '#home',
        icon: Home,
    },
    {
        title: 'Serviços',
        url: '#services',
        icon: Wrench,
    },
    {
        title: 'Projetos',
        url: '#portfolio',
        icon: LaptopMinimal,
    },
    {
        title: 'Qualificações',
        url: '#qualifications',
        icon: AwardIcon,
    },
    {
        title: 'FAQ',
        url: '#faq',
        icon: CircleHelp,
    },
    {
        title: 'Contato',
        url: '#contact',
        icon: Mail,
    },
];
