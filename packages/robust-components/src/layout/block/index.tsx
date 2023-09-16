import { Constructor } from "@robust-ui/constructor";
import React, { forwardRef, Ref } from "react";
import { BlockProps, ForwardRefExoticBlock } from "./types";

// Create a dynamic styles component using the "div" tag
const Component = Constructor({
  Component: "div",
});

/**
 * Block Component
 *
 * A flexible container component that displays its children in a Block layout.
 *
 * Render the Block component
 *
 * @param {BlockProps} props - Props for the Block component
 * @param {React.Ref<unknown>} ref - Ref forwarded to the underlying div element
 * @returns {React.JSX.Element} - Rendered Block component
 */
export const Block: React.ForwardRefExoticComponent<ForwardRefExoticBlock> =
  forwardRef<unknown, BlockProps>(function BlockComponent(
    { children, ...props },
    ref: Ref<unknown>,
  ): React.JSX.Element {
    return (
      <Component ref={ref} componentName="Block" display="block" {...props}>
        {children}
      </Component>
    );
  });
