import * as React from "react";
import { SVGProps } from "react";

const SvgMobileFilled = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className="mobile-filled_svg__icon"
    viewBox="0 0 1024 1024"
    {...props}
  >
    <path d="M744 62H280c-35.3 0-64 28.7-64 64v768c0 35.3 28.7 64 64 64h464c35.3 0 64-28.7 64-64V126c0-35.3-28.7-64-64-64zM512 824c-22.1 0-40-17.9-40-40s17.9-40 40-40 40 17.9 40 40-17.9 40-40 40z" />
  </svg>
);

export default SvgMobileFilled;
