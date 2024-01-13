// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export function CheckCircleIcon(props) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 20 18"}
      height={"1em"}
      className={classNames("plasmic-default__svg", className)}
      style={style}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <path
        d={
          "M17.988 8.31V9c0 1.617-.572 3.191-1.627 4.486-1.056 1.296-2.54 2.243-4.23 2.702a8.875 8.875 0 01-5.153-.157c-1.654-.56-3.066-1.596-4.026-2.953a7.03 7.03 0 01-1.299-4.576c.116-1.614.798-3.15 1.943-4.38C4.742 2.894 6.29 2.038 8.01 1.68a8.858 8.858 0 015.13.465"
        }
        stroke={"currentColor"}
        strokeWidth={"1.6"}
        strokeLinecap={"round"}
        strokeLinejoin={"round"}
      ></path>

      <path
        d={"M17.988 3l-8.176 7.508-2.453-2.25"}
        stroke={"currentColor"}
        strokeWidth={"1.6"}
        strokeLinecap={"round"}
        strokeLinejoin={"round"}
      ></path>
    </svg>
  );
}

export default CheckCircleIcon;
/* prettier-ignore-end */
