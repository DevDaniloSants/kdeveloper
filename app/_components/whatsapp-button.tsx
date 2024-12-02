'use client';

import Image from 'next/image';
import { Button } from './ui/button';

const WhatsappButton = () => {
    const openWhatsapp = () => {
        const whatsappUrl = `https://wa.me/${process.env.NEXT_PUBLIC_WHATSAPP_PHONE_NUMBER}`;

        window.open(whatsappUrl, '_blank', 'noopener,noreferrer');
    };

    return (
        <Button
            size="lg"
            variant="outline"
            className="w-full"
            onClick={openWhatsapp}
        >
            <Image src="whatsapp.svg" alt="whatsapp" width={20} height={20} />
            <p>Whatsapp</p>
        </Button>
    );
};

export default WhatsappButton;
