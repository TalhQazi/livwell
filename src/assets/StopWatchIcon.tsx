import React from "react";
import { SvgProps } from ".";

export default function StopWatchIcon({
  size = "30",
  fill = "none",
}: SvgProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 30 30"
      fill={fill}
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M24 16C24 20.9706 19.9706 25 15 25C10.0294 25 6 20.9706 6 16C6 11.0294 10.0294 7 15 7C19.9706 7 24 11.0294 24 16Z"
        stroke="black"
        stroke-width="1.5"
      />
      <path
        d="M15 16V12"
        stroke="black"
        stroke-width="1.5"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M13 5H17"
        stroke="black"
        stroke-width="1.5"
        stroke-linecap="round"
      />
    </svg>
  );
}
