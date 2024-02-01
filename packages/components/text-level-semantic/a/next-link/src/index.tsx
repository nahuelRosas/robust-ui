import { forwardRef, startTransition, useMemo, useState, memo } from "react";
import { CreateComponent, ForwardRefExotic } from "@robust-ui/constructor";
import { NextLinkProps, NextLinkPropsNoGeneric } from "./types";
import { useExtractString } from "@robust-ui/use-extract-string";
import { useCleanValue } from "@robust-ui/use-clean-value";
import { generateColorScheme } from "@robust-ui/css-utils";
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
  ref,
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

  const { otherComponents, strings } = useExtractString({
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

  function handleClick(e: React.MouseEvent<LinkProps>) {
    if (isLoading) {
      e.preventDefault();
      e.stopPropagation();
    }

    if (cleanedProps.onClick) {
      cleanedProps.onClick(e);
    }

    if (cleanedProps.href) {
      const href = cleanedProps.href.toString();

      if (href.startsWith("http")) {
        e.preventDefault();
        window.open(href, "_blank");
      } else if (href === "#") {
        e.preventDefault();
        window.location.href = href;
        navigator.clipboard.writeText(strings.join(" "));
        return;
      }

      window.scrollTo(0, 0);
    }
  }

  return (
    <Component
      onMouseEnter={() => startTransition(() => setHovered(true))}
      onMouseLeave={() => startTransition(() => setHovered(false))}
      borderRadius={
        colorSchemeProperty?.variant === "link" || !colorSchemeProperty
          ? undefined
          : "2dvw"
      }
      keyframesRaw={{
        scaleUpLink: {
          "0%": {
            transform: "scale(1)",
          },
          "50%": {
            transform: "scale(1.025)",
          },
          full: {
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
          full: {
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
      textDecoration="none"
      position="relative"
      onClick={handleClick}
      alignItems="center"
      ElementType={Link}
      whiteSpace="nowrap"
      width="fitContent"
      fontSizeRaw="3dvh"
      cursor="pointer"
      display="flex"
      role="link"
      gap="1dvw"
      ref={ref}
      py="1dvh"
      px="1dvw"
      {...structureStyle}
      {...cleanedProps}
    >
      {isLoading && (
        <Spinner
          colorSchemeRaw={colorSchemeRaw || colorScheme}
          sizeRaw={cleanedProps.fontSizeRaw || cleanedProps.fontSize || "3dvh"}
          {...spinnerProps}
        />
      )}
      {(iconType || iconProps) && (
        <Icon
          sizeRaw={cleanedProps.fontSizeRaw || cleanedProps.fontSize || "4dvh"}
          iconType={iconType}
          {...iconProps}
        />
      )}
      {strings.length > 0 && (
        <Span
          whiteSpace="inherit"
          fontSize="inherit"
          userSelect="none"
          {...textProps}
        >
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
          pointerEvents="none"
          background="gray900"
          whiteSpace="inherit"
          borderRadius="2dvh"
          width="fitContent"
          position="fixed"
          py="1dvh"
          px="1dvw"
          {...hoverTextProps?.containerProps}
        >
          <Span
            whiteSpace="inherit"
            userSelect="none"
            color="gray100"
            {...hoverTextProps?.textProps}
          >
            {hoverText || arialLabel}
          </Span>
        </Flex>
      )}
    </Component>
  );
});

/**
 * A custom Next.js link component with additional features and styling options.
 *
 * @component
 * @example
 * ```tsx
 * import { NextLink } from "@robust-ui/next-link";
 *
 * const MyComponent = () => {
 *   return (
 *     <NextLink href="/about" variant="primary" iconType="arrow-right">
 *       About Us
 *     </NextLink>
 *   );
 * };
 * ```
 *
 * @remarks
 * This component extends the functionality of the Next.js `Link` component and provides additional props for customizing the link's appearance and behavior.
 *
 * @param props - The props for the `NextLink` component.
 * @returns The rendered `NextLink` component.
 */
export const NextLink = memo(Factory);
