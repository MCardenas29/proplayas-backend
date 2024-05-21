import { Icon } from "./icon";

export default function({ className = '', size = 24 }: Icon) {
    return (
        <svg fill="none" stroke="currentColor" className={className} width={size} height={size} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path d="M16 12H17.4C17.5591 12 17.7117 12.0632 17.8243 12.1757C17.9368 12.2883 18 12.4409 18 12.6V19.4C18 19.5591 17.9368 19.7117 17.8243 19.8243C17.7117 19.9368 17.5591 20 17.4 20H6.6C6.44087 20 6.28826 19.9368 6.17574 19.8243C6.06321 19.7117 6 19.5591 6 19.4V12.6C6 12.4409 6.06321 12.2883 6.17574 12.1757C6.28826 12.0632 6.44087 12 6.6 12H8M16 12V8C16 6.667 15.2 4 12 4C8.8 4 8 6.667 8 8V12M16 12H8" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
    )
}
