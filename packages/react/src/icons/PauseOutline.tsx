import * as React from "react";
import { SVGProps } from "react";

const SvgPauseOutline = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className="pause-outline_svg__icon"
    viewBox="0 0 1024 1024"
    {...props}
  >
    <path d="M304 176h80v672h-80zm408 0h-64c-4.4 0-8 3.6-8 8v656c0 4.4 3.6 8 8 8h64c4.4 0 8-3.6 8-8V184c0-4.4-3.6-8-8-8z" />
  </svg>
);

export default SvgPauseOutline;
