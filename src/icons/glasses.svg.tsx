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
      d="M2 14C2 15.0609 2.42143 16.0783 3.17157 16.8284C3.92172 17.5786 4.93913 18 6 18C7.06087 18 8.07828 17.5786 8.82843 16.8284C9.57857 16.0783 10 15.0609 10 14M2 14C2 12.9391 2.42143 11.9217 3.17157 11.1716C3.92172 10.4214 4.93913 10 6 10C7.06087 10 8.07828 10.4214 8.82843 11.1716C9.57857 11.9217 10 12.9391 10 14M2 14V6M10 14H14M22 14C22 15.0609 21.5786 16.0783 20.8284 16.8284C20.0783 17.5786 19.0609 18 18 18C16.9391 18 15.9217 17.5786 15.1716 16.8284C14.4214 16.0783 14 15.0609 14 14M22 14C22 12.9391 21.5786 11.9217 20.8284 11.1716C20.0783 10.4214 19.0609 10 18 10C16.9391 10 15.9217 10.4214 15.1716 11.1716C14.4214 11.9217 14 12.9391 14 14M22 14V6"
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
)
export { SvgComponent as GlassesSVG }
