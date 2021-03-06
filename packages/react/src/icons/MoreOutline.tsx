import * as React from "react";
import { SVGProps } from "react";

const SvgMoreOutline = (props: SVGProps<SVGSVGElement>) => (
  <svg
    className="more-outline_svg__icon"
    width={24}
    height={24}
    viewBox="0 0 1024 1024"
    xmlns="http://www.w3.org/2000/svg"
    fill={props.color}
    {...props}
  >
    <path
      fill="#333"
      d="M456 231a56 56 0 1 0 112 0 56 56 0 1 0-112 0zm0 280a56 56 0 1 0 112 0 56 56 0 1 0-112 0zm0 280a56 56 0 1 0 112 0 56 56 0 1 0-112 0z"
    />
  </svg>
);

export default SvgMoreOutline;
