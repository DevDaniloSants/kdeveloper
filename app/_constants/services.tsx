import {
    LaptopMinimal,
    SettingsIcon,
    ShoppingCartIcon,
    TargetIcon,
} from 'lucide-react';

export const SERVICE_DATA = [
    {
        id: 1,
        title: 'E-commerce',
        description:
            'Criação de lojas virtuais completas. Seguras e escaláveis.',
        icon: <ShoppingCartIcon className="text-primary" />,
    },
    {
        id: 2,
        title: 'Site Empresarial',
        description:
            'Desenvolvimento de sites modernos, rápidos e responsivos, projetados para destacar o seu negócio.',
        icon: <LaptopMinimal className="text-primary" />,
    },
    {
        id: 3,
        title: 'Software',
        description:
            'Criação de lojas virtuais completas. Seguras e escaláveis.',
        icon: <SettingsIcon className="text-primary" />,
    },
    {
        id: 4,
        title: 'Landing Page',
        description:
            'Páginas otimizadas para campanhas específicas, projetadas para conversão, geração de leads e promoção de serviços ou produtos.',
        icon: <TargetIcon className="text-primary" />,
    },
];
