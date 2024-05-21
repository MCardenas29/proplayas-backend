import { Icon } from "./icon";

export default function({ className = '', size = 24 }: Icon) {
    return (
        <svg stroke="currentColor" className={className} width={size} height={size} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path d="M2.57306 8.463L11.2321 4.134C11.3153 4.09245 11.407 4.07082 11.5001 4.07082C11.5931 4.07082 11.6848 4.09245 11.7681 4.134L20.4271 8.464C20.5266 8.51387 20.6104 8.59046 20.6689 8.68521C20.7274 8.77997 20.7584 8.88914 20.7584 9.0005C20.7584 9.11187 20.7274 9.22104 20.6689 9.31579C20.6104 9.41055 20.5266 9.48714 20.4271 9.537L11.7681 13.866C11.6848 13.9076 11.5931 13.9292 11.5001 13.9292C11.407 13.9292 11.3153 13.9076 11.2321 13.866L2.57306 9.536C2.47348 9.48614 2.38974 9.40955 2.33122 9.31479C2.27269 9.22004 2.2417 9.11087 2.2417 8.9995C2.2417 8.88814 2.27269 8.77897 2.33122 8.68421C2.38974 8.58946 2.47348 8.51287 2.57306 8.463Z" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
            <path d="M22.5 13V9.5L20.5 8.5M4.5 10.5V15.912C4.49993 16.2904 4.60719 16.661 4.80933 16.9809C5.01148 17.3007 5.30021 17.5567 5.642 17.719L10.642 20.093C10.9101 20.2203 11.2032 20.2864 11.5 20.2864C11.7968 20.2864 12.0899 20.2203 12.358 20.093L17.358 17.719C17.6998 17.5567 17.9885 17.3007 18.1907 16.9809C18.3928 16.661 18.5001 16.2904 18.5 15.912V10.5" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
        </svg>
    )
}
