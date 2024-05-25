import { ButtonHTMLAttributes } from "react";

interface ButtonAttributes extends ButtonHTMLAttributes<HTMLButtonElement> {
    styleType?: ButtonStyle
}

export function Button({ styleType = ButtonStyle.PLAIN, ...props }: ButtonAttributes) {
    return (
        <button className={`${styleType == ButtonStyle.FANCY ?
            'rounded-full px-4 shadow-eastern-blue-500 shadow-[inset_-4px_-4px_10px_0px]' :
            'rounded-lg px-4'
            } bg-eastern-blue-400 py-2 font-semibold font-label text-white text-sm`}
            {...props} />
    )
}

export enum ButtonStyle {
    FANCY,
    PLAIN
}

