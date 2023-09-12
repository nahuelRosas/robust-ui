/**
 * The above code defines a React component called G that renders an SVG <g> element with dynamic
 * styles.
 * @param {GProps}  - - `Constructor` is a function imported from the `@robust-ui/constructor` package.
 * It is used to create a dynamic styled component.
 */
import { Constructor } from "@robust-ui/constructor";
import { GProps } from "./types";
import React from "react";

const ComponentG = Constructor({
  Component: "g",
});

export function G({ children, stroke, strokeLinecap, ...props }: GProps) {
  return (
    <ComponentG
      componentName="G-SVG"
      stroke={stroke}
      strokeLinecap={strokeLinecap}
      {...props}>
      {children}
    </ComponentG>
  );
}
