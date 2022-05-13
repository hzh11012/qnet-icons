import * as React from "react";
import { SVGProps } from "react";

const SvgBorderlessTableOutline = (props: SVGProps<SVGSVGElement>) => (
  <svg
    className="borderless-table-outline_svg__icon"
    viewBox="0 0 1024 1024"
    xmlns="http://www.w3.org/2000/svg"
    width={200}
    height={200}
    {...props}
  >
    <path d="M117 368h231v64H117zm559 0h241v64H676zm-264 0h200v64H412zm0 224h200v64H412zm264 0h241v64H676zm-559 0h231v64H117zm295-160V179h-64v666h64V592zm264-64V179h-64v666h64V432z" />
  </svg>
);

export default SvgBorderlessTableOutline;
