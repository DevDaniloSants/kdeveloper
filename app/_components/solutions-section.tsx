'use client';

import Image from 'next/image';
import { Card, CardContent } from './ui/card';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { Badge } from './ui/badge';
import { MailIcon } from 'lucide-react';

import SolutionsItemCustom from './solutions-item-custom';
import { SOLUTIONS_DATA } from '../_constants/solutions';

const SolutionsSection = () => {
    return (
        <motion.div
            initial={{ opacity: 0, scale: 0 }}
            whileInView={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0 }}
            transition={{ duration: 0.5 }}
        >
            <Card className="border-none bg-black p-6 sm:p-14">
                <CardContent className="grid p-0 md:grid-cols-3">
                    <div className="space-y-3 md:col-span-2 md:mr-28">
                        <h3 className="text-2xl font-semibold md:max-w-[500px]">
                            Soluções Personalizadas Para
                            <span className="pl-1 text-primary">
                                Impulsionar
                            </span>{' '}
                            O Seu Negócio
                        </h3>
                        <p className="text-sm font-semibold text-muted-foreground">
                            Transformamos desafios em oportunidades, oferecendo
                            soluções inovadoras para impulsionar o crescimento e
                            a eficiência do seu negócio.
                        </p>
                        <div className="grid w-full grid-cols-1 gap-7 sm:grid-cols-2">
                            {SOLUTIONS_DATA.map((solution, index) => (
                                <SolutionsItemCustom
                                    key={solution.id}
                                    name={solution.name}
                                    initial={{ opacity: 0, scale: 0 }}
                                    whileInView={{ opacity: 1, scale: 1 }}
                                    exit={{ opacity: 0, scale: 0 }}
                                    transition={{
                                        duration: 0.2,
                                        delay: index * 0.3,
                                    }}
                                />
                            ))}
                        </div>
                    </div>
                    <motion.div
                        className="mt-6 flex flex-col items-center justify-center gap-2 lg:mt-0"
                        initial={{ opacity: 0, x: 100 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: 100 }}
                        transition={{ duration: 0.5, delay: 1 }}
                    >
                        <Image
                            src="/techInnovation.webp"
                            alt="Tecnologias inovadoras"
                            width={220}
                            height={200}
                            className="w-[260px] object-cover"
                        />

                        <Link href="mailto:kdeveloper@gmail.com">
                            <Badge
                                variant="outline"
                                className="flex w-full gap-2 rounded-[8px] p-2 sm:w-[256px]"
                            >
                                <div className="rounded-full bg-primary p-2">
                                    <MailIcon className="text-primary-foreground" />
                                </div>
                                <div>
                                    <span className="font-light text-[#5B5D52]">
                                        Email de contato
                                    </span>
                                    <p className="font-light">
                                        kdeveloper@gmail.com
                                    </p>
                                </div>
                            </Badge>
                        </Link>
                    </motion.div>
                </CardContent>
            </Card>
        </motion.div>
    );
};

export default SolutionsSection;
