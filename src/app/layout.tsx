import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
    title: "Proplayas",
    description: "Proplayas is a CMS for managing Iberoamerican beaches. It allows easy updates to beach profiles and events, supports multiple languages, and includes SEO features for better search visibility.",
};

export default function RootLayout({ children, }: Readonly<{ children: React.ReactNode }>) {
    return (
        <html lang="en">
            <body className="font-body text-base">{children}</body>
        </html>
    );
}
