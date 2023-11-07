import { generateColorScheme } from "@robust-ui/css-utils";
import { useCleanValue } from "@robust-ui/use-clean-value";
import { CreateComponent, ForwardRefExotic } from "@robust-ui/constructor";
import { extractStrings } from "@robust-ui/utils";
import Link from "next/link";
import { startTransition } from "react";
export * from "./types";
import { NextLinkPropsNoGeneric, NextLinkProps } from "./types";
import React, {
  forwardRef,
  useState,
  Suspense,
  useMemo,
  lazy,
  Ref,
} from "react";

const Flex = lazy(() =>
  import("@robust-ui/flex").then((module) => ({ default: module.Flex }))
);

const Spinner = lazy(() =>
  import("@robust-ui/spinner").then((module) => ({ default: module.Spinner }))
);

const Icon = lazy(() =>
  import("@robust-ui/icon").then((module) => ({ default: module.Icon }))
);

const Span = lazy(() =>
  import("@robust-ui/span").then((module) => ({ default: module.Span }))
);

const Factory: React.ForwardRefExoticComponent<
  ForwardRefExotic<NextLinkProps>
> = forwardRef(function NextLinkComponent(
  { ...props },
  ref
): React.JSX.Element {
  const Component = CreateComponent({
    componentType: "a",
  });
  const cleanedProps = useCleanValue({ props });
  const [isHovered, setHovered] = useState(false);
  const {
    loadingProps = {
      spinnerPosition: "left",
    },
    multiLanguageSupport,
    opacityColorScheme,
    variant = "link",
    altColor = true,
    hoverTextProps,
    colorSchemeRaw,
    colorScheme,
    fontSizeRaw,
    isDisabled,
    textProps,
    isLoading,
    hoverText,
    iconProps,
    children,
    fontSize,
    display,
    href,
    ...rest
  } = cleanedProps as NextLinkPropsNoGeneric;

  const structureStyle = useMemo(
    () =>
      generateColorScheme({
        baseColor: colorSchemeRaw || colorScheme,
        opacity: opacityColorScheme,
        isDisabled,
        altColor,
        variant,
      }),
    [
      opacityColorScheme,
      colorSchemeRaw,
      colorScheme,
      isDisabled,
      altColor,
      variant,
    ]
  );

  const { otherComponents, strings } = useMemo(
    () =>
      extractStrings({
        children,
        multiLanguageSupport,
      }),
    [children, multiLanguageSupport]
  );

  const arialLabel: string = rest["aria-label"]
    ? rest["aria-label"]
    : typeof children === "string"
    ? children
    : `Aria Link ${href}`;

  return (
    <>
      <Suspense>
        <Component
          fontSizeRaw={fontSizeRaw || fontSize || "3vh"}
          textRendering="optimizeLegibility"
          aria-labelledby={arialLabel}
          display={display || "flex"}
          justifyContent="center"
          aria-label={arialLabel}
          elementName="NextLink"
          textDecoration="none"
          borderRadius="2.5vh"
          flexDirection="row"
          alignItems="center"
          ElementType={Link}
          width="fitContent"
          cursor="pointer"
          role="link"
          gap="0.5vw"
          // href={href}
          ref={ref}
          py="1vh"
          px="1vw"
          // onMouseEnter={() => startTransition(() => setHovered(true))}
          // onMouseLeave={() => startTransition(() => setHovered(false))}
          disabled={isLoading || isDisabled}
          {...structureStyle}
          {...rest}>
          {isLoading && loadingProps?.spinnerPosition === "left" && (
            <Suspense>
              <Spinner
                elementName="NextLinkSpinner"
                colorScheme={colorScheme}
                sizeRaw="2.5vh"
                {...loadingProps?.spinnerProps}
              />
            </Suspense>
          )}
          {iconProps?.iconPosition === "left" && (
            <Suspense>
              <Icon
                display={iconProps?.iconPosition === "left" ? "flex" : "none"}
                sizeRaw={(fontSizeRaw || fontSize || "4vh") as string}
                elementName="NextLinkIcon"
                icon={iconProps?.iconType}
                {...iconProps?.iconProps}
              />
            </Suspense>
          )}
          {strings.length > 0 && (
            <Suspense>
              <Span
                elementName="NextLinkText"
                whiteSpace="nowrap"
                fontSize="inherit"
                userSelect="none"
                {...textProps}>
                {strings}
              </Span>
            </Suspense>
          )}
          {otherComponents}
          {iconProps?.iconPosition === "right" && (
            <Suspense>
              <Icon
                display={iconProps?.iconPosition === "right" ? "flex" : "none"}
                sizeRaw={(fontSizeRaw || fontSize || "4vh") as string}
                elementName="NextLinkIcon"
                icon={iconProps?.iconType}
                {...iconProps?.iconProps}
              />
            </Suspense>
          )}
          {isLoading && loadingProps?.spinnerPosition === "right" && (
            <Suspense>
              <Spinner
                elementName="NextLinkSpinner"
                colorScheme={colorScheme}
                sizeRaw="2.5vh"
                {...loadingProps?.spinnerProps}
              />
            </Suspense>
          )}
        </Component>
      </Suspense>
      {hoverText && (
        <Suspense>
          <Flex
            fontSizeRaw={fontSizeRaw || fontSize || "3vh"}
            transition="opacity 0.3s ease-in-out"
            transform="translate(-50%, 75%)"
            elementName="NextLinkHoverText"
            opacity={isHovered ? "1" : "0"}
            background="gray900"
            borderRadius="1.5vh"
            position="absolute"
            left="50%"
            top="50%"
            py="1vh"
            px="1vw"
            {...hoverTextProps?.containerProps}>
            <Suspense>
              <Span
                elementName="NextLinkHoverText"
                color="gray100"
                userSelect="none"
                {...hoverTextProps?.textProps}>
                {hoverText}
              </Span>
            </Suspense>
          </Flex>
        </Suspense>
      )}
    </>
  );
});
export const NextLink = React.memo(Factory);
