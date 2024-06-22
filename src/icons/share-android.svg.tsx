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
      d="M18 22C18.7956 22 19.5587 21.6839 20.1213 21.1213C20.6839 20.5587 21 19.7956 21 19C21 18.2044 20.6839 17.4413 20.1213 16.8787C19.5587 16.3161 18.7956 16 18 16C17.2044 16 16.4413 16.3161 15.8787 16.8787C15.3161 17.4413 15 18.2044 15 19C15 19.7956 15.3161 20.5587 15.8787 21.1213C16.4413 21.6839 17.2044 22 18 22ZM18 8C18.7956 8 19.5587 7.68393 20.1213 7.12132C20.6839 6.55871 21 5.79565 21 5C21 4.20435 20.6839 3.44129 20.1213 2.87868C19.5587 2.31607 18.7956 2 18 2C17.2044 2 16.4413 2.31607 15.8787 2.87868C15.3161 3.44129 15 4.20435 15 5C15 5.79565 15.3161 6.55871 15.8787 7.12132C16.4413 7.68393 17.2044 8 18 8ZM6 15C6.79565 15 7.55871 14.6839 8.12132 14.1213C8.68393 13.5587 9 12.7956 9 12C9 11.2044 8.68393 10.4413 8.12132 9.87868C7.55871 9.31607 6.79565 9 6 9C5.20435 9 4.44129 9.31607 3.87868 9.87868C3.31607 10.4413 3 11.2044 3 12C3 12.7956 3.31607 13.5587 3.87868 14.1213C4.44129 14.6839 5.20435 15 6 15Z"
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path d="M15.5 6.5L8.5 10.5M8.5 13.5L15.5 17.5" strokeWidth={1.5} />
  </svg>
)
export { SvgComponent as ShareAndroidSVG }
