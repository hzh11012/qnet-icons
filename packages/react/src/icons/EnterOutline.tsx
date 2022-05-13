import * as React from "react";
import { SVGProps } from "react";

const SvgEnterOutline = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className="enter-outline_svg__icon"
    viewBox="0 0 1024 1024"
    width={24}
    height={24}
    fill={props.color}
    {...props}
  >
    <path d="M864 170h-60c-4.4 0-8 3.6-8 8v518H310v-73c0-6.7-7.8-10.5-13-6.3l-141.9 112a8 8 0 0 0 0 12.6l141.9 112c5.3 4.2 13 .4 13-6.3v-75h498c35.3 0 64-28.7 64-64V178c0-4.4-3.6-8-8-8z" />
  </svg>
);

export default SvgEnterOutline;
