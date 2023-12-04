import { CreateComponent, ForwardRefExotic } from "@robust-ui/constructor";
import { generateColorScheme } from "@robust-ui/css-utils";
import { useCleanValue } from "@robust-ui/use-clean-value";
import { SpanProps, SpanPropsNoGeneric } from "./types";
import React, { forwardRef, useMemo } from "react";
export * from "./types";

const Factory: React.ForwardRefExoticComponent<ForwardRefExotic<SpanProps>> =
  forwardRef(function SpanComponent(
    { children, ...props },
    ref,
  ): React.JSX.Element {
    const Component = CreateComponent<HTMLSpanElement>({
      componentType: "span",
    });

    const {
      multiLanguageSupport,
      colorSchemeProperty,
      colorSchemeRaw,
      colorScheme,
      ...cleanedProps
    } = useCleanValue({ props }) as SpanPropsNoGeneric;

    const structureStyle = useMemo(() => {
      if (!colorSchemeProperty && !colorSchemeRaw && !colorScheme) return {};
      return generateColorScheme({
        variant: colorSchemeProperty?.variant || "link",
        opacity: 1,
        baseColor:
          colorSchemeProperty?.baseColor ||
          colorSchemeProperty?.baseColorRaw ||
          colorSchemeRaw ||
          colorScheme ||
          "indigo",
        ...colorSchemeProperty,
      });
    }, [colorSchemeRaw, colorScheme, colorSchemeProperty]);

    const composeChildren = useMemo(() => {
      if (multiLanguageSupport && children)
        console.error(
          "Warning: multiLanguageSupport and children are not compatible, please use one or the other",
        );
      return multiLanguageSupport || children;
    }, [multiLanguageSupport, children]);
    return (
      <Component
        textRendering="optimizeLegibility"
        whiteSpace="normal"
        lineHeight="normal"
        elementName="Span"
        fontStyle="normal"
        ref={ref}
        {...structureStyle}
        {...cleanedProps}
      >
        {composeChildren}
      </Component>
    );
  });
export const Span = React.memo(Factory);
