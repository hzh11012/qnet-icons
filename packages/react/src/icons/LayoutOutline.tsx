import * as React from "react";
import { SVGProps } from "react";

const SvgLayoutOutline = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className="layout-outline_svg__icon"
    viewBox="0 0 1024 1024"
    width={24}
    height={24}
    fill={props.color}
    {...props}
  >
    <path d="M880 112H144c-17.7 0-32 14.3-32 32v736c0 17.7 14.3 32 32 32h736c17.7 0 32-14.3 32-32V144c0-17.7-14.3-32-32-32zm-696 72h136v656H184V184zm656 656H384V384h456v456zM384 320V184h456v136H384z" />
  </svg>
);

export default SvgLayoutOutline;
