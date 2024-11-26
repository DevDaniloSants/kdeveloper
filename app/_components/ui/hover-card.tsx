'use client';

import * as React from 'react';
import * as HoverCardPrimitive from '@radix-ui/react-hover-card';

import { cn } from '@/app/_lib/utils';

const HoverCard = HoverCardPrimitive.Root;

const HoverCardTrigger = HoverCardPrimitive.Trigger;

const HoverCardContent = React.forwardRef<
    React.ElementRef<typeof HoverCardPrimitive.Content>,
    React.ComponentPropsWithoutRef<typeof HoverCardPrimitive.Content>
>(({ className, align = 'center', sideOffset = 2, ...props }, ref) => (
    <HoverCardPrimitive.HoverCardPortal>
        <HoverCardPrimitive.Content
            ref={ref}
            align={align}
            side="bottom"
            sideOffset={sideOffset}
            style={{ margin: '0' }}
            className={cn(
                'z-50 rounded-md border bg-popover p-4 text-popover-foreground shadow-md outline-none data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95',
                className
            )}
            {...props}
        />
    </HoverCardPrimitive.HoverCardPortal>
));
HoverCardContent.displayName = HoverCardPrimitive.Content.displayName;

export { HoverCard, HoverCardTrigger, HoverCardContent };
