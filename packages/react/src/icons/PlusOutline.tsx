import * as React from "react";
import { SVGProps } from "react";

const SvgPlusOutline = (props: SVGProps<SVGSVGElement>) => (
  <svg
    className="plus-outline_svg__icon"
    viewBox="0 0 1024 1024"
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={24}
    fill={props.color}
    {...props}
  >
    <path d="M482 152h60q8 0 8 8v704q0 8-8 8h-60q-8 0-8-8V160q0-8 8-8Z" />
    <path d="M176 474h672q8 0 8 8v60q0 8-8 8H176q-8 0-8-8v-60q0-8 8-8Z" />
  </svg>
);

export default SvgPlusOutline;
