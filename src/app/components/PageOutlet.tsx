'use client'

import eventBus from "@/eventBus";
import { useCallback, useEffect, useState } from "react";

function PageOutlet({ children }: Readonly<{ children: React.ReactNode }>) {
    const [isNavOpen, setNavState] = useState(false);
    const toggle = useCallback(() => setNavState(!isNavOpen), [isNavOpen]);

    useEffect(() => {
        eventBus.on('navigation--toggle', toggle)
        return () => eventBus.remove('navigation--toggle', toggle);
    })

    return <main className={`${isNavOpen ? 'translate-x-64 ' : ''}flex-1 rounded-3xl transition-transform overflow-y-auto bg-white z-10`}>{children}</main>
}

export default PageOutlet;
