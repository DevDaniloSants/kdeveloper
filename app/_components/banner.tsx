import Image from 'next/image';
import { Button } from './ui/button';

const Banner = () => {
    return (
        <div className="flex w-full !max-w-[1200px] flex-row items-center justify-between">
            <div className="flex w-full flex-col md:!max-w-[580px]">
                <h3 className="text-base font-semibold text-muted-foreground md:text-xl">
                    Desenvolvimento de sites
                </h3>
                <h1 className="pb-2 text-4xl font-semibold text-primary md:text-5xl">
                    Transforme suas ideias em realidade digital
                </h1>
                <p className="w-full text-xs font-medium md:max-w-[440px]">
                    Dê vida à sua visão com nossos serviços de desenvolvimento!
                    Oferecemos soluções personalizadas em site, e-commerce e
                    software, tudo com design exclusivo e entrega pontual.
                </p>
                <div className="mt-6 flex flex-wrap justify-end gap-2 md:flex md:justify-start md:gap-2">
                    <Button size="lg" className="w-full sm:w-auto">
                        Solicitar orçamento
                    </Button>
                    <Button
                        size="lg"
                        variant="outline"
                        className="w-full sm:w-auto"
                    >
                        Whatsapp
                    </Button>
                </div>
            </div>
            <div className="hidden w-[300px] md:block">
                <Image
                    property="priority"
                    src="bannerImage.svg"
                    alt="banner"
                    width={100}
                    height={100}
                    className="w-full"
                />
            </div>
        </div>
    );
};

export default Banner;
