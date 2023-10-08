import { CreateComponent } from "@robust-ui/constructor";
import { PathProps, ForwardRefExoticPath } from "./types";
import React, { Ref, forwardRef } from "react";

const Factory: React.ForwardRefExoticComponent<ForwardRefExoticPath> =
  forwardRef<unknown, PathProps>(function PathComponent(
    { children, stroke, fill = "currentColor", strokeLinecap, d, ...props },
    ref: Ref<unknown>,
  ): React.JSX.Element {
    const ComponentPath = CreateComponent<PathProps>({
      ComponentType: "path",
    });
    return (
      <ComponentPath
        elementName="Path-SVG"
        strokeLinecap={strokeLinecap}
        stroke={stroke}
        fill={fill}
        ref={ref}
        d={d}
        {...props}
      >
        {children}
      </ComponentPath>
    );
  });

export const Path = React.memo(Factory);
