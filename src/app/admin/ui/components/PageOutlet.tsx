'use client'

import eventBus from "@/eventBus";
import { Ref, useCallback, useEffect, useRef, useState } from "react";

function PageOutlet({ children }: Readonly<{ children: React.ReactNode }>) {
    const outlet : Ref<HTMLElement> = useRef(null)
    const [isNavOpen, setNavState] = useState(false);
    const toggle = useCallback(() => setNavState(!isNavOpen), [isNavOpen]);

    useEffect(() => {
        eventBus.on('navigation--toggle', toggle)
        return () => eventBus.remove('navigation--toggle', toggle);
    })

    return <main ref={outlet} className={`${isNavOpen ? 'translate-x-full md:translate-x-64' : ''} flex-1 rounded-3xl transition-transform overflow-y-auto bg-white z-10 p-1`}>{children}</main>
}

export default PageOutlet;
