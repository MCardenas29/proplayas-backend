import { motion } from "framer-motion"
import * as React from "react"
import { SVGProps } from "react"

interface MenuProps extends SVGProps<SVGSVGElement> {
    open: boolean
}

export default function(props: MenuProps) {
    return (
        <svg
            fill="none"
            stroke="currentColor"
            width={24}
            height={24}
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
            {...props}
        >
            <motion.path
                variants={{
                    open: { d: "M3 5H11M3 12H16M3 19H21" },
                    closed: { d: "M3 5H21M3 12H21M3 19H21" }
                }}
                initial="closed"
                animate={props.open ? "open" : "closed"}
                strokeWidth={1.5}
                strokeLinecap="round"
                strokeLinejoin="round"
            />
        </svg>
    )
}

