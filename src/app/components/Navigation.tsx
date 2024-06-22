import NavLink from "./NavigationLink";
import MediaImageFolderSvg from "@/icons/media-image-folder.svg";
import GlassesSvg from "@/icons/glasses.svg";
import ShareAndroidSvg from "@/icons/share-android.svg";
import UserCircleSvg from "@/icons/user-circle.svg";
import { ButtonStyles } from "@/components/Button";
import { StructureSVG } from "@/icons/structure.svg";

function Navigation() {
    return (
        <aside className="flex flex-col w-full md:w-64 absolute top-0 bottom-0 left-0 overflow-y-auto z-0">
            <NavLink label="Estructura" icon={<StructureSVG />} href="/admin/structure" />
            <NavLink label="Publicaciones" icon={<GlassesSvg />} href="/admin/publications" />
            <NavLink label="Nodos" icon={<ShareAndroidSvg />} href="/admin/nodes" />
            <NavLink label="Recursos" icon={<MediaImageFolderSvg />} href="/admin/library" />
            <NavLink label="Usuarios" icon={<UserCircleSvg />} href="/admin/users" />
            <div className="flex-1" />
            <div className="flex flex-col p-3 rounded-lg m-2 gap-2 max-w-64">
                <NavLink className={`${ButtonStyles.Simple} justify-center text-avocado-950`} href="/login" label="Iniciar sesion" />
                <NavLink className={`${ButtonStyles.Simple} justify-center bg-eastern-blue-400 text-avocado-50`} href="/register" label="Registrarse" />
            </div>
        </aside>
    )
}

export default Navigation;
