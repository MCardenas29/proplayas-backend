'use client'
import { HTMLAttributes, ReactElement, useCallback, useState } from "react";
import { MenuAnimatedSVG } from "@/app/admin/ui/icons/menu-animated.svg";
import { TranslateSVG } from "@/app/admin/ui/icons/translate.svg";
import { AnimatePresence, motion } from "framer-motion";
import Link, { LinkProps } from "next/link";
import eventBus from "@/eventBus";

type NavLinkAttributes = LinkProps & HTMLAttributes<HTMLAnchorElement> & {
    icon?: ReactElement,
    label: string
};

export function MenuBtn() {
    const [isOpen, setOpen] = useState(false)
    const clickBtn = useCallback(() => {
        eventBus.dispatch('navigation--toggle')
        setOpen(!isOpen)
    }, [isOpen])

    return (
        <button type="button" className="flex flex-row items-center text-2xl" onClick={clickBtn}>
            <MenuAnimatedSVG open={isOpen} />
        </button>
    )
}

export function Item({ label, href = "#", icon, className, ...props }: NavLinkAttributes) {
    const pathName = import("next/navigation")
    const isActive = pathName == href;

    return (
        <Link className={`${isActive ? 'underline' : ''} ${className} p-3 flex flex-row items-center gap-2 select-none`} href={href} {...props}>
            <span className="text-2xl">{icon ? icon : null}</span>
            <span>{label}</span>
        </Link>
    )
}


export function TranslateBtn() {
    const [isOpen, setOpen] = useState(false)
    const clickBtn = useCallback(() => setOpen(!isOpen), [isOpen])

    return (
        <div className="relative flex flex-row">
            <button type="button" className="text-2xl" onClick={clickBtn}>
                <TranslateSVG />
            </button>
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ y: -10 }}
                        animate={{ y: 0 }}
                        exit={{ y: -10 }}
                        transition={{ duration: 0.1 }}
                        className={`${isOpen ? '' : 'pointer-events-none'} flex absolute right-0 top-full z-20 flex-col mt-2 w-max max-w-screen-sm text-sm rounded-xl shadow-sm } font-label shadow-avocado-400/20 bg-sandrift-100`}>
                        <button className="flex flex-row flex-1 px-5 pt-2 pb-1">English</button>
                        <button className="flex flex-row flex-1 px-5 py-1 pb-2">Spanish</button>
                    </motion.div>
                )}
            </AnimatePresence>
        </div >
    )
}

