import { Icon } from "./icon";

export default function({ className = '', size = 16 }: Icon) {
    return (
        <svg className={className} width={size} height={size} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path d="M21 3H15M21 3L12 12M21 3V9" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
            <path d="M21 13V19C21 19.5304 20.7893 20.0391 20.4142 20.4142C20.0391 20.7893 19.5304 21 19 21H5C4.46957 21 3.96086 20.7893 3.58579 20.4142C3.21071 20.0391 3 19.5304 3 19V5C3 4.46957 3.21071 3.96086 3.58579 3.58579C3.96086 3.21071 4.46957 3 5 3H11" stroke-width="1.5" stroke-linecap="round" />
        </svg>
    )
}
