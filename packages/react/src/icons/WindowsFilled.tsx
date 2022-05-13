import * as React from "react";
import { SVGProps } from "react";

const SvgWindowsFilled = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className="windows-filled_svg__icon"
    viewBox="0 0 1024 1024"
    width={24}
    height={24}
    fill={props.color}
    {...props}
  >
    <path d="M523.8 191.4v288.9h382V128.1zm0 642.2 382 62.2v-352h-382zM120.1 480.2H443V201.9l-322.9 53.5zm0 290.4L443 823.2V543.8H120.1z" />
  </svg>
);

export default SvgWindowsFilled;
