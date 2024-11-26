'use client';
import { useRef } from 'react';
import { Card, CardContent } from './ui/card';
import { Carousel, CarouselContent, CarouselItem } from './ui/carousel';
import Autoplay from 'embla-carousel-autoplay';
import Image from 'next/image';
import { PROJECTS_DATA } from '../_constants/projectsData';
import { HoverCard, HoverCardContent, HoverCardTrigger } from './ui/hover-card';
import { Badge } from './ui/badge';
import { Arrow } from '@radix-ui/react-hover-card';
import Link from 'next/link';
import { Button } from './ui/button';

const ProjectsSection = () => {
    const plugin = useRef(
        Autoplay({
            delay: 2000,
            stopOnInteraction: false,
            stopOnMouseEnter: true,
        })
    );
    return (
        <div className="flex w-full flex-col gap-12">
            <h1 className="text-center text-2xl font-semibold">
                Explore nossos
                <span className="pl-2 font-semibold text-primary">
                    Projetos
                </span>
            </h1>

            <Carousel
                className="w-full max-w-[1200px] cursor-grabbing"
                plugins={[plugin.current]}
            >
                <CarouselContent className="group">
                    {PROJECTS_DATA.map((project) => (
                        <CarouselItem
                            className="pl-1 md:basis-1/2 lg:basis-1/3"
                            key={project.id}
                        >
                            <HoverCard>
                                <Card className="border-none object-cover grayscale duration-500 hover:grayscale-0">
                                    <CardContent className="flex aspect-square items-center justify-center p-6">
                                        <HoverCardTrigger asChild>
                                            <Image
                                                src={project.image}
                                                alt={project.title}
                                                width={500}
                                                height={500}
                                                className="h-full w-full rounded-md object-cover"
                                            />
                                        </HoverCardTrigger>
                                    </CardContent>
                                </Card>

                                <HoverCardContent className="flex w-dvw flex-col gap-4 border-white/10 bg-black md:w-[500px]">
                                    <div>
                                        <h5 className="font-semibold">
                                            {project.title}
                                        </h5>
                                        <span className="w-4/5 text-sm font-normal lg:w-full">
                                            {project.description}
                                        </span>
                                    </div>
                                    <div className="flex flex-wrap gap-2">
                                        {project.technologies.map((tech) => (
                                            <Badge
                                                key={tech.id}
                                                className="border-border bg-white/10 text-xs font-light text-white"
                                            >
                                                {tech.name}
                                            </Badge>
                                        ))}
                                    </div>
                                    <Button
                                        size="lg"
                                        className="self-end"
                                        asChild
                                    >
                                        <Link
                                            href={project.link}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                        >
                                            Ver Projeto
                                        </Link>
                                    </Button>

                                    <Arrow width={8} height={8} />
                                </HoverCardContent>
                            </HoverCard>
                        </CarouselItem>
                    ))}
                </CarouselContent>
            </Carousel>
        </div>
    );
};

export default ProjectsSection;
