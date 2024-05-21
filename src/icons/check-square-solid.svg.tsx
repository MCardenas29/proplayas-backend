import { Icon } from "./icon";

export default function({ className = '', size = 24 }: Icon) {
    return (
        <svg stroke="currentColor" className={className} width={size} height={size} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path fill-rule="evenodd" clip-rule="evenodd" d="M3.6 2.25C3.24196 2.25 2.89858 2.39223 2.64541 2.64541C2.39223 2.89858 2.25 3.24196 2.25 3.6V20.4C2.25 21.146 2.854 21.75 3.6 21.75H20.4C20.5773 21.75 20.7528 21.7151 20.9166 21.6472C21.0804 21.5794 21.2292 21.48 21.3546 21.3546C21.48 21.2292 21.5794 21.0804 21.6472 20.9166C21.7151 20.7528 21.75 20.5773 21.75 20.4V3.6C21.75 3.42272 21.7151 3.24717 21.6472 3.08338C21.5794 2.91959 21.48 2.77076 21.3546 2.64541C21.2292 2.52005 21.0804 2.42061 20.9166 2.35276C20.7528 2.28492 20.5773 2.25 20.4 2.25H3.6ZM17.53 9.03C17.6625 8.88783 17.7346 8.69978 17.7312 8.50548C17.7277 8.31118 17.649 8.12579 17.5116 7.98838C17.3742 7.85097 17.1888 7.77225 16.9945 7.76883C16.8002 7.7654 16.6122 7.83752 16.47 7.97L10 14.44L7.53 11.97C7.38783 11.8375 7.19978 11.7654 7.00548 11.7688C6.81118 11.7723 6.62579 11.851 6.48838 11.9884C6.35097 12.1258 6.27225 12.3112 6.26883 12.5055C6.2654 12.6998 6.33752 12.8878 6.47 13.03L9.47 16.03C9.61063 16.1705 9.80125 16.2493 10 16.2493C10.1988 16.2493 10.3894 16.1705 10.53 16.03L17.53 9.03Z" />
        </svg>
    )
}
