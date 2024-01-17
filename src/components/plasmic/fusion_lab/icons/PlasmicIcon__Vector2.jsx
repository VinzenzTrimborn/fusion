// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export function Vector2Icon(props) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 11 8"}
      height={"1em"}
      className={classNames("plasmic-default__svg", className)}
      style={style}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <path
        d={
          "M9.163 0L5.192 4.698 1.22 0 0 1.446l5.192 6.155 5.191-6.155L9.163 0z"
        }
        fill={"currentColor"}
        fillOpacity={".38"}
      ></path>
    </svg>
  );
}

export default Vector2Icon;
/* prettier-ignore-end */
