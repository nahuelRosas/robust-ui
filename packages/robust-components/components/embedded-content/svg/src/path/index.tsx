import { CreateComponent, ForwardRefExotic } from "@robust-ui/constructor";
import React, { SVGAttributes, forwardRef } from "react";
import { PathProps } from "./types";

const Factory: React.ForwardRefExoticComponent<ForwardRefExotic<PathProps>> =
  forwardRef(function PathComponent(
    { children, stroke, fill = "currentColor", strokeLinecap, d, ...props },
    ref
  ): React.JSX.Element {
    const ComponentPath = CreateComponent<SVGAttributes<SVGPathElement>>({
      componentType: "path",
    });
    return (
      <ComponentPath
        elementName="Path-SVG"
        strokeLinecap={strokeLinecap}
        stroke={stroke}
        fill={fill}
        ref={ref}
        d={d}
        {...props}>
        {children}
      </ComponentPath>
    );
  });

export const Path = React.memo(Factory);
