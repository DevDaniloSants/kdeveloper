'use client';

import ServiceCardCustom from './service-card-custom';
import { SERVICE_CARD_DATA } from '../_constants/services';
import { Carousel, CarouselContent, CarouselItem } from './ui/carousel';
import { useRef } from 'react';
import Autoplay from 'embla-carousel-autoplay';

const ServicesSection = () => {
    const plugin = useRef(
        Autoplay({
            delay: 2000,
            stopOnInteraction: false,
            stopOnMouseEnter: true,
        })
    );
    return (
        <div className="flex flex-col gap-12">
            <h1 className="text-center text-2xl font-semibold">
                Nossos Diferentes
                <span className="pl-2 font-semibold text-primary">
                    Tipos de Serviço
                </span>
            </h1>
            <div className="flex gap-2">
                <Carousel
                    className="max-w-1200px w-full"
                    plugins={[plugin.current]}
                >
                    <CarouselContent>
                        {SERVICE_CARD_DATA.map((service) => (
                            <CarouselItem
                                key={service.id}
                                className="cursor-grabbing md:basis-1/2 lg:basis-1/3 lg:cursor-default"
                            >
                                <div className="p-1">
                                    <ServiceCardCustom
                                        title={service.title}
                                        description={service.description}
                                        icon={service.icon}
                                    />
                                </div>
                            </CarouselItem>
                        ))}
                    </CarouselContent>
                </Carousel>
            </div>
        </div>
    );
};

export default ServicesSection;
