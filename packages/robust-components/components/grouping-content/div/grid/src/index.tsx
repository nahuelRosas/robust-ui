import { GridProps, ForwardRefExoticGrid } from "./types";
import { CreateComponent } from "@robust-ui/constructor";
import React, { forwardRef, Ref } from "react";
export * from "./types";

const Factory: React.ForwardRefExoticComponent<ForwardRefExoticGrid> =
  forwardRef<unknown, GridProps>(function GridComponent(
    { children, ...props },
    ref: Ref<unknown>,
  ): React.JSX.Element {
    const Component = CreateComponent({
      ComponentType: "div",
    });

    return (
      <Component ref={ref} elementName="Grid" display="grid" {...props}>
        {children}
      </Component>
    );
  });

export const Grid = React.memo(Factory);
