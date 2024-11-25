import { Card, CardContent } from './ui/card';

import {
    Tooltip,
    TooltipContent,
    TooltipProvider,
    TooltipTrigger,
} from './ui/tooltip';
import Image from 'next/image';
import RequestQuoteButton from './request-quote-button';

const technologies = [
    {
        id: 1,
        name: 'Figma',
        src: 'figma.svg',
    },
    {
        id: 2,
        name: 'HTML5',
        src: 'html5.svg',
    },
    {
        id: 3,
        name: 'CSS3',
        src: 'CSS3.svg',
    },
    {
        id: 4,
        name: 'Tailwind CSS',
        src: 'tailwindcss.svg',
    },
    {
        id: 5,
        name: 'JavaScript',
        src: 'javascript.svg',
    },
    {
        id: 6,
        name: 'TypeScript',
        src: 'typescript.svg',
    },
    {
        id: 7,
        name: 'React',
        src: 'react.svg',
    },
    {
        id: 8,
        name: 'Redux',
        src: 'Redux.svg',
    },
    {
        id: 9,
        name: 'Next.js',
        src: 'nextjs.svg',
    },
    {
        id: 10,
        name: 'Node.js',
        src: 'nodejs.svg',
    },
    {
        id: 11,
        name: 'Express Js',
        src: 'express.svg',
    },
    {
        id: 12,
        name: 'MySQL',
        src: 'mysql.svg',
    },
    {
        id: 13,
        name: 'PostgreSQL',
        src: 'postgreSQL.svg',
    },
    {
        id: 14,
        name: 'Java',
        src: 'Java.svg',
    },
    {
        id: 15,
        name: 'Spring Boot',
        src: 'springboot.svg',
    },
];

const TechnologiesSection = () => {
    return (
        <Card className="border-none bg-black p-6 sm:p-14">
            <CardContent className="grid p-0 md:grid-cols-4">
                <div className="flex h-full flex-col justify-between gap-7 md:col-span-2 md:mr-28 md:gap-12">
                    <div className="mb-4 space-y-5">
                        <h3 className="text-2xl font-semibold md:max-w-[500px]">
                            Tecnologias e linguagens que vamos utilizar
                            <span className="pl-2 text-primary">
                                desenvolvimento do seu projeto
                            </span>
                        </h3>
                        <p className="text-sm font-semibold text-muted-foreground">
                            Lorem ipsum dolor sit, amet consectetur adipisicing
                            elit. Expedita illo magnam impedit rem, itaque
                            recusandae qui, iure nemo accusantium sunt voluptas
                            quaerat iste blanditiis numquam maiores fugiat
                            molestiae. Earum, distinctio?
                        </p>
                    </div>
                    <div className="self-auto lg:self-start">
                        <RequestQuoteButton className="w-full" />
                    </div>
                </div>
                <div className="mt-7 flex flex-wrap content-center justify-center gap-12 md:col-span-2 md:mt-0 lg:justify-start">
                    {technologies.map((technology) => (
                        <TooltipProvider key={technology.id}>
                            <Tooltip>
                                <TooltipTrigger
                                    asChild
                                    className="!max-h-[48px]"
                                >
                                    <Image
                                        src={technology.src}
                                        alt={technology.name}
                                        width={48}
                                        height={48}
                                        className="opacity-50 transition-transform duration-300 hover:-translate-y-1 hover:opacity-100"
                                    />
                                </TooltipTrigger>
                                <TooltipContent>
                                    <p>{technology.name}</p>
                                </TooltipContent>
                            </Tooltip>
                        </TooltipProvider>
                    ))}
                </div>
            </CardContent>
        </Card>
    );
};

export default TechnologiesSection;
