import { Badge } from './ui/badge';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { ReactNode } from 'react';

interface ServiceCardCustomProps {
    title: string;
    description: string;
    icon: ReactNode;
}

const ServiceCardCustom = ({
    title,

    description,
    icon,
}: ServiceCardCustomProps) => {
    return (
        <Card className="flex h-[260px] max-w-[380px] flex-col items-center justify-center gap-3 border-border bg-white bg-opacity-5 p-6 duration-500 hover:bg-white/10">
            <CardHeader className="flex flex-col items-center gap-5 p-0">
                <Badge className="rounded-full bg-white bg-opacity-5 p-4">
                    {icon}
                </Badge>
                <CardTitle className="text-xl">{title}</CardTitle>
            </CardHeader>

            <CardContent className="h-8 p-0 text-center text-sm">
                {description}
            </CardContent>
        </Card>
    );
};

export default ServiceCardCustom;
