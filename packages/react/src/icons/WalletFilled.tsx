import * as React from "react";
import { SVGProps } from "react";

const SvgWalletFilled = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className="wallet-filled_svg__icon"
    viewBox="0 0 1024 1024"
    {...props}
  >
    <path d="M880 112H144c-17.7 0-32 14.3-32 32v736c0 17.7 14.3 32 32 32h736c17.7 0 32-14.3 32-32V144c0-17.7-14.3-32-32-32zm-32 464H528V448h320v128zm-268-64a40 40 0 1 0 80 0 40 40 0 1 0-80 0z" />
  </svg>
);

export default SvgWalletFilled;
