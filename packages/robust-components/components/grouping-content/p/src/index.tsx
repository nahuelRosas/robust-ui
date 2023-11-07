import { TextProps, TextPropsNoGeneric } from "./types";
import { useCleanValue } from "@robust-ui/use-clean-value";
import { CreateComponent, ForwardRefExotic } from "@robust-ui/constructor";
import React, { Ref, forwardRef } from "react";
export * from "./types";
const Factory: React.ForwardRefExoticComponent<ForwardRefExotic<TextProps>> =
  forwardRef(function TextComponent({ ...props }, ref): React.JSX.Element {
    const Component = CreateComponent({
      componentType: "p",
    });
    const cleanedProps = useCleanValue({ props });
    const { children, ...rest } = cleanedProps as TextPropsNoGeneric;
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
        {...rest}>
        {children}
      </Component>
    );
  });
export const Text = React.memo(Factory);
