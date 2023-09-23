import { SpanProps, ForwardRefExoticSpan } from "./types";
import { CreateComponent } from "@robust-ui/constructor";
import React, { Ref, forwardRef } from "react";
export * from "./types";

const Factory: React.ForwardRefExoticComponent<ForwardRefExoticSpan> =
  forwardRef<unknown, SpanProps>(function SpanComponent(
    { children, ...props },
    ref: Ref<unknown>,
  ): React.JSX.Element {
    const Component = CreateComponent({
      ComponentType: "span",
    });
    return (
      <Component
        elementName="Span"
        fontSize="1rem"
        whiteSpace="normal"
        fontStyle="normal"
        lineHeight="normal"
        textRendering="optimizeLegibility"
        ref={ref}
        {...props}
      >
        {children}
      </Component>
    );
  });
export const Span = React.memo(Factory);
