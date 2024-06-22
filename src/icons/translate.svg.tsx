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
      d="M2 5H9M9 5H13.5M9 5V3M16 5H13.5M13.5 5C12.68 7.735 10.961 10.32 9 12.593M9 12.593C7.376 14.474 5.585 16.141 4 17.5M9 12.593C8 11.5 6.4 9.3 6 8.5M9 12.593L12 15.5M13.5 21L14.643 18M14.643 18L17.5 10.5L20.357 18M14.643 18H20.357M21.5 21L20.357 18"
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
)
export { SvgComponent as TranslateSVG }
