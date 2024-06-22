'use client'
import Link, { LinkProps } from "next/link";
import { usePathname } from "next/navigation";
import { ClassAttributes, HTMLAttributes, ReactElement } from "react";

type NavLinkAttributes = LinkProps & HTMLAttributes<HTMLAnchorElement> & {
    icon?: ReactElement,
    label: string
};

export default function NavLink({ label, href = "#", icon, className, ...props}: NavLinkAttributes) {
    const pathName = usePathname();
    const isActive = pathName == href;

    return (
        <Link className={`${isActive? 'underline' : ''} ${className} p-3 flex flex-row items-center gap-2 select-none`} href={href} {...props}>
            <span className="text-2xl">{icon? icon : null}</span>
            <span>{label}</span>
        </Link>
    )
}
