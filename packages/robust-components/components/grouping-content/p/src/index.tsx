import { TextProps, ForwardRefExoticText } from "./types";
import { CreateComponent } from "@robust-ui/constructor";
import React, { Ref, forwardRef } from "react";
export * from "./types";
const Factory: React.ForwardRefExoticComponent<ForwardRefExoticText> =
  forwardRef<unknown, TextProps>(function TextComponent(
    { children, ...props },
    ref: Ref<unknown>,
  ): React.JSX.Element {
    const Component = CreateComponent({
      ComponentType: "p",
    });

    return (
      <Component
        elementName="Text"
        textRendering="optimizeLegibility"
        fontSize="1rem"
        whiteSpace="normal"
        fontStyle="normal"
        lineHeight="normal"
        padding="0.5rem"
        ref={ref}
        {...props}
      >
        {children}
      </Component>
    );
  });
export const Text = React.memo(Factory);
