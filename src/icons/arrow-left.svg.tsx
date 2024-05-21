import { Icon } from "./icon";

export default function({ className = '', size = 16 }: Icon) {
    return (
        <svg className={className} width={size} height={size} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path d="M21 12H3M3 12L11.5 3.5M3 12L11.5 20.5" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
        </svg>
    )
}
