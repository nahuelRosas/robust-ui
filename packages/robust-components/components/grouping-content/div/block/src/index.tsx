import { BlockProps } from "./types";
import { CreateComponent, ForwardRefExotic } from "@robust-ui/constructor";
import React, { forwardRef, Ref } from "react";
export * from "./types";
const Factory: React.ForwardRefExoticComponent<ForwardRefExotic<BlockProps>> =
  forwardRef(function BlockComponent(
    { children, ...props },
    ref
  ): React.JSX.Element {
    const Component = CreateComponent({
      componentType: "div",
    });

    return (
      <Component ref={ref} elementName="Block" display="block" {...props}>
        {children}
      </Component>
    );
  });

export const Block = React.memo(Factory);
