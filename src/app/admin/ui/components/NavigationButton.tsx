'use client'
import eventBus from "@/eventBus";
import { useCallback, useState } from "react";
import { MenuAnimatedSVG } from "@/app/admin/ui/icons/menu-animated.svg";

function NavigationButton() {
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

export default NavigationButton;
