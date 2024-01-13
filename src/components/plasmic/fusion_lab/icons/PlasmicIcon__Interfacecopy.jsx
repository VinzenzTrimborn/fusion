// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export function InterfacecopyIcon(props) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 24 24"}
      height={"1em"}
      className={classNames("plasmic-default__svg", className)}
      style={style}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <path
        d={
          "M21 8H9a1 1 0 00-1 1v12a1 1 0 001 1h12a1 1 0 001-1V9a1 1 0 00-1-1zm-1 12H10V10h10v10zM6 15a1 1 0 01-1 1H3a1 1 0 01-1-1V3a1 1 0 011-1h12a1 1 0 011 1v2a1 1 0 01-2 0V4H4v10h1a1 1 0 011 1z"
        }
        fill={"currentColor"}
        fillOpacity={".32"}
      ></path>
    </svg>
  );
}

export default InterfacecopyIcon;
/* prettier-ignore-end */
