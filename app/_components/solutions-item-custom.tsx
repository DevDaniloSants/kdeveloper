import { CheckIcon } from 'lucide-react';

interface SolutionsItemCustomProps {
    name: string;
}

const SolutionsItemCustom = ({ name }: SolutionsItemCustomProps) => {
    return (
        <div className="flex gap-1">
            <CheckIcon className="text-primary" />
            <p className="text-xs font-semibold sm:text-sm">{name}</p>
        </div>
    );
};

export default SolutionsItemCustom;
