import { Icon } from "./icon";

export default function({ className = '', size = 16 }: Icon) {
    return (
        <svg className={className} width={size} height={size} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path d="M6.75806 17.243L12.0011 12L17.2441 17.243M17.2441 6.757L12.0001 12L6.75806 6.757" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
        </svg>
    )
}
