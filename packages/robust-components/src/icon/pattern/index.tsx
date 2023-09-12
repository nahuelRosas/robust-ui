import { Constructor } from "@robust-ui/constructor";
import { PatternProps } from "./types";
import React from "react";

const ComponentPattern = Constructor({
  Component: "pattern",
});

export function Pattern({
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
}: PatternProps) {
  return (
    <ComponentPattern
      componentName="Pattern-SVG"
      stroke={stroke}
      strokeLinecap={strokeLinecap}
      d={d}
      strokeMiterlimit={strokeMiterlimit}
      cx={cx}
      cy={cy}
      r={r}
      fill={fill}
      {...props}>
      {children}
    </ComponentPattern>
  );
}
