import * as React from "react";
import { SVGProps } from "react";

const SvgFunnelPlotFilled = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className="funnel-plot-filled_svg__icon"
    viewBox="0 0 1024 1024"
    width={24}
    height={24}
    fill={props.color}
    {...props}
  >
    <path d="M336.7 586h350.6l84.9-148H251.8zm543.4-432H143.9c-24.5 0-39.8 26.7-27.5 48L215 374h594l98.7-172c12.2-21.3-3.1-48-27.6-48zM349 838c0 17.7 14.2 32 31.8 32h262.4c17.6 0 31.8-14.3 31.8-32V650H349v188z" />
  </svg>
);

export default SvgFunnelPlotFilled;
