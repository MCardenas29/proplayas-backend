import { InputHTMLAttributes } from "react";

function Input({ ...props }: InputHTMLAttributes<HTMLInputElement>) {
    return <input {...props} className="py-1 px-4 rounded-sm outline outline-1 outline-offset-2 outline-sandrift-200 bg-sandrift-50 text-avocado-950 font-label" />
}

export default Input;
