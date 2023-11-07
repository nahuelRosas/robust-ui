import { CreateComponent, ForwardRefExotic } from "@robust-ui/constructor";
import { HeaderPropsNoGeneric, HeaderProps } from "./types";
import { generateColorScheme } from "@robust-ui/css-utils";
import { useCleanValue } from "@robust-ui/use-clean-value";
import React, { forwardRef, useMemo } from "react";
export * from "./types";

const Factory: React.ForwardRefExoticComponent<ForwardRefExotic<HeaderProps>> =
  forwardRef(function HeaderComponent({ ...props }, ref): React.JSX.Element {
    const Component = CreateComponent({
      componentType: "header",
    });

    const cleanedProps = useCleanValue({ props });

    const {
      opacityColorScheme = 0.95,
      colorScheme = "black",
      colorSchemeRaw,
      children,
      ...rest
    } = cleanedProps as HeaderPropsNoGeneric;

    const structureStyle = useMemo(
      () =>
        generateColorScheme({
          baseColor: colorSchemeRaw || colorScheme,
          opacity: opacityColorScheme,
          variant: "solid",
        }),
      [colorSchemeRaw, colorScheme, opacityColorScheme]
    );
    return (
      <Component
        backgroundRaw={structureStyle.background}
        colorRaw={structureStyle.color}
        justifyContent="spaceBetween"
        elementName="Header"
        alignItems="center"
        flexDirection="row"
        height="fitContent"
        position="fixed"
        optimizedWidth
        display="flex"
        ref={ref}
        left="0"
        top="0"
        p="2vh"
        {...rest}>
        {children}
      </Component>
    );
  });
export const Header = React.memo(Factory);
