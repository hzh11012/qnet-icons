import * as React from "react";
import { SVGProps } from "react";

const SvgHolderOutline = (props: SVGProps<SVGSVGElement>) => (
  <svg
    viewBox="0 0 1024 1024"
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={24}
    fill={props.color}
    {...props}
  >
    <path d="M300 276.497a56 56 0 1 0 56-96.994 56 56 0 0 0-56 96.994Zm0 284a56 56 0 1 0 56-96.994 56 56 0 0 0-56 96.994ZM640 228a56 56 0 1 0 112 0 56 56 0 0 0-112 0Zm0 284a56 56 0 1 0 112 0 56 56 0 0 0-112 0ZM300 844.497a56 56 0 1 0 56-96.994 56 56 0 0 0-56 96.994ZM640 796a56 56 0 1 0 112 0 56 56 0 0 0-112 0Z" />
  </svg>
);

export default SvgHolderOutline;
