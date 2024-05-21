import { Icon } from "./icon";

export default function({ className = '', size = 24 }: Icon) {
    return (
        <svg className={className} width={size} height={size} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path d="M10 18V15C10 14.4696 10.2107 13.9609 10.5858 13.5858C10.9609 13.2107 11.4696 13 12 13C12.5304 13 13.0391 13.2107 13.4142 13.5858C13.7893 13.9609 14 14.4696 14 15V18M2 8L11.732 3.134C11.8152 3.09245 11.907 3.07082 12 3.07082C12.093 3.07082 12.1848 3.09245 12.268 3.134L22 8" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
            <path d="M20 11V19C20 19.5304 19.7893 20.0391 19.4142 20.4142C19.0391 20.7893 18.5304 21 18 21H6C5.46957 21 4.96086 20.7893 4.58579 20.4142C4.21071 20.0391 4 19.5304 4 19V11" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
        </svg>
    )
}
