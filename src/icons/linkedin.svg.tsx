import { Icon } from "./icon";

export default function({ className = '', size = 24 }: Icon) {
    return (
        <svg fill="none" stroke="currentColor" className={className} width={size} height={size} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path d="M7 17V10M21 8V16C21 17.3261 20.4732 18.5979 19.5355 19.5355C18.5979 20.4732 17.3261 21 16 21H8C6.67392 21 5.40215 20.4732 4.46447 19.5355C3.52678 18.5979 3 17.3261 3 16V8C3 6.67392 3.52678 5.40215 4.46447 4.46447C5.40215 3.52678 6.67392 3 8 3H16C17.3261 3 18.5979 3.52678 19.5355 4.46447C20.4732 5.40215 21 6.67392 21 8Z" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M11 17V13.75M11 13.75V10M11 13.75C11 10 17 10 17 13.75V17M7 7.01L7.01 6.999" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
    )
}
