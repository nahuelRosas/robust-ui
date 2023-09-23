import { BlockProps, ForwardRefExoticBlock } from "./types";
import { CreateComponent } from "@robust-ui/constructor";
import React, { forwardRef, Ref } from "react";
export * from "./types";
const Factory: React.ForwardRefExoticComponent<ForwardRefExoticBlock> =
  forwardRef<unknown, BlockProps>(function BlockComponent(
    { children, ...props },
    ref: Ref<unknown>,
  ): React.JSX.Element {
    const Component = CreateComponent({
      ComponentType: "div",
    });

    return (
      <Component ref={ref} elementName="Block" display="block" {...props}>
        {children}
      </Component>
    );
  });

export const Block = React.memo(Factory);
