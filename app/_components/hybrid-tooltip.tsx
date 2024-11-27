'use client';

import { useEffect, useState } from 'react';
import { Tooltip, TooltipTrigger, TooltipContent } from './ui/tooltip';
import { Popover, PopoverTrigger, PopoverContent } from './ui/popover';

type HybridTooltipProps = {
    trigger: React.ReactNode;
    content: React.ReactNode;
};

const HybridTooltip = ({ trigger, content }: HybridTooltipProps) => {
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
            <PopoverTrigger asChild>{trigger}</PopoverTrigger>
            <PopoverContent className="flex w-fit items-center justify-center bg-zinc-600 p-2 text-sm text-white">
                {content}
            </PopoverContent>
        </Popover>
    ) : (
        <Tooltip>
            <TooltipTrigger asChild>{trigger}</TooltipTrigger>
            <TooltipContent>{content}</TooltipContent>
        </Tooltip>
    );
};

export default HybridTooltip;
