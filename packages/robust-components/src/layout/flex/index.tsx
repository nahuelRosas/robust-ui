import { Constructor } from "@robust-ui/constructor";
import React, { forwardRef, Ref } from "react";
import { FlexProps, ForwardRefExoticFlex } from "./types";

// Create a component using the "div" tag
const Component = Constructor({
  Component: "div",
});

/**
 * Flex Component
 *
 * A flexible container component that displays its children in a flex layout.
 *
 * Render the Flex component
 *
 * @param {FlexProps} props - Props for the Flex component
 * @param {React.Ref<unknown>} ref - Ref forwarded to the underlying div element
 * @returns {React.JSX.Element} - Rendered Flex component
 */
const Factory: React.ForwardRefExoticComponent<ForwardRefExoticFlex> =
  forwardRef<unknown, FlexProps>(function FlexComponent(
    { children, ...props },
    ref: Ref<unknown>,
  ): React.JSX.Element {
    return (
      <Component
        ref={ref}
        componentName="Flex"
        display="flex"
        flexDirection="row"
        justifyContent="flexStart"
        alignItems="center"
        {...props}
      >
        {children}
      </Component>
    );
  });

export const Flex = React.memo(Factory);
