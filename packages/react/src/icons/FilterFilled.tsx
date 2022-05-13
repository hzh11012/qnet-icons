import * as React from "react";
import { SVGProps } from "react";

const SvgFilterFilled = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className="filter-filled_svg__icon"
    viewBox="0 0 1024 1024"
    width={24}
    height={24}
    fill={props.color}
    {...props}
  >
    <path d="M349 838c0 17.7 14.2 32 31.8 32h262.4c17.6 0 31.8-14.3 31.8-32V642H349v196zm531.1-684H143.9c-24.5 0-39.8 26.7-27.5 48l221.3 376h348.8l221.3-376c12.1-21.3-3.2-48-27.7-48z" />
  </svg>
);

export default SvgFilterFilled;
