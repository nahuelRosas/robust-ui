import { Constructor } from "@robust-ui/constructor";
import React, { forwardRef, Ref } from "react";
import { GridProps, ForwardRefExoticGrid } from "./types";

// Create a dynamic styles component using the "div" tag
const Component = Constructor({
  Component: "div",
});

/**
 * Grid Component
 *
 * A flexible container component that displays its children in a grid layout.
 *
 * Render the Grid component
 *
 * @param {GridProps} props - Props for the Grid component
 * @param {React.Ref<unknown>} ref - Ref forwarded to the underlying div element
 * @returns {React.JSX.Element} - Rendered Grid component
 */
const Factory: React.ForwardRefExoticComponent<ForwardRefExoticGrid> =
  forwardRef<unknown, GridProps>(function GridComponent(
    { children, ...props },
    ref: Ref<unknown>,
  ): React.JSX.Element {
    return (
      <Component ref={ref} componentName="Grid" display="grid" {...props}>
        {children}
      </Component>
    );
  });

export const Grid = React.memo(Factory);
