import { Constructor } from "@robust-ui/constructor";
import { RectProps } from "./types";
import React from "react";

const ComponentRect = Constructor({
  Component: "rect",
});

export function Rect({
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
}: RectProps) {
  return (
    <ComponentRect
      componentName="Rect-SVG"
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
    </ComponentRect>
  );
}
