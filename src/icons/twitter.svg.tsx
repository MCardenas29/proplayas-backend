import * as React from "react"
import { SVGProps } from "react"
const SvgComponent = (props: SVGProps<SVGSVGElement>) => (
  <svg
    fill="none"
    stroke="currentColor"
    width="1em"
    height="1em"
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M23 3.01C23 3.01 20.982 4.202 19.86 4.54C19.2577 3.84751 18.4573 3.35669 17.567 3.13392C16.6767 2.91116 15.7395 2.96719 14.8821 3.29445C14.0247 3.62171 13.2884 4.2044 12.773 4.96371C12.2575 5.72303 11.9877 6.62233 12 7.54V8.54C10.2426 8.58557 8.50127 8.19581 6.93101 7.40544C5.36074 6.61508 4.01032 5.44863 3 4.01C3 4.01 -1 13.01 8 17.01C5.94053 18.408 3.48716 19.1089 1 19.01C10 24.01 21 19.01 21 7.51C20.9993 7.23133 20.9727 6.95467 20.92 6.68C21.94 5.674 23 3.01 23 3.01Z"
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
)
export { SvgComponent as TwitterSVG }
