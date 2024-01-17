// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export function QuestionIcon(props) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 40 40"}
      height={"1em"}
      className={classNames("plasmic-default__svg", className)}
      style={style}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <circle
        cx={"20"}
        cy={"20"}
        r={"15"}
        stroke={"currentColor"}
        strokeWidth={"2"}
      ></circle>

      <circle
        cx={"20"}
        cy={"30"}
        r={".833"}
        fill={"currentColor"}
        stroke={"currentColor"}
      ></circle>

      <path
        d={
          "M20 26.667v-2.365a3.656 3.656 0 012.5-3.469v0a3.656 3.656 0 002.5-3.468v-.855a4.843 4.843 0 00-4.843-4.843H20a5 5 0 00-5 5v0"
        }
        stroke={"currentColor"}
        strokeWidth={"2"}
      ></path>
    </svg>
  );
}

export default QuestionIcon;
/* prettier-ignore-end */
