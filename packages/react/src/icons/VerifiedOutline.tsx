import * as React from "react";
import { SVGProps } from "react";

const SvgVerifiedOutline = (props: SVGProps<SVGSVGElement>) => (
  <svg
    className="verified-outline_svg__icon"
    viewBox="0 0 1024 1024"
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={24}
    fill={props.color}
    {...props}
  >
    <path d="m447.8 588.8-7.3-32.5c-.2-1-.6-1.9-1.1-2.7-2.5-3.7-7.4-4.7-11.1-2.2L405 567V411c0-4.4-3.6-8-8-8h-81c-4.4 0-8 3.6-8 8v36c0 4.4 3.6 8 8 8h37v192.4c0 1.7.5 3.3 1.5 4.7 2.6 3.6 7.6 4.4 11.2 1.8l79-56.8c2.6-1.9 3.8-5.1 3.1-8.3zm-56.7-216.6.2.2c3.2 3 8.3 2.8 11.3-.5l24.1-26.2c2.9-3.2 2.8-8.1-.3-11.2l-53.7-52.1c-3.1-3-8.1-3-11.2.1l-24.7 24.7c-3.1 3.1-3.1 8.2.1 11.3l54.2 53.7z" />
    <path d="M866.9 169.9 527.1 54.1C523 52.7 517.5 52 512 52s-11 .7-15.1 2.1L157.1 169.9c-8.3 2.8-15.1 12.4-15.1 21.2v482.4c0 8.8 5.7 20.4 12.6 25.9L499.3 968c3.5 2.7 8 4.1 12.6 4.1s9.2-1.4 12.6-4.1l344.7-268.6c6.9-5.4 12.6-17 12.6-25.9V191.1c.2-8.8-6.6-18.3-14.9-21.2zM810 654.3 512 886.5 214 654.3V226.7l298-101.6 298 101.6v427.6z" />
    <path d="M452 297v36c0 4.4 3.6 8 8 8h108v274h-38V405c0-4.4-3.6-8-8-8h-35c-4.4 0-8 3.6-8 8v210h-31c-4.4 0-8 3.6-8 8v37c0 4.4 3.6 8 8 8h244c4.4 0 8-3.6 8-8v-37c0-4.4-3.6-8-8-8h-72V493h58c4.4 0 8-3.6 8-8v-35c0-4.4-3.6-8-8-8h-58V341h63c4.4 0 8-3.6 8-8v-36c0-4.4-3.6-8-8-8H460c-4.4 0-8 3.6-8 8z" />
  </svg>
);

export default SvgVerifiedOutline;
