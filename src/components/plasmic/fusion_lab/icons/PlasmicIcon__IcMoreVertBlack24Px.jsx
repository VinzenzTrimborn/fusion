// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export function IcMoreVertBlack24PxIcon(props) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 14 16"}
      height={"1em"}
      className={classNames("plasmic-default__svg", className)}
      style={style}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <path
        d={
          "M6.53 5.161c.6 0 1.089-.58 1.089-1.29 0-.71-.49-1.29-1.088-1.29-.599 0-1.089.58-1.089 1.29 0 .71.49 1.29 1.089 1.29zm0 1.29c-.598 0-1.088.581-1.088 1.29 0 .71.49 1.291 1.089 1.291.598 0 1.088-.58 1.088-1.29 0-.71-.49-1.29-1.088-1.29zm0 3.872c-.598 0-1.088.58-1.088 1.29 0 .71.49 1.29 1.089 1.29.598 0 1.088-.58 1.088-1.29 0-.71-.49-1.29-1.088-1.29z"
        }
        fill={"currentColor"}
        fillOpacity={".38"}
      ></path>
    </svg>
  );
}

export default IcMoreVertBlack24PxIcon;
/* prettier-ignore-end */
