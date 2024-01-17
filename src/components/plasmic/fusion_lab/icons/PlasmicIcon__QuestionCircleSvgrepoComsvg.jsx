// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export function QuestionCircleSvgrepoComsvgIcon(props) {
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
        fillRule={"evenodd"}
        clipRule={"evenodd"}
        d={
          "M12 2.75a9.25 9.25 0 100 18.5 9.25 9.25 0 000-18.5zM1.25 12C1.25 6.063 6.063 1.25 12 1.25S22.75 6.063 22.75 12 17.937 22.75 12 22.75 1.25 17.937 1.25 12zM12 7.75c-.621 0-1.125.504-1.125 1.125a.75.75 0 01-1.5 0 2.625 2.625 0 113.96 2.26 1.86 1.86 0 00-.465.369c-.102.12-.12.2-.12.246V13a.75.75 0 01-1.5 0v-1.25c0-.506.222-.916.477-1.217.252-.297.566-.524.845-.689A1.124 1.124 0 0012 7.75zM12 17a1 1 0 100-2 1 1 0 000 2z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default QuestionCircleSvgrepoComsvgIcon;
/* prettier-ignore-end */
