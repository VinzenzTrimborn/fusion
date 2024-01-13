// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export function VectorIcon(props) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 760 771"}
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
          "M351.619 7.593c73.085-.567 154.801-25.235 214.109 17.505 59.13 42.613 51.517 131.864 83.84 197.213 33.76 68.253 116.411 118.965 110.089 194.857-6.303 75.647-92.333 114.609-140.74 173.056-49.775 60.099-73.45 151.843-147.829 175.367-74.402 23.531-147.058-35.979-221.779-58.473-74.121-22.314-167.518-12.33-215.44-73.151-47.941-60.849-16.577-149.42-20.877-226.785-3.87-69.606-25.22-138.77-3.115-204.883 23.41-70.02 65.632-137.362 129.756-173.896 62.975-35.88 139.519-20.248 211.986-20.81z"
        }
        fill={"currentColor"}
        fillOpacity={".2"}
      ></path>
    </svg>
  );
}

export default VectorIcon;
/* prettier-ignore-end */
