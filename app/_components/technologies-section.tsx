'use client';

import { Card, CardContent } from './ui/card';
import { motion } from 'framer-motion';

import Image from 'next/image';
import RequestQuoteButton from './request-quote-button';
import { TECHNOLOGIES_DATA } from '../_constants/technologies';
import HybridTooltip from './hybrid-tooltip';

const TechnologiesSection = () => {
    return (
        <motion.div
            initial={{ opacity: 0, scale: 0 }}
            whileInView={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0 }}
            transition={{ duration: 0.5 }}
        >
            <Card className="border-none bg-black p-6 sm:p-14">
                <CardContent className="grid p-0 md:grid-cols-4">
                    <motion.div
                        className="flex h-full flex-col justify-between gap-7 md:col-span-2 md:mr-28 md:gap-12"
                        initial={{ opacity: 0, x: -200 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: -200 }}
                        transition={{
                            duration: 1,
                            delay: 0.5,
                        }}
                    >
                        <div className="mb-4 space-y-3">
                            <h3 className="text-lg font-semibold md:max-w-[500px] lg:text-2xl">
                                Tecnologias e linguagens que vamos utilizar
                                <span className="pl-2 text-primary">
                                    desenvolvimento do seu projeto
                                </span>
                            </h3>
                            <p className="font-semibold text-muted-foreground md:text-sm">
                                Domine o futuro digital com as tecnologias e
                                linguagens mais avançadas, cuidadosamente
                                selecionadas para atender às necessidades do seu
                                projeto.
                            </p>
                        </div>
                        <div className="w-full lg:self-start">
                            <RequestQuoteButton className="w-full" />
                        </div>
                    </motion.div>
                    <div className="mt-10 flex flex-wrap content-center justify-center gap-12 md:col-span-2 md:mt-0 lg:justify-start">
                        {TECHNOLOGIES_DATA.map((technology, i) => (
                            <motion.div
                                key={technology.id}
                                initial={{ opacity: 0, scale: 0 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                exit={{ opacity: 0, scale: 0 }}
                                transition={{
                                    duration: 0.5,
                                    delay: i * 0.2,
                                }}
                            >
                                <HybridTooltip
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
                            </motion.div>
                        ))}
                    </div>
                </CardContent>
            </Card>
        </motion.div>
    );
};

export default TechnologiesSection;
