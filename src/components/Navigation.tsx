import { Icon as IconInterface } from "@/icons/icon";
import Link from "next/link";
import { ComponentType } from "react";
import bookStackSvg from "@/icons/book-stack.svg";
import glassesSvg from "@/icons/glasses.svg";
import homeAltSvg from "@/icons/home-alt.svg";
import mediaImageFolderSvg from "@/icons/media-image-folder.svg";
import mediaVideoSvg from "@/icons/media-video.svg";
import shareAndroidSvg from "@/icons/share-android.svg";

function NavigationItem({ label, to = "#", Icon }: { Icon: ComponentType<IconInterface>, label: string, to?: string }) {
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
            <NavigationItem label="Inicio" Icon={homeAltSvg} to="/" />
            <NavigationItem label="Publicaciones" Icon={glassesSvg} />
            <NavigationItem label="Nodos" Icon={shareAndroidSvg} />
            <NavigationItem label="Recursos" Icon={mediaImageFolderSvg} />
            <NavigationItem label="Webseries" Icon={mediaVideoSvg} />
            <NavigationItem label="Libros" Icon={bookStackSvg} />
        </aside>
    )
}

export default Navigation;
