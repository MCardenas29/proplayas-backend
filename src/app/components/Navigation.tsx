import { Icon as IconInterface } from "@/icons/icon";
import Link from "next/link";
import { ComponentType } from "react";
import bookStackSvg from "@/icons/book-stack.svg";
import glassesSvg from "@/icons/glasses.svg";
import homeAltSvg from "@/icons/home-alt.svg";
import mediaImageFolderSvg from "@/icons/media-image-folder.svg";
import mediaVideoSvg from "@/icons/media-video.svg";
import shareAndroidSvg from "@/icons/share-android.svg";

function NavItem({ label, to = "#", Icon }: { Icon: ComponentType<IconInterface>, label: string, to?: string }) {
    return (
        <Link className="p-3 flex flex-row items-center gap-2 select-none" href={to}>
            <Icon />
            <span>{label}</span>
        </Link>
    )
}

function Navigation() {
    return (
        <aside className="flex flex-col w-64 absolute top-0 bottom-0 left-0 overflow-y-auto z-0">
            <NavItem label="Inicio" Icon={homeAltSvg} to="/" />
            <NavItem label="Publicaciones" Icon={glassesSvg} />
            <NavItem label="Nodos" Icon={shareAndroidSvg} />
            <NavItem label="Recursos" Icon={mediaImageFolderSvg} />
            <NavItem label="Webseries" Icon={mediaVideoSvg} />
            <NavItem label="Libros" Icon={bookStackSvg} />
            <div className="flex-1" />
            <div className="flex flex-col bg-wheat-100 p-3 rounded-lg">
                A
            </div>
        </aside>
    )
}

export default Navigation;
