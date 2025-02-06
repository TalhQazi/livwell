import React from "react";
import { SvgProps } from ".";

export default function ArrowIcon({ size = "85", fill = "none" }: SvgProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 374 335"
      fill={fill}
      xmlns="http://www.w3.org/2000/svg"
    >
      <g filter="url(#filter0_d_1_294)">
        <circle cx="351.739" cy="265.827" r="9.30525" fill="white" />
      </g>
      <path
        d="M343.997 262.722L206.687 246.806L31.6385 72.2779"
        stroke="white"
        stroke-width="3"
      />
      <path
        d="M28.0866 86.6423L30.331 69.9119L47.3423 69.9379"
        stroke="white"
        stroke-width="3"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <defs>
        <filter
          id="filter0_d_1_294"
          x="330.434"
          y="244.521"
          width="42.6105"
          height="42.6105"
          filterUnits="userSpaceOnUse"
          color-interpolation-filters="sRGB"
        >
          <feFlood flood-opacity="0" result="BackgroundImageFix" />
          <feColorMatrix
            in="SourceAlpha"
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
            result="hardAlpha"
          />
          <feMorphology
            radius="4"
            operator="dilate"
            in="SourceAlpha"
            result="effect1_dropShadow_1_294"
          />
          <feOffset />
          <feGaussianBlur stdDeviation="4" />
          <feComposite in2="hardAlpha" operator="out" />
          <feColorMatrix
            type="matrix"
            values="0 0 0 0 0.223166 0 0 0 0 0 0 0 0 0 0.858333 0 0 0 0.9 0"
          />
          <feBlend
            mode="normal"
            in2="BackgroundImageFix"
            result="effect1_dropShadow_1_294"
          />
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="effect1_dropShadow_1_294"
            result="shape"
          />
        </filter>
      </defs>
    </svg>
  );
}
