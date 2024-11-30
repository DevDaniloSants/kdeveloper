import { FAQ_DATA } from '../_constants/faq';
import FAQAccordionCustom from './faq-accordion-custom';

const FAQSection = () => {
    const firstHalf = FAQ_DATA.slice(0, 4);
    const secondHalf = FAQ_DATA.slice(4);

    return (
        <div className="space-y-12">
            <h1 className="text-center text-2xl font-semibold">
                Perguntas
                <span className="pl-2 font-semibold text-primary">
                    Frequentes
                </span>
            </h1>
            <div className="grid md:grid-cols-2 md:gap-12">
                <div>
                    {firstHalf.map((faq) => (
                        <FAQAccordionCustom key={faq.id} {...faq} />
                    ))}
                </div>
                <div>
                    {secondHalf.map((faq) => (
                        <FAQAccordionCustom key={faq.id} {...faq} />
                    ))}
                </div>
            </div>
        </div>
    );
};

export default FAQSection;
