import { CreateComponent, ForwardRefExotic } from "@robust-ui/constructor";
import { generateColorScheme } from "@robust-ui/css-utils";
import { useCleanValue } from "@robust-ui/use-clean-value";
import { SpinnerProps, SpinnerPropsClean } from "./types";
import React, { forwardRef, lazy, useMemo } from "react";
import { models } from "./models";
export * from "./types";

const Flex = lazy(() =>
  import("@robust-ui/flex").then((module) => ({
    default: module.Flex,
  }))
);
const Factory: React.ForwardRefExoticComponent<ForwardRefExotic<SpinnerProps>> =
  forwardRef(function SpinnerComponent({ ...props }, ref): React.JSX.Element {
    const Component = CreateComponent({
      componentType: "span",
    });
    const cleanedProps = useCleanValue({ props });
    const {
      colorScheme = "mulberry",
      opacityColorScheme,
      colorSchemeRaw,
      model = "A",
      colorsRaw,
      variant,
      altColor,
      sizeRaw,
      colors,
      height,
      width,
      size,
      ...rest
    } = cleanedProps as SpinnerPropsClean;

    const structureStyle = useMemo(
      () =>
        generateColorScheme({
          opacity: opacityColorScheme | 1,
          baseColor: colorSchemeRaw || colorScheme,
          variant: variant || "solid",
          altColor,
        }),
      [colorSchemeRaw, colorScheme, opacityColorScheme, variant, altColor]
    );

    const modelSelected = useMemo(
      () =>
        models({
          colorsRaw: {
            primary: structureStyle.background,
            secondary: structureStyle.color,
          },
          colors,
          model,
        }),
      [colors, model, structureStyle.background, structureStyle.color]
    );

    return (
      <Flex
        justifyContent="center"
        position="relative"
        alignItems="center"
        height="100%"
        width="100%"
        {...rest}>
        <Component
          height={sizeRaw || size || height || "2.5vh"}
          width={sizeRaw || size || width || "2.5vh"}
          elementName="Spinner"
          ref={ref}
          {...modelSelected}
          {...rest}
        />
      </Flex>
    );
  });

export const Spinner = React.memo(Factory);
