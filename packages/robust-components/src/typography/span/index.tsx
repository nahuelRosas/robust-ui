import React from "react";
import { Constructor } from "@robust-ui/constructor";
import { SpanProps } from "./types";

const Component = Constructor({
  Component: "span",
});

function Factory({ children, ref, ...props }: SpanProps) {
  return (
    <Component
      componentName="Span"
      fontSize="1rem"
      whiteSpace="normal"
      fontStyle="normal"
      lineHeight="normal"
      textRendering="optimizeLegibility"
      ref={ref}
      {...props}>
      {children}
    </Component>
  );
}

export const Span = React.memo(Factory);
