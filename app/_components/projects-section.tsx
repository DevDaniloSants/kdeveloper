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
                                            <Link
                                                href={project.link}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="group-active:cursor-grabbing"
                                            >
                                                <Image
                                                    src={project.image}
                                                    alt={project.title}
                                                    width={500}
                                                    height={500}
                                                    className="h-full w-full rounded-md object-cover"
                                                />
                                            </Link>
                                        </HoverCardTrigger>
                                    </CardContent>
                                </Card>

                                <HoverCardContent className="flex w-dvw gap-2 border-none bg-black md:w-[500px]">
                                    <Image
                                        src={project.image}
                                        alt={project.title}
                                        width={50}
                                        height={50}
                                        className="h-[48px] w-[48px] rounded-full"
                                    />

                                    <div className="flex flex-col gap-2">
                                        <p className="text-sm font-semibold">
                                            {project.title}
                                        </p>
                                        <span className="w-4/5 text-sm font-normal lg:w-full">
                                            {project.description}
                                        </span>
                                        <div className="flex flex-wrap gap-2">
                                            {project.technologies.map(
                                                (tech) => (
                                                    <Badge
                                                        key={tech.id}
                                                        className="border-border bg-white/10 text-xs font-light text-white"
                                                    >
                                                        {tech.name}
                                                    </Badge>
                                                )
                                            )}
                                        </div>
                                    </div>
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
