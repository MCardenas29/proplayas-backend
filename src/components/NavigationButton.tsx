'use client'
import eventBus from "@/eventBus";
import { useCallback, useState } from "react";
import MenuAnimatedSvg from "@/icons/menu-animated.svg";

function NavigationButton() {
    const [isOpen, setOpen] = useState(false)
    const clickBtn = useCallback(() => {
        eventBus.dispatch('navigation--toggle')
        setOpen(!isOpen)
    }, [isOpen])

    return (
        <button type="button" onClick={clickBtn}>
            <MenuAnimatedSvg open={isOpen} />
        </button>
    )
}

export default NavigationButton;
