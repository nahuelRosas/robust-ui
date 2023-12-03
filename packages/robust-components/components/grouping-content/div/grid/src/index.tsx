import { GridProps } from "./types";
import { CreateComponent, ForwardRefExotic } from "@robust-ui/constructor";
import React, { forwardRef } from "react";
export * from "./types";

const Factory: React.ForwardRefExoticComponent<ForwardRefExotic<GridProps>> =
  forwardRef(function GridComponent(
    { children, ...props },
    ref,
  ): React.JSX.Element {
    const Component = CreateComponent({
      componentType: "div",
    });

    return (
      <Component
        ref={ref}
        elementName="Grid"
        display="grid"
        // {...props}
      >
        {children}
      </Component>
    );
  });

export const Grid = React.memo(Factory);
