import { CreateComponent, ForwardRefExotic } from "@robust-ui/constructor";
import { HeaderProps, HeaderPropsNoGeneric } from "./types";
import { generateColorScheme } from "@robust-ui/css-utils";
import { useCleanValue } from "@robust-ui/use-clean-value";
import React, { forwardRef, useMemo } from "react";
export * from "./types";

const Factory: React.ForwardRefExoticComponent<ForwardRefExotic<HeaderProps>> =
  forwardRef(function HeaderComponent(
    { children, ...props },
    ref
  ): React.JSX.Element {
    const Component = CreateComponent<HTMLElement>({
      componentType: "header",
    });

    const {
      multiLanguageSupport,
      colorSchemeProperty,
      colorSchemeRaw,
      colorScheme,
      variant,
      ...cleanedProps
    } = useCleanValue({ props }) as HeaderPropsNoGeneric;

    const structureStyle = useMemo(() => {
      if (!colorSchemeProperty && !colorSchemeRaw && !colorScheme) return {};
      return generateColorScheme({
        variant: variant || colorSchemeProperty?.variant || "solid",
        opacity: 0.95,
        props: {
          hover: false,
          active: false,
          focus: false,
        },
        baseColor:
          colorSchemeProperty?.baseColor ||
          colorSchemeProperty?.baseColorRaw ||
          colorSchemeRaw ||
          colorScheme ||
          "black",
        ...colorSchemeProperty,
      });
    }, [colorSchemeProperty, colorSchemeRaw, colorScheme, variant]);

    const composeChildren = useMemo(() => {
      if (multiLanguageSupport && children)
        console.error(
          "Warning: multiLanguageSupport and children are not compatible, please use one or the other"
        );
      return multiLanguageSupport || children;
    }, [multiLanguageSupport, children]);

    return (
      <Component
        justifyContent="spaceBetween"
        elementName="Header"
        alignItems="center"
        flexDirection="row"
        height="fitContent"
        position="fixed"
        optimizedWidth
        display="flex"
        p="2.5vh"
        ref={ref}
        left="0"
        top="0"
        {...structureStyle}
        {...cleanedProps}>
        {composeChildren}
      </Component>
    );
  });
export const Header = React.memo(Factory);
