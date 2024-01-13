// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export function LocationArrowSvgrepoComsvgIcon(props) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      viewBox={"0 0 24 24"}
      fill={"none"}
      height={"1em"}
      className={classNames("plasmic-default__svg", className)}
      style={style}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <path
        d={
          "M5.363 12.052c-1.352-.48-2.028-.722-2.23-1.086a1.1 1.1 0 01-.022-1.022c.186-.373.851-.643 2.182-1.181l12.543-5.077c1.31-.53 1.965-.796 2.38-.66.359.118.64.4.759.76.136.413-.13 1.069-.66 2.38l-5.077 12.542c-.538 1.33-.808 1.996-1.181 2.182a1.1 1.1 0 01-1.022-.022c-.365-.202-.605-.878-1.087-2.23l-1.473-4.141c-.093-.263-.14-.395-.217-.505a.997.997 0 00-.25-.25c-.11-.076-.24-.123-.504-.216l-4.14-1.474z"
        }
        stroke={"currentColor"}
        strokeWidth={"2"}
        strokeLinecap={"round"}
        strokeLinejoin={"round"}
      ></path>
    </svg>
  );
}

export default LocationArrowSvgrepoComsvgIcon;
/* prettier-ignore-end */
