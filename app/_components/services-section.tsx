import { LaptopMinimal, SettingsIcon, ShoppingCartIcon } from 'lucide-react';
import ServiceCardCustom from './service-card-custom';

const ServicesSection = () => {
    return (
        <div className="flex flex-col gap-12">
            <h1 className="text-center text-2xl font-semibold">
                Nossos Diferentes
                <span className="pl-2 font-semibold text-primary">
                    Tipos de Serviço
                </span>
            </h1>
            <div className="flex justify-between">
                <ServiceCardCustom
                    title="E-commerce"
                    description="Criação de lojas virtuais completas.Seguras e escaláveis."
                    icon={<ShoppingCartIcon className="text-primary" />}
                />
                <ServiceCardCustom
                    title="Sites Empresariais"
                    description="Desenvolvimento de sites modernos, rápidos e responsívos, projetados para destacar o seu negócio."
                    icon={<LaptopMinimal className="text-primary" />}
                />
                <ServiceCardCustom
                    title="Software"
                    description="Criação de lojas virtuais completas.Seguras e escaláveis."
                    icon={<SettingsIcon className="text-primary" />}
                />
            </div>
        </div>
    );
};

export default ServicesSection;
