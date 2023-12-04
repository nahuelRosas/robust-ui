import { CreateComponent, ForwardRefExotic } from "@robust-ui/constructor";
import { useCleanValue } from "@robust-ui/use-clean-value";
import { PathProps, PathPropsNoGeneric } from "./types";
import React, { forwardRef } from "react";
export * from "./types";
const Factory: React.ForwardRefExoticComponent<ForwardRefExotic<PathProps>> =
  forwardRef(function PathComponent({ ...props }, ref): React.JSX.Element {
    const ComponentPath = CreateComponent<SVGPathElement>({
      componentType: "path",
    });

    const { children, ...cleanedProps } = useCleanValue({
      props,
    }) as PathPropsNoGeneric;

    return (
      <ComponentPath elementName="Path-SVG" ref={ref} {...cleanedProps}>
        {children}
      </ComponentPath>
    );
  });

export const Path = React.memo(Factory);
