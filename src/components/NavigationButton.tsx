'use client'
import MenuSvg from "@/icons/menu.svg";
import eventBus from "@/eventBus";
import { useCallback } from "react";

function NavigationButton() {
    const clickBtn = useCallback(() => eventBus.dispatch('navigation--toggle'), [])

    return (
        <button type="button" onClick={clickBtn}>
            <MenuSvg />
        </button>
    )
}

export default NavigationButton;
