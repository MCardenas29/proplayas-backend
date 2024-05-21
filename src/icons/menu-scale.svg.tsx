import { Icon } from "./icon";

export default function({ className = '', size = 16 }: Icon) {
    return (
        <svg className={className} width={size} height={size} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path d="M3 5H11M3 12H16M3 19H21" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
        </svg>
    )
}
