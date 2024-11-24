import { useSidebarToogle } from '../_utils/useSidebarToogle';
import { Avatar, AvatarImage } from './ui/avatar';
import {
    Card,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from './ui/card';
import Image from 'next/image';
import Link from 'next/link';

interface CardUserSidebarProps {
    name: string;
    description: string;
    image: string;
    linkedinUrl: string;
    githubUrl: string;
}

const CardUserSidebar = ({
    name,
    description,
    image,
    linkedinUrl,
    githubUrl,
}: CardUserSidebarProps) => {
    const { isSidebarOpen } = useSidebarToogle();

    return (
        <Card className="grid grid-cols-5 items-center border-none p-0">
            <Avatar className="col-span-1">
                <AvatarImage src={image} alt={name} />
            </Avatar>
            {isSidebarOpen && (
                <>
                    <CardHeader className="col-span-3">
                        <CardTitle className="text-center text-xs">
                            {name}
                        </CardTitle>
                        <CardDescription className="text-center text-xs">
                            {description}
                        </CardDescription>
                    </CardHeader>
                    <CardFooter className="col-span-1 gap-2 p-0">
                        <Link
                            href={linkedinUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <Image
                                src="linkedin.svg"
                                alt="Linkedin"
                                width={20}
                                height={20}
                                className="grayscale transition-all duration-300 hover:grayscale-0"
                            />
                        </Link>
                        <Link
                            href={githubUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <Image
                                src="github.svg"
                                alt="Github"
                                width={20}
                                height={20}
                                className="grayscale transition-all duration-300 hover:grayscale-0"
                            />
                        </Link>
                    </CardFooter>
                </>
            )}
        </Card>
    );
};

export default CardUserSidebar;
