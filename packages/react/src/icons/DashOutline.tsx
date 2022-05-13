import * as React from "react";
import { SVGProps } from "react";

const SvgDashOutline = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className="dash-outline_svg__icon"
    viewBox="0 0 1024 1024"
    {...props}
  >
    <path d="M112 476h160v72H112zm320 0h160v72H432zm320 0h160v72H752z" />
  </svg>
);

export default SvgDashOutline;
