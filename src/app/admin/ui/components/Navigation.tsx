import { MediaImageFolderSVG } from "@/app/admin/ui/icons/media-image-folder.svg";
import { GlassesSVG } from "@/app/admin/ui/icons/glasses.svg";
import { ShareAndroidSVG } from "@/app/admin/ui/icons/share-android.svg";
import { UserCircleSVG } from "@/app/admin/ui/icons/user-circle.svg";
import { ButtonStyles } from "@/app/admin/ui/styles/Button";
import { StructureSVG } from "@/app/admin/ui/icons/structure.svg";
import Link, { LinkProps } from "next/link";
import { HTMLAttributes, ReactElement } from "react";


type NavLinkAttributes = LinkProps & HTMLAttributes<HTMLAnchorElement> & {
    icon?: ReactElement,
    label: string
};

function NavLink({ label, href = "#", icon, className, ...props }: NavLinkAttributes) {
    'use client'
    const pathName = import("next/navigation")
    const isActive = pathName == href;

    return (
        <Link className={`${isActive ? 'underline' : ''} ${className} p-3 flex flex-row items-center gap-2 select-none`} href={href} {...props}>
            <span className="text-2xl">{icon ? icon : null}</span>
            <span>{label}</span>
        </Link>
    )
}

function Navigation() {
    return (
        <aside className="flex flex-col w-full md:w-64 absolute top-0 bottom-0 left-0 overflow-y-auto z-0">
            <NavLink label="Estructura" icon={<StructureSVG />} href="/admin/structure" />
            <NavLink label="Publicaciones" icon={<GlassesSVG />} href="/admin/publications" />
            <NavLink label="Nodos" icon={<ShareAndroidSVG />} href="/admin/nodes" />
            <NavLink label="Recursos" icon={<MediaImageFolderSVG />} href="/admin/library" />
            <NavLink label="Usuarios" icon={<UserCircleSVG />} href="/admin/users" />
            <div className="flex-1" />
            <div className="flex flex-col p-3 rounded-lg m-2 gap-2 max-w-64">
                <NavLink className={`${ButtonStyles.Simple} justify-center text-avocado-950`} href="/login" label="Iniciar sesion" />
                <NavLink className={`${ButtonStyles.Simple} justify-center bg-eastern-blue-400 text-avocado-50`} href="/register" label="Registrarse" />
            </div>
        </aside>
    )
}

export default Navigation;
