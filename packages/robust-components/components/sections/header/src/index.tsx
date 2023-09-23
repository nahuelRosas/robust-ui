import { HeaderProps, ForwardRefExoticHeader } from "./types";
import { CreateComponent } from "@robust-ui/constructor";
import React, { Ref, forwardRef } from "react";
export * from "./types";

const Factory: React.ForwardRefExoticComponent<ForwardRefExoticHeader> =
  forwardRef<unknown, HeaderProps>(function HeaderComponent(
    { children, ...props },
    ref: Ref<unknown>,
  ): React.JSX.Element {
    const Component = CreateComponent({
      ComponentType: "header",
    });
    return (
      <Component
        elementName="Header"
        display="flex"
        flexDirection="row"
        padding="1rem"
        justifyContent="spaceBetween"
        alignItems="center"
        position="relative"
        width="initial"
        height="fitContent"
        ref={ref}
        {...props}
      >
        {children}
      </Component>
    );
  });
export const Header = React.memo(Factory);
