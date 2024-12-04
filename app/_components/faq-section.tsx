'use client';
import { FAQ_DATA } from '../_constants/faq';
import FAQAccordionCustom from './faq-accordion-custom';
import { motion } from 'framer-motion';

const FAQSection = () => {
    const firstHalf = FAQ_DATA.slice(0, 4);
    const secondHalf = FAQ_DATA.slice(4);

    return (
        <div id="faq" className="space-y-12">
            <h1 className="text-center text-2xl font-semibold">
                Perguntas
                <span className="pl-2 font-semibold text-primary">
                    Frequentes
                </span>
            </h1>
            <div className="grid gap-8 md:grid-cols-2 md:gap-12">
                <motion.div
                    initial={{
                        opacity: 0,
                        x: -100,
                    }}
                    whileInView={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -100 }}
                    transition={{ duration: 0.5 }}
                    className="space-y-8"
                >
                    {firstHalf.map((faq) => (
                        <FAQAccordionCustom key={faq.id} {...faq} />
                    ))}
                </motion.div>
                <motion.div
                    initial={{
                        opacity: 0,
                        x: 100,
                    }}
                    whileInView={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: 100 }}
                    transition={{ duration: 0.5 }}
                    className="space-y-8"
                >
                    {secondHalf.map((faq) => (
                        <FAQAccordionCustom key={faq.id} {...faq} />
                    ))}
                </motion.div>
            </div>
        </div>
    );
};

export default FAQSection;
