import { Constructor } from "@robust-ui/constructor";
import React from "react";
import { TextProps } from "./types";

const Component = Constructor({
  Component: "p",
});

function Factory({
  children,
  ref,
  selectorMultiColors,
  colors,
  colorsRandom,
  ...props
}: TextProps) {
  return (
    <Component
      fontSize="1rem"
      componentName="Text"
      fontStyle="normal"
      lineHeight="normal"
      padding="1rem"
      ref={ref}
      {...props}
    >
      {children}
    </Component>
  );
}

export const Text = React.memo(Factory);
