import type { Metadata } from "next";
import "@/globals.css";
import Navigation from "./ui/components/Navigation";
import PageOutlet from "./ui/components/PageOutlet";
import NavigationButton from "./ui/components/NavigationButton";
import Link from "next/link";
import TranslateButton from "./ui/components/TranslateButton";

export const metadata: Metadata = {
    title: "Proplayas",
    description: "Proplayas is a CMS for managing Iberoamerican beaches. It allows easy updates to beach profiles and events, supports multiple languages, and includes SEO features for better search visibility.",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
    return (
        <html lang="en" className="bg-eastern-blue-50">
            <body className="h-screen w-screen font-body text-base flex flex-col content-center justify-items-stretch">
                <header className="grid grid-cols-12 min-h-14">
                    <div className="col-span-10 col-start-2 flex flex-row items-center">
                        <NavigationButton />
                        <Link href="/" className="text-2xl font-proplayas m-0 justify-self-stretch text-cebter m-auto">PROPLAYAS</Link>
                        <TranslateButton />
                    </div>
                </header>
                <div className="overflow-hidden relative m-1 flex flex-col flex-1">
                    <Navigation />
                    <PageOutlet>{children}</PageOutlet>
                </div>
                <footer className="grid grid-cols-12 p-3 text-black">
                    <div className="col-start-2 col-span-10 flex flex-row items-center justify-between">
                        <span className="font-label text-sm">© 2022 RedIberoamericana de Gestion y Certificacion de Playas (PROPLAYAS)</span>
                    </div>
                </footer>
            </body>
        </html >
    );
}
