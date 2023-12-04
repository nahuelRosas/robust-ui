import { CreateComponent, ForwardRefExotic } from "@robust-ui/constructor";
import { useCleanValue } from "@robust-ui/use-clean-value";
import { generateColorScheme } from "@robust-ui/css-utils";
import { BlockProps, BlockPropsNoGeneric } from "./types";
import React, { forwardRef, useMemo } from "react";
export * from "./types";

const Factory: React.ForwardRefExoticComponent<ForwardRefExotic<BlockProps>> =
  forwardRef(function BlockComponent(
    { children, ...props },
    ref
  ): React.JSX.Element {
    const Component = CreateComponent<HTMLDivElement>({
      componentType: "div",
    });
    const {
      multiLanguageSupport,
      colorSchemeProperty,
      colorSchemeRaw,
      colorScheme,
      ...cleanedProps
    } = useCleanValue({ props }) as BlockPropsNoGeneric;

    const structureStyle = useMemo(() => {
      if (!colorSchemeProperty && !colorSchemeRaw && !colorScheme) return {};
      return generateColorScheme({
        variant: colorSchemeProperty?.variant || "solid",
        opacity: 0.9,
        props: { hover: false, active: false, focus: false },
        baseColor:
          colorSchemeProperty?.baseColor ||
          colorSchemeProperty?.baseColorRaw ||
          colorSchemeRaw ||
          colorScheme ||
          "black",
        ...colorSchemeProperty,
      });
    }, [colorSchemeRaw, colorScheme, colorSchemeProperty]);

    const composeChildren = useMemo(() => {
      if (multiLanguageSupport && children)
        console.error(
          "Warning: multiLanguageSupport and children are not compatible, please use one or the other"
        );
      return multiLanguageSupport || children;
    }, [multiLanguageSupport, children]);
    return (
      <Component
        ref={ref}
        elementName="Block"
        display="block"
        {...structureStyle}
        {...cleanedProps}>
        {composeChildren}
      </Component>
    );
  });

export const Block = React.memo(Factory);
