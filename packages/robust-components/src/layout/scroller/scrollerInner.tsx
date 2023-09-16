import { Constructor } from "@robust-ui/constructor";
import React, { forwardRef } from "react";
import { useInjectCSS } from "@robust-ui/hooks";
import { ForwardRefExoticFlex, ScrollerProps } from "./types";
const Component = Constructor({
  Component: "div",
});

const ScrollInner: React.ForwardRefExoticComponent<ForwardRefExoticFlex> =
  forwardRef<unknown, ScrollerProps>(function ScrollerComponent(
    {
      children,
      scrollDirection = "vertical",
      onTouchStart,
      onTouchMove,
      onTouchEnd,
      onWheel,
      ...otherProps
    },
    ref,
  ) {
    const { addProperty } = useInjectCSS();
    addProperty({
      selector: "html",
      values: ["touch-action: none;"],
    });
    return (
      <Component
        componentName="ScrollerInner"
        onTouchStart={onTouchStart}
        onTouchMove={onTouchMove}
        onTouchEnd={onTouchEnd}
        onWheel={onWheel}
        display="flex"
        ref={ref}
        height="100%"
        flexDirection={scrollDirection === "vertical" ? "column" : "row"}
        {...otherProps}
      >
        {children}
      </Component>
    );
  });

export const ScrollerInner = React.memo(ScrollInner);
