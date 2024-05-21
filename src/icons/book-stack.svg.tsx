import { Icon } from "./icon";

export default function({ className = '', size = 16 }: Icon) {
    return (
        <svg className={className} width={size} height={size} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path d="M5 19.5V5C5 4.46957 5.21071 3.96086 5.58579 3.58579C5.96086 3.21071 6.46957 3 7 3H18.4C18.5591 3 18.7117 3.06321 18.8243 3.17574C18.9368 3.28826 19 3.44087 19 3.6V21H6.5M9 7H15M6.5 15H19M6.5 18H19" stroke-width="1.5" stroke-linecap="round" />
            <path d="M6.5 15C5.5 15 5 15.672 5 16.5C5 17.328 5.5 18 6.5 18C5.5 18 5 18.672 5 19.5C5 20.328 5.5 21 6.5 21" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
        </svg>
    )
}
