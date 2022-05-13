import * as React from "react";
import { SVGProps } from "react";

const SvgExclamationOutline = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className="exclamation-outline_svg__icon"
    viewBox="0 0 1024 1024"
    width={24}
    height={24}
    fill={props.color}
    {...props}
  >
    <path d="M448 804a64 64 0 1 0 128 0 64 64 0 1 0-128 0zm32-168h64c4.4 0 8-3.6 8-8V164c0-4.4-3.6-8-8-8h-64c-4.4 0-8 3.6-8 8v464c0 4.4 3.6 8 8 8z" />
  </svg>
);

export default SvgExclamationOutline;
