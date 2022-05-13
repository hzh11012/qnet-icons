import * as React from "react";
import { SVGProps } from "react";

const SvgBookFilled = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className="book-filled_svg__icon"
    viewBox="0 0 1024 1024"
    width={24}
    height={24}
    fill={props.color}
    {...props}
  >
    <path d="M832 64H192c-17.7 0-32 14.3-32 32v832c0 17.7 14.3 32 32 32h640c17.7 0 32-14.3 32-32V96c0-17.7-14.3-32-32-32zM668 345.9 621.5 312 572 347.4V124h96v221.9z" />
  </svg>
);

export default SvgBookFilled;
