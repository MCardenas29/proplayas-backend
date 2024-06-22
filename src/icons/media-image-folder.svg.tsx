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
      d="M19.5 14.51L19.51 14.499M22 12.6V20.4C22 20.4788 21.9845 20.5568 21.9543 20.6296C21.9242 20.7024 21.88 20.7685 21.8243 20.8243C21.7685 20.88 21.7024 20.9242 21.6296 20.9543C21.5568 20.9845 21.4788 21 21.4 21H13.6C13.4409 21 13.2883 20.9368 13.1757 20.8243C13.0632 20.7117 13 20.5591 13 20.4V12.6C13 12.4409 13.0632 12.2883 13.1757 12.1757C13.2883 12.0632 13.4409 12 13.6 12H21.4C21.4788 12 21.5568 12.0155 21.6296 12.0457C21.7024 12.0758 21.7685 12.12 21.8243 12.1757C21.88 12.2315 21.9242 12.2976 21.9543 12.3704C21.9845 12.4432 22 12.5212 22 12.6Z"
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M13 18.2L16.5 17L22 19M2 10V3.6C2 3.44087 2.06321 3.28826 2.17574 3.17574C2.28826 3.06321 2.44087 3 2.6 3H8.778C8.92101 2.99999 9.05932 3.05106 9.168 3.144L12.332 5.856C12.4407 5.94894 12.579 6.00001 12.722 6H21.4C21.4788 6 21.5568 6.01552 21.6296 6.04567C21.7024 6.07583 21.7685 6.12002 21.8243 6.17574C21.88 6.23145 21.9242 6.29759 21.9543 6.37039C21.9845 6.44319 22 6.52121 22 6.6V9M2 10V18.4C2 18.5591 2.06321 18.7117 2.17574 18.8243C2.28826 18.9368 2.44087 19 2.6 19H10M2 10H10"
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
)
export { SvgComponent as MediaImageFolderSVG }
