import type { Metadata } from "next";
import "./globals.css";
import Topbar from "./components/Topbar";
import Navigation from "./components/Navigation";
import Footer from "./components/Footer";
import PageOutlet from "./components/PageOutlet";

export const metadata: Metadata = {
    title: "Proplayas",
    description: "Proplayas is a CMS for managing Iberoamerican beaches. It allows easy updates to beach profiles and events, supports multiple languages, and includes SEO features for better search visibility.",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
    return (
        <html lang="en" className="bg-eastern-blue-50">
            <body className="h-screen w-screen font-body text-base flex flex-col content-center justify-items-stretch">
                <Topbar />
                <div className="overflow-hidden relative m-1 flex flex-col flex-1">
                    <Navigation />
                    <PageOutlet>{children}</PageOutlet>
                </div>
                <Footer />
            </body>
        </html >
    );
}
