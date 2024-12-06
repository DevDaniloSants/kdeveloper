import type { Metadata } from 'next';

import './globals.css';

import { Poppins } from 'next/font/google';
import { SidebarProvider } from './_components/ui/sidebar';
import AppSidebar from './_components/app-sidebar';
import Navbar from './_components/navbar';
import { cookies } from 'next/headers';
import { Toaster } from './_components/ui/toaster';

const poppins = Poppins({
    subsets: ['latin'],
    weight: ['400', '500', '600', '700'],
});

export const metadata: Metadata = {
    title: 'KDeveloper - Portfólio',
    description:
        'Kdeveloper é um portfólio digital , especializado em criar soluções personalizadas e inovadoras para impulsionar o sucesso de negócios. Com um conjunto de habilidades em tecnologias modernas e práticas de desenvolvimento ágeis, ofereço serviços sob medida para atender às necessidades específicas dos meus clientes, com foco em desempenho, segurança e escalabilidade. Explore meus projetos e entre em contato para levar o seu negócio a novos patamares digitais.',
};

export default async function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    const cookieStore = await cookies();
    const defaultOpen = cookieStore.get('sidebar:state')?.value === 'true';
    return (
        <html lang="pt-br" className="!scrooll-smooth">
            <body className={`${poppins.className} dark antialiased`}>
                <SidebarProvider defaultOpen={defaultOpen}>
                    <AppSidebar />
                    <main className="h-full w-dvw overflow-hidden">
                        <Navbar />
                        {children}
                    </main>
                    <Toaster />
                </SidebarProvider>
            </body>
        </html>
    );
}
