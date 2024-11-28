'use client';

import { CheckIcon } from 'lucide-react';
import { motion, MotionProps } from 'framer-motion';

interface SolutionsItemCustomProps extends MotionProps {
    name: string;
}

const SolutionsItemCustom = ({ name, ...props }: SolutionsItemCustomProps) => {
    return (
        <motion.div className="flex gap-1" {...props}>
            <CheckIcon className="text-primary" />
            <p className="text-xs font-semibold sm:text-sm">{name}</p>
        </motion.div>
    );
};

export default SolutionsItemCustom;
