import { FlexProps, ForwardRefExoticFlex } from "./types";
import { CreateComponent } from "@robust-ui/constructor";
import React, { forwardRef, Ref } from "react";
export * from "./types";
const Factory: React.ForwardRefExoticComponent<ForwardRefExoticFlex> =
  forwardRef<unknown, FlexProps>(function FlexComponent(
    { children, ...props },
    ref: Ref<unknown>,
  ): React.JSX.Element {
    const Component = CreateComponent({
      ComponentType: "div",
    });

    return (
      <Component
        ref={ref}
        elementName="Flex"
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
