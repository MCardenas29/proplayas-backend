import { InputHTMLAttributes } from "react";

function Input({ ...props }: InputHTMLAttributes<HTMLInputElement>) {
    return <input {...props} className="py-2 px-4 bg-wheat-200 rounded-xl" />
}

export default Input;
