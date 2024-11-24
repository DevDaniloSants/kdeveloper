import Image from 'next/image';
import { Card, CardContent } from './ui/card';
import SolutionsItemCustom from './solutions-item-custom';

import Link from 'next/link';
import { Badge } from './ui/badge';
import { MailIcon } from 'lucide-react';

const SolutionsSection = () => {
    return (
        <Card className="border-none bg-black p-6 sm:p-14">
            <CardContent className="grid p-0 md:grid-cols-3">
                <div className="space-y-3 md:col-span-2 md:mr-28">
                    <h3 className="text-2xl font-semibold md:max-w-[500px]">
                        Soluções Personalizadas Para
                        <span className="text-primary"> Impulsionar</span> O Seu
                        Negócio
                    </h3>
                    <p className="text-sm font-semibold text-muted-foreground">
                        Lorem ipsum dolor sit, amet consectetur adipisicing
                        elit. Expedita illo magnam impedit rem, itaque
                        recusandae qui, iure nemo accusantium sunt voluptas
                        quaerat iste blanditiis numquam maiores fugiat
                        molestiae. Earum, distinctio?
                    </p>
                    <div className="grid w-full grid-cols-1 gap-7 sm:grid-cols-2">
                        <div className="col-span-1 space-y-7">
                            <SolutionsItemCustom name="Performace" />
                            <SolutionsItemCustom name="Security" />
                            <SolutionsItemCustom name="Usability" />
                            <SolutionsItemCustom name="Scalability" />
                        </div>
                        <div className="col-span-1 space-y-7">
                            <SolutionsItemCustom name="Responsive Design" />
                            <SolutionsItemCustom name="SEO" />
                            <SolutionsItemCustom name="Maintainability" />
                            <SolutionsItemCustom name="Browser Compatibility" />
                        </div>
                    </div>
                </div>
                <div className="mt-6 flex flex-col items-center justify-center gap-2 lg:mt-0">
                    <Image
                        src="/techInnovation.png"
                        alt="Tecnologias inovadoras"
                        width={300}
                        height={260}
                        className="w-[280px] object-cover"
                    />

                    <Link href="mailto:kdeveloper@gmail.com">
                        <Badge
                            variant="outline"
                            className="flex w-full gap-2 rounded-[8px] p-2 sm:w-[256px]"
                        >
                            <div className="rounded-full bg-primary p-2">
                                <MailIcon className="text-primary-foreground" />
                            </div>
                            <div>
                                <span className="font-light text-[#5B5D52]">
                                    Email de contato
                                </span>
                                <p className="font-light">
                                    kdeveloper@gmail.com
                                </p>
                            </div>
                        </Badge>
                    </Link>
                </div>
            </CardContent>
        </Card>
    );
};

export default SolutionsSection;
