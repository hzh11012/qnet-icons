import * as React from "react";
import { SVGProps } from "react";

const SvgMinusOutline = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className="minus-outline_svg__icon"
    viewBox="0 0 1024 1024"
    {...props}
  >
    <path d="M872 474H152c-4.4 0-8 3.6-8 8v60c0 4.4 3.6 8 8 8h720c4.4 0 8-3.6 8-8v-60c0-4.4-3.6-8-8-8z" />
  </svg>
);

export default SvgMinusOutline;
