import { Icon } from "./icon";

export default function({ className = '', size = 24 }: Icon) {
    return (
        <svg stroke="currentColor" className={className} width={size} height={size} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path d="M3 10C5.483 10 7.345 7 7.345 7C7.345 7 9.207 10 11.69 10C14.173 10 16.655 7 16.655 7C16.655 7 19.138 10 21 10M3 17C5.483 17 7.345 14 7.345 14C7.345 14 9.207 17 11.69 17C14.173 17 16.655 14 16.655 14C16.655 14 19.138 17 21 17" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
        </svg>
    )
}
