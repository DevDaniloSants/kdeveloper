'use client';

import Image from 'next/image';
import RequestQuoteButton from './request-quote-button';
import { motion } from 'framer-motion';
import WhatsappButton from './whatsapp-button';

const Banner = () => {
    return (
        <div
            id="#home"
            className="flex h-auto flex-row items-center justify-between pb-10 lg:h-dvh"
        >
            <div className="flex w-full flex-col md:!max-w-[580px]">
                <motion.h3
                    className="text-base font-semibold text-muted-foreground md:text-xl"
                    initial={{ opacity: 0, y: -100 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -100 }}
                    transition={{ duration: 0.7 }}
                >
                    Desenvolvimento de sites
                </motion.h3>
                <motion.h1
                    className="pb-2 text-4xl font-semibold text-primary md:text-5xl"
                    initial={{ opacity: 0, x: 100 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: 100 }}
                    transition={{ duration: 0.7, delay: 0.3 }}
                >
                    Transforme suas ideias em realidade digital
                </motion.h1>
                <motion.p
                    className="w-full text-xs font-medium md:max-w-[580px] md:text-sm"
                    initial={{ opacity: 0, x: -100 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -100 }}
                    transition={{ duration: 0.7, delay: 0.5 }}
                >
                    Dê vida à sua visão com nossos serviços de desenvolvimento!
                    Oferecemos soluções personalizadas em site, e-commerce e
                    software, tudo com design exclusivo e entrega pontual.
                </motion.p>
                <motion.div
                    className="mt-6 flex flex-wrap gap-2 sm:justify-between md:flex md:w-[400px] md:flex-nowrap md:justify-start md:gap-8"
                    initial={{ opacity: 0, y: 100 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 100 }}
                    transition={{ duration: 0.7, delay: 0.8 }}
                >
                    <RequestQuoteButton className="w-full" />
                    <WhatsappButton />
                </motion.div>
            </div>
            <motion.div
                className="relative hidden w-[350px] before:absolute before:h-[300px] before:w-full before:rounded-full before:bg-primary before:opacity-10 before:blur-2xl before:content-[''] md:block"
                initial={{ opacity: 0, x: 100 }}
                whileInView={{
                    opacity: 1,
                    x: 0,

                    transition: {
                        duration: 1,
                    },
                }}
                exit={{ opacity: 0, x: 100 }}
                transition={{ duration: 0.7, delay: 1 }}
            >
                <motion.div
                    initial={{ y: 0 }}
                    whileInView={{
                        y: ['-10px', '10px', '-10px'],
                    }}
                    transition={{
                        duration: 5,
                        repeat: Infinity,
                        repeatType: 'loop',
                    }}
                >
                    <Image
                        priority
                        src="/phone_image.webp"
                        alt="banner"
                        width={500}
                        height={700}
                        className="w-full object-cover"
                    />
                </motion.div>
            </motion.div>
        </div>
    );
};

export default Banner;
