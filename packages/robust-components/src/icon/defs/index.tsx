import { Constructor } from "@robust-ui/constructor";
import { DefsProps } from "./types";
import React from "react";

const ComponentDefs = Constructor({
  Component: "defs",
});

export function Defs({
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
}: DefsProps) {
  return (
    <ComponentDefs
      componentName="Defs-SVG"
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
    </ComponentDefs>
  );
}
