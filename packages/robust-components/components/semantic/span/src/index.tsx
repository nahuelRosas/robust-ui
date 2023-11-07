import { CreateComponent, ForwardRefExotic } from "@robust-ui/constructor";
import { useCleanValue } from "@robust-ui/use-clean-value";
import React, { forwardRef } from "react";
import { SpanProps, SpanPropsNoGeneric } from "./types";
export * from "./types";

const Factory: React.ForwardRefExoticComponent<ForwardRefExotic<SpanProps>> =
  forwardRef(function SpanComponent({ ...props }, ref): React.JSX.Element {
    const Component = CreateComponent({
      componentType: "span",
    });

    const cleanedProps = useCleanValue({ props });

    const { children, ...rest } = cleanedProps as SpanPropsNoGeneric;

    return (
      <Component
        textRendering="optimizeLegibility"
        whiteSpace="normal"
        lineHeight="normal"
        elementName="Span"
        fontStyle="normal"
        ref={ref}
        {...rest}>
        {children}
      </Component>
    );
  });
export const Span = React.memo(Factory);
