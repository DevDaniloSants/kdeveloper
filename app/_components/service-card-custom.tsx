import { Badge } from './ui/badge';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { ReactNode } from 'react';
import { motion, MotionProps } from 'framer-motion';

interface ServiceCardCustomProps extends MotionProps {
    title: string;
    description: string;
    icon: ReactNode;
}

const ServiceCardCustom = ({
    title,
    description,
    icon,
    ...props
}: ServiceCardCustomProps) => {
    return (
        <motion.div {...props}>
            <Card className="flex h-[260px] flex-col items-center justify-center gap-3 border-border bg-white bg-opacity-5 p-6 duration-500 hover:bg-white/10">
                <CardHeader className="flex flex-col items-center gap-5 p-0">
                    <Badge className="rounded-full bg-white/5 p-4 hover:bg-white/5">
                        {icon}
                    </Badge>
                    <CardTitle className="text-xl">{title}</CardTitle>
                </CardHeader>

                <CardContent className="h-full p-0 text-center text-sm">
                    {description}
                </CardContent>
            </Card>
        </motion.div>
    );
};

export default ServiceCardCustom;
