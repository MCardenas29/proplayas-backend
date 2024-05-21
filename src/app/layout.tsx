import type { Metadata } from "next";
import "./globals.css";
import Appbar from "@/components/Appbar";

export const metadata: Metadata = {
    title: "Proplayas",
    description: "Proplayas is a CMS for managing Iberoamerican beaches. It allows easy updates to beach profiles and events, supports multiple languages, and includes SEO features for better search visibility.",
};

export default function RootLayout({ children, }: Readonly<{ children: React.ReactNode }>) {
    return (
        <html lang="en" className="bg-eastern-blue-50">
            <body className="font-body text-base flex flex-col content-center justify-items-stretch">
                <Appbar />
                {children}
            </body>
        </html>
    );
}
