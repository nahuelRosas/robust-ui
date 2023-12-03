import {
  CreateComponent,
  ForwardRefExotic,
  useCleanValue,
} from "@robust-ui/nextjs-components";
import { NextLinkProps, NextLinkPropsNoGeneric } from "./types";
import React, {
  Suspense,
  forwardRef,
  useMemo,
  useState,
  startTransition,
} from "react";
import Link, { LinkProps } from "next/link";
import { ExtractStrings } from "@robust-ui/utils";
import { Spinner } from "../spinner";
import { Span } from "../span";
import { generateColorScheme } from "@robust-ui/css-utils";
import { Flex } from "../flex";
import { Icon } from "../icon";
export * from "./types";

const Factory: React.ForwardRefExoticComponent<
  ForwardRefExotic<NextLinkProps>
> = forwardRef(function NextLinkComponent(
  { textProps, iconProps, children, ...props },
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
    variant,
    iconType,
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
          : "2.5vw"
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
      pointerEventRaw={isDisabled ? "none" : hovered ? "all" : "none"}
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
      fontSizeRaw="3vh"
      cursor="pointer"
      display="flex"
      role="link"
      gap="0.5vw"
      ref={ref}
      py="1vh"
      px="1vw"
      {...structureStyle}
      {...cleanedProps}>
      {/* {isLoading && (
        <Suspense>
          <Spinner
            colorSchemeRaw={
              cleanedProps.colorSchemeRaw || cleanedProps.colorScheme
            }
            elementName="NextLinkSpinner"
            sizeRaw="2.5vh"
            {...loadingProps}
          />
        </Suspense>
      )}*/}
      {(iconType || iconProps) && (
        <Icon
          sizeRaw={cleanedProps.fontSizeRaw || cleanedProps.fontSize || "4vh"}
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
            cleanedProps.fontSizeRaw || cleanedProps.fontSize || "3vh"
          }
          transitionRaw="opacity 0.5s ease-in-out"
          transformRaw="translate(30%, 125%)"
          opacityRaw={hovered ? "1" : "0"}
          elementName="ButtonHoverText"
          pointerEventsRaw="none"
          background="gray900"
          borderRadius="1.5vh"
          width="fitContent"
          position="fixed"
          py="1vh"
          px="1vw"
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
