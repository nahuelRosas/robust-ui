import React, { forwardRef, startTransition, useMemo, useState } from "react";
import { CreateComponent, ForwardRefExotic } from "@robust-ui/constructor";
import { NextLinkProps, NextLinkPropsNoGeneric } from "./types";
import { useCleanValue } from "@robust-ui/use-clean-value";
import { generateColorScheme } from "@robust-ui/css-utils";
import { ExtractStrings } from "@robust-ui/utils";
import { Spinner } from "@robust-ui/spinner";
import Link, { LinkProps } from "next/link";
import { Flex } from "@robust-ui/flex";
import { Icon } from "@robust-ui/icon";
import { Span } from "@robust-ui/span";
export * from "./types";

const Factory: React.ForwardRefExoticComponent<
  ForwardRefExotic<NextLinkProps>
> = forwardRef(function NextLinkComponent(
  { textProps, iconProps, spinnerProps, children, ...props },
  ref
): React.JSX.Element {
  const Component = CreateComponent<LinkProps>({
    componentType: "a",
  });

  const {
    multiLanguageSupport,
    colorSchemeProperty,
    hoverTextProps,
    colorSchemeRaw,
    colorScheme,
    isDisabled,
    direction,
    hoverText,
    hoverHelp,
    isLoading,
    iconType,
    variant,
    ...cleanedProps
  } = useCleanValue({ props }) as NextLinkPropsNoGeneric;

  const structureStyle = useMemo(() => {
    return generateColorScheme({
      variant: variant || "linkLight",
      isDisabled,
      opacity: 0.8,
      baseColor: colorSchemeRaw || colorScheme || "teal",
      ...colorSchemeProperty,
    });
  }, [variant, isDisabled, colorSchemeRaw, colorScheme, colorSchemeProperty]);

  const { otherComponents, strings } = ExtractStrings({
    multiLanguageSupport,
    children,
  });
  const arialLabel = cleanedProps["aria-label"]
    ? cleanedProps["aria-label"]
    : strings.length
      ? `Link with text: ${strings.join(" ")}`
      : iconType
        ? `Link with iconType: ${iconType}`
        : `Link with URL: ${cleanedProps.href}`;

  const [hovered, setHovered] = useState(false);
  return (
    <Component
      onMouseEnter={() => startTransition(() => setHovered(true))}
      onMouseLeave={() => startTransition(() => setHovered(false))}
      borderRadius={
        colorSchemeProperty?.variant === "link" || !colorSchemeProperty
          ? undefined
          : "2.5dvw"
      }
      keyframesRaw={{
        scaleUpLink: {
          "0%": {
            transform: "scale(1)",
          },
          "50%": {
            transform: "scale(1.025)",
          },
          "100%": {
            transform: "scale(1.05)",
          },
        },
        scaleDownLink: {
          "0%": {
            transform: "scale(1.05)",
          },
          "50%": {
            transform: "scale(1.025)",
          },
          "100%": {
            transform: "scale(1)",
          },
        },
      }}
      pointerEvents={isDisabled ? "none" : "inherit"}
      animationRaw={
        hovered
          ? "scaleUpLink 0.1s ease-in-out forwards"
          : "scaleDownLink 0.1s ease-in-out forwards"
      }
      flexDirectionRaw={direction || "row"}
      textRendering="optimizeLegibility"
      aria-labelledby={arialLabel}
      justifyContent="center"
      aria-label={arialLabel}
      elementName="NextLink"
      textDecoration="none"
      position="relative"
      alignItems="center"
      ElementType={Link}
      width="fitContent"
      fontSizeRaw="3dvh"
      cursor="pointer"
      display="flex"
      role="link"
      gap="0.5dvw"
      ref={ref}
      py="1dvh"
      px="1dvw"
      {...structureStyle}
      {...cleanedProps}>
      {isLoading && (
        <Spinner
          colorSchemeRaw={colorSchemeRaw || colorScheme}
          sizeRaw={cleanedProps.fontSizeRaw || cleanedProps.fontSize || "3dvh"}
          elementName="ButtonSpinner"
          {...spinnerProps}
        />
      )}
      {(iconType || iconProps) && (
        <Icon
          sizeRaw={cleanedProps.fontSizeRaw || cleanedProps.fontSize || "4dvh"}
          elementName="NextLinkIcon"
          iconType={iconType}
          {...iconProps}
        />
      )}
      {strings.length > 0 && (
        <Span
          elementName="NextLinkText"
          whiteSpace="nowrap"
          fontSize="inherit"
          userSelect="none"
          {...textProps}>
          {strings}
        </Span>
      )}
      {otherComponents}
      {hoverHelp && (
        <Flex
          fontSizeRaw={
            cleanedProps.fontSizeRaw || cleanedProps.fontSize || "3dvh"
          }
          transitionRaw="opacity 0.5s ease-in-out"
          transformRaw="translate(30%, 125%)"
          opacityRaw={hovered ? "1" : "0"}
          elementName="ButtonHoverText"
          pointerEvents="none"
          background="gray900"
          borderRadius="1.5dvh"
          width="fitContent"
          position="fixed"
          py="1dvh"
          px="1dvw"
          {...hoverTextProps?.containerProps}>
          <Span
            elementName="ButtonHoverText"
            whiteSpace="nowrap"
            userSelect="none"
            color="gray100"
            {...hoverTextProps?.textProps}>
            {hoverText || arialLabel}
          </Span>
        </Flex>
      )}
    </Component>
  );
});
export const NextLink = React.memo(Factory);
