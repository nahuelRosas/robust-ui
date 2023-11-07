import { forwardRef, Suspense, useMemo, lazy, Ref } from "react";
import { LabelPropsNoGeneric, LabelProps } from "./types";
import {
  generateColorScheme,
  getTextColor,
  addOpacity,
} from "@robust-ui/css-utils";

import React from "react";
import { extractStrings } from "@robust-ui/utils";
import { useCleanValue } from "@robust-ui/use-clean-value";
import { CreateComponent, ForwardRefExotic } from "@robust-ui/constructor";
export * from "./types";

const Span = lazy(() =>
  import("@robust-ui/span").then((module) => ({
    default: module.Span,
  }))
);

const LabelComponent: React.ForwardRefExoticComponent<
  ForwardRefExotic<LabelProps>
> = forwardRef(function LabelComponent({ ...props }, ref): React.JSX.Element {
  const cleanedProps = useCleanValue({ props });
  const {
    colorScheme = "mulberry",
    multiLanguageSupport,
    opacityColorScheme,
    variant = "outline",
    altColor = true,
    colorSchemeRaw,
    placeHolder,
    fontWeight,
    isFocused,
    isHovered,
    children,
    focus,
    text,
    ...rest
  } = cleanedProps as LabelPropsNoGeneric;

  const Label = CreateComponent({
    componentType: "label",
  });

  const structureStyle = useMemo(
    () =>
      generateColorScheme({
        baseColor: colorSchemeRaw || colorScheme,
        opacity: opacityColorScheme,
        variant: variant,
        altColor,
      }),
    [colorSchemeRaw, colorScheme, opacityColorScheme, variant, altColor]
  );

  const { otherComponents, strings } = useMemo(
    () =>
      extractStrings({
        children,
        multiLanguageSupport,
      }),
    [children, multiLanguageSupport]
  );

  const colorWithOpacity = useMemo(
    () =>
      addOpacity({
        color: colorSchemeRaw || colorScheme,
        opacity: 1,
      }),
    [colorSchemeRaw, colorScheme]
  );

  const colorTextAltColorOff = useMemo(
    () => getTextColor(colorWithOpacity, false),
    [colorWithOpacity]
  );
  const colorTextAltColorOn = useMemo(
    () => getTextColor(colorWithOpacity, true),
    [colorWithOpacity]
  );
  return (
    <Suspense>
      <Label
        elementName="Label"
        transition="transform 0.15s ease-out, font-size 0.15s ease-out, background-color 0.2s ease-out, color 0.15s ease-out, height 0.15s ease-out, width 0.15s ease-out"
        height={isFocused || text ? "fitContent" : "auto"}
        border="1.5vh solid transparent"
        focus={{
          color: colorTextAltColorOff,
          ...focus,
        }}
        transform={
          isFocused || text
            ? `translate(-8%, -50%) scale(0.8)`
            : "translate(0, 0) scale(1)"
        }
        backgroundColor="transparent"
        pointerEvents="none"
        position="absolute"
        alignItems="center"
        fontSize="inherit"
        display="flex"
        zIndex="1"
        bottom="0"
        right="0"
        left="0"
        top="0"
        ref={ref}
        {...rest}>
        <Suspense>
          <Span
            elementName="LabelSpan"
            fontWeight={isFocused || text ? "900" : "500"}
            backgroundColor={
              isFocused || text ? colorWithOpacity : "transparent"
            }
            borderRadius="1.5vh"
            fontSize="inherit"
            color={
              isFocused || text
                ? colorTextAltColorOff
                : isHovered
                ? colorTextAltColorOn
                : structureStyle.color
            }
            px="2vw">
            {strings.length ? strings : placeHolder}
          </Span>
          {otherComponents}
        </Suspense>
      </Label>
    </Suspense>
  );
});
export const Label = React.memo(LabelComponent);
