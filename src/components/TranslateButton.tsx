'use client'
import TranslateSvg from "@/icons/translate.svg";
import { AnimatePresence, motion } from "framer-motion";
import { useCallback, useState } from "react";

function TranslateButton() {
    const [isOpen, setOpen] = useState(false)
    const clickBtn = useCallback(() => setOpen(!isOpen), [isOpen])

    return (
        <div className="relative">
            <button type="button" onClick={clickBtn}>
                <TranslateSvg />
            </button>
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: -50 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -50 }}
                        transition={{ duration: 0.1 }}
                        className={`${isOpen ? '' : 'pointer-events-none'} font-label text-sm flex flex-col absolute top-full right-0 mt-2 z-20 shadow-sm shadow-avocado-400/20 bg-wheat-200 rounded-xl w-max max-w-screen-sm`}>
                        <button className="flex-1 flex flex-row pt-2 pb-1 px-5">en - Ingles</button>
                        <button className="flex-1 flex flex-row py-1 pb-2 px-5">es - Español</button>
                    </motion.div>
                )}
            </AnimatePresence>
        </div >
    )
}

export default TranslateButton;
