import { MediaImageFolderSVG } from "@/app/admin/ui/icons/media-image-folder.svg";
import { ShareAndroidSVG } from "@/app/admin/ui/icons/share-android.svg";
import { UserCircleSVG } from "@/app/admin/ui/icons/user-circle.svg";
import { Item, MenuBtn, TranslateBtn } from "@/app/admin/Navigation";
import { StructureSVG } from "@/app/admin/ui/icons/structure.svg";
import { GlassesSVG } from "@/app/admin/ui/icons/glasses.svg";
import { ButtonStyles } from "@/app/admin/ui/styles/Button";
import type { Metadata } from "next";
import Link from "next/link";
import Outlet from "./Outlet";
import "@/globals.css";

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
                        <MenuBtn />
                        <Link href="/" className="text-2xl font-proplayas m-0 justify-self-stretch text-cebter m-auto">PROPLAYAS</Link>
                        <TranslateBtn />
                    </div>
                </header>
                <div className="overflow-hidden relative m-1 flex flex-col flex-1">
                    <aside className="flex flex-col w-full md:w-64 absolute top-0 bottom-0 left-0 overflow-y-auto z-0">
                        <Item label="Estructura" icon={<StructureSVG />} href="/admin/structure" />
                        <Item label="Publicaciones" icon={<GlassesSVG />} href="/admin/publications" />
                        <Item label="Nodos" icon={<ShareAndroidSVG />} href="/admin/nodes" />
                        <Item label="Recursos" icon={<MediaImageFolderSVG />} href="/admin/library" />
                        <Item label="Usuarios" icon={<UserCircleSVG />} href="/admin/users" />
                        <div className="flex-1" />
                        <div className="flex flex-col p-3 rounded-lg m-2 gap-2 max-w-64">
                            <Item className={`${ButtonStyles.Simple} justify-center text-avocado-950`} href="/login" label="Iniciar sesion" />
                            <Item className={`${ButtonStyles.Simple} justify-center bg-eastern-blue-400 text-avocado-50`} href="/register" label="Registrarse" />
                        </div>
                    </aside>
                    <Outlet>{children}</Outlet>
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
