import { CreateComponent, ForwardRefExotic } from "@robust-ui/constructor";
import React, { forwardRef } from "react";
import { FlexProps } from "./types";
export * from "./types";

const Factory: React.ForwardRefExoticComponent<ForwardRefExotic<FlexProps>> =
  forwardRef(function FlexComponent(
    { children, ...props },
    ref
  ): React.JSX.Element {
    const Component = CreateComponent({
      componentType: "div",
    });

    return (
      <Component
        ref={ref}
        justifyContent="flexStart"
        flexDirection="row"
        alignItems="center"
        elementName="Flex"
        display="flex"
        {...props}>
        {children}
      </Component>
    );
  });

export const Flex = React.memo(Factory);
