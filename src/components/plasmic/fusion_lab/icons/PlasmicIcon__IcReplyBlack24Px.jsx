// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export function IcReplyBlack24PxIcon(props) {
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
          "M5.442 5.806v-2.58l-3.81 4.516 3.81 4.516V9.613c2.721 0 4.626 1.032 5.987 3.29-.545-3.226-2.177-6.451-5.987-7.097z"
        }
        fill={"currentColor"}
        fillOpacity={".38"}
      ></path>
    </svg>
  );
}

export default IcReplyBlack24PxIcon;
/* prettier-ignore-end */
