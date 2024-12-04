import Link from 'next/link';
import { cn } from '../_lib/utils';
import { Button, ButtonProps } from './ui/button';

interface RequestQuoteButtonProps extends ButtonProps {
    className?: string;
}

const RequestQuoteButton = ({ className }: RequestQuoteButtonProps) => {
    return (
        <Button size="lg" className={`${cn(className)} `} asChild>
            <Link href="#contact">Solicitar orçamento</Link>
        </Button>
    );
};

export default RequestQuoteButton;
