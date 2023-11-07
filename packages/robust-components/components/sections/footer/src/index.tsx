import { CreateComponent, ForwardRefExotic } from "@robust-ui/constructor";
import { FooterPropsNoGeneric, FooterProps } from "./types";
import { generateColorScheme } from "@robust-ui/css-utils";
import { useCleanValue } from "@robust-ui/use-clean-value";
import React, { forwardRef, useMemo } from "react";
export * from "./types";

const Factory: React.ForwardRefExoticComponent<ForwardRefExotic<FooterProps>> =
  forwardRef(function FooterComponent({ ...props }, ref): React.JSX.Element {
    const Component = CreateComponent({
      componentType: "footer",
    });
    const cleanedProps = useCleanValue({ props });

    const {
      opacityColorScheme = 0.95,
      colorScheme = "black",
      colorSchemeRaw,
      children,
      ...rest
    } = cleanedProps as FooterPropsNoGeneric;

    const structureStyle = useMemo(
      () =>
        generateColorScheme({
          baseColor: colorSchemeRaw || colorScheme,
          opacity: opacityColorScheme,
          variant: "solid",
        }),
      [colorScheme, colorSchemeRaw, opacityColorScheme]
    );
    return (
      <Component
        backgroundRaw={structureStyle.background}
        colorRaw={structureStyle.color}
        justifyContent="spaceBetween"
        elementName="Footer"
        height="fitContent"
        alignItems="center"
        flexDirection="row"
        position="relative"
        optimizedWidth
        display="flex"
        ref={ref}
        p="2vh"
        {...rest}>
        {children}
      </Component>
    );
  });
export const Footer = React.memo(Factory);
