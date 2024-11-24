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
    return (
        <Card className="flex w-full justify-between border-none p-0 py-2 shadow-none">
            <CardHeader className="flex w-full flex-row gap-2 p-0">
                <Avatar className="">
                    <AvatarImage src={image} alt={name} />
                </Avatar>

                <div>
                    <CardTitle className="text-xs">{name}</CardTitle>
                    <CardDescription className="text-xs">
                        {description}
                    </CardDescription>
                </div>
            </CardHeader>

            <CardFooter className="flex items-center gap-2 p-0">
                <Link
                    href={linkedinUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <Image
                        src="linkedin.svg"
                        alt="Linkedin"
                        width={22}
                        height={22}
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
                        width={22}
                        height={22}
                        className="grayscale transition-all duration-300 hover:grayscale-0"
                    />
                </Link>
            </CardFooter>
        </Card>
    );
};

export default CardUserSidebar;
