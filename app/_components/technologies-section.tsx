import { Card, CardContent } from './ui/card';

import Image from 'next/image';
import RequestQuoteButton from './request-quote-button';
import { TECHNOLOGIES } from '../_constants/technologies';
import HybridTooltip from './hybrid-tooltip';

const TechnologiesSection = () => {
    return (
        <Card className="border-none bg-black p-6 sm:p-14">
            <CardContent className="grid p-0 md:grid-cols-4">
                <div className="flex h-full flex-col justify-between gap-7 md:col-span-2 md:mr-28 md:gap-12">
                    <div className="mb-4 space-y-3">
                        <h3 className="text-2xl font-semibold md:max-w-[500px]">
                            Tecnologias e linguagens que vamos utilizar
                            <span className="pl-2 text-primary">
                                desenvolvimento do seu projeto
                            </span>
                        </h3>
                        <p className="text-sm font-semibold text-muted-foreground">
                            Domine o futuro digital com as tecnologias e
                            linguagens mais avançadas, cuidadosamente
                            selecionadas para atender às necessidades do seu
                            projeto.
                        </p>
                    </div>
                    <div className="self-auto lg:self-start">
                        <RequestQuoteButton className="w-full" />
                    </div>
                </div>
                <div className="mt-10 flex flex-wrap content-center justify-center gap-12 md:col-span-2 md:mt-0 lg:justify-start">
                    {TECHNOLOGIES.map((technology) => (
                        <HybridTooltip
                            key={technology.id}
                            trigger={
                                <Image
                                    src={technology.src}
                                    alt={technology.name}
                                    width={36}
                                    height={36}
                                    style={{
                                        width: 'auto',
                                    }}
                                    className="opacity-50 transition-transform duration-300 hover:-translate-y-1 hover:opacity-100"
                                />
                            }
                            content={<p>{technology.name}</p>}
                        ></HybridTooltip>
                    ))}
                </div>
            </CardContent>
        </Card>
    );
};

export default TechnologiesSection;
