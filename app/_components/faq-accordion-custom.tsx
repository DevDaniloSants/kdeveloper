import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from './ui/accordion';

interface FAQAccordionCustomProps {
    title: string;
    content: string;
}

const FAQAccordionCustom = ({ title, content }: FAQAccordionCustomProps) => {
    return (
        <Accordion type="single" collapsible>
            <AccordionItem value={title}>
                <AccordionTrigger className="text-lg font-bold">
                    {title}
                </AccordionTrigger>
                <AccordionContent>{content}</AccordionContent>
            </AccordionItem>
        </Accordion>
    );
};

export default FAQAccordionCustom;
