import { CreateComponent, ForwardRefExotic } from "@robust-ui/constructor";
import { useCleanValue } from "@robust-ui/use-clean-value";
import { generateColorScheme } from "@robust-ui/css-utils";
import { TextProps, TextPropsNoGeneric } from "./types";
import React, { forwardRef, useMemo } from "react";
export * from "./types";

const Factory: React.ForwardRefExoticComponent<ForwardRefExotic<TextProps>> =
  forwardRef(function TextComponent({ ...props }, ref): React.JSX.Element {
    const Component = CreateComponent<HTMLParagraphElement>({
      componentType: "p",
    });

    const {
      multiLanguageSupport,
      colorSchemeProperty,
      colorSchemeRaw,
      colorScheme,
      children,
      ...cleanedProps
    } = useCleanValue({ props }) as TextPropsNoGeneric;

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
          "Warning: multiLanguageSupport and children are not compatible, please use one or the other"
        );
      return multiLanguageSupport || children;
    }, [multiLanguageSupport, children]);

    return (
      <Component
        textRendering="optimizeLegibility"
        lineHeight="normal"
        whiteSpace="normal"
        elementName="Text"
        fontStyle="normal"
        padding="0.5rem"
        fontSize="1rem"
        ref={ref}
        {...structureStyle}
        {...cleanedProps}>
        {composeChildren}
      </Component>
    );
  });
export const Text = React.memo(Factory);
