import Image from 'next/image';
import { Button } from './ui/button';
import RequestQuoteButton from './request-quote-button';

const Banner = () => {
    return (
        <div className="flex flex-row items-center justify-between pb-10">
            <div className="flex w-full flex-col md:!max-w-[580px]">
                <h3 className="text-base font-semibold text-muted-foreground md:text-xl">
                    Desenvolvimento de sites
                </h3>
                <h1 className="pb-2 text-4xl font-semibold text-primary md:text-5xl">
                    Transforme suas ideias em realidade digital
                </h1>
                <p className="w-full text-xs font-medium md:max-w-[580px] md:text-sm">
                    Dê vida à sua visão com nossos serviços de desenvolvimento!
                    Oferecemos soluções personalizadas em site, e-commerce e
                    software, tudo com design exclusivo e entrega pontual.
                </p>
                <div className="mt-6 flex flex-wrap gap-2 sm:justify-between md:flex md:w-[400px] md:flex-nowrap md:justify-start md:gap-8">
                    <RequestQuoteButton className="w-full" />
                    <Button size="lg" variant="outline" className="w-full">
                        <Image
                            src="whatsapp.svg"
                            alt="whatsapp"
                            width={20}
                            height={20}
                        />
                        <p>Whatsapp</p>
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
                    className="w-full animate-pulse"
                />
            </div>
        </div>
    );
};

export default Banner;
