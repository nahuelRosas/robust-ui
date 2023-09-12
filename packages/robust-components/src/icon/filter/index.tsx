import { Constructor } from "@robust-ui/constructor";
import { FilterProps } from "./types";
import React from "react";

const ComponentFilter = Constructor({
  Component: "filter",
});

export function Filter({
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
}: FilterProps) {
  return (
    <ComponentFilter
      componentName="Filter-SVG"
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
    </ComponentFilter>
  );
}
