import { Constructor } from "@robust-ui/constructor";
import { UseProps } from "./types";
import React from "react";

const ComponentUse = Constructor({
  Component: "use",
});

export function Use({
  children,
  stroke,
  strokeLinecap,
  strokeMiterlimit,
  cx,
  cy,
  r,
  d,
  fill,
  ...props
}: UseProps) {
  return (
    <ComponentUse
      componentName="Use-SVG"
      stroke={stroke}
      strokeLinecap={strokeLinecap}
      d={d}
      strokeMiterlimit={strokeMiterlimit}
      cx={cx}
      cy={cy}
      r={r}
      fill={fill}
      {...props}
    >
      {children}
    </ComponentUse>
  );
}
