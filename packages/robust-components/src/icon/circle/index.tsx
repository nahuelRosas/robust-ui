import { Constructor } from "@robust-ui/constructor";
import { CircleProps } from "./types";
import React from "react";

const ComponentCircle = Constructor({
  Component: "circle",
});

export function Circle({
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
}: CircleProps) {
  return (
    <ComponentCircle
      componentName="Circle-SVG"
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
    </ComponentCircle>
  );
}
