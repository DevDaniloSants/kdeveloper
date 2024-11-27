'use client';

import { useEffect, useState } from 'react';

import { Popover, PopoverTrigger, PopoverContent } from './ui/popover';
import { HoverCard, HoverCardContent } from './ui/hover-card';
import { HoverCardTrigger } from '@radix-ui/react-hover-card';
import { Card, CardContent } from './ui/card';

type HybridHoverCardProps = {
    trigger: React.ReactNode;
    children: React.ReactNode;
};

const HybridCardHover = ({ trigger, children }: HybridHoverCardProps) => {
    const [isTouch, setIsTouch] = useState(false);

    useEffect(() => {
        const mediaQuery = window.matchMedia('(pointer: coarse)');
        const handleChange = () => setIsTouch(mediaQuery.matches);

        setIsTouch(mediaQuery.matches);

        mediaQuery.addEventListener('change', handleChange);

        return () => mediaQuery.removeEventListener('change', handleChange);
    }, []);

    return isTouch ? (
        <Popover>
            <Card className="border-none object-cover grayscale duration-500 hover:grayscale-0">
                <CardContent className="flex aspect-square items-center justify-center p-6">
                    <PopoverTrigger asChild>{trigger}</PopoverTrigger>
                    <PopoverContent className="flex w-dvw flex-col gap-4 border-white/10 bg-black">
                        {children}
                    </PopoverContent>
                </CardContent>
            </Card>
        </Popover>
    ) : (
        <HoverCard>
            <Card className="border-none object-cover grayscale duration-500 hover:grayscale-0">
                <CardContent className="flex aspect-square items-center justify-center p-6">
                    <HoverCardTrigger asChild>{trigger}</HoverCardTrigger>
                    <HoverCardContent className="flex flex-col gap-4 border-white/10 bg-black md:w-[500px]">
                        {children}
                    </HoverCardContent>
                </CardContent>
            </Card>
        </HoverCard>
    );
};

export default HybridCardHover;
