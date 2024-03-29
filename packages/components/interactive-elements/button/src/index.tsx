import { forwardRef, startTransition, useMemo, useState, memo } from "react";
import { CreateComponent, ForwardRefExotic } from "@robust-ui/constructor";
import { useExtractString } from "@robust-ui/use-extract-string";
import { ButtonProps, ButtonPropsNoGeneric } from "./types";
import { useCleanValue } from "@robust-ui/use-clean-value";
import { generateColorScheme } from "@robust-ui/css-utils";
import { Spinner } from "@robust-ui/spinner";
import { Flex } from "@robust-ui/flex";
import { Icon } from "@robust-ui/icon";
import { Span } from "@robust-ui/span";
export * from "./types";

const Factory: React.ForwardRefExoticComponent<ForwardRefExotic<ButtonProps>> =
  forwardRef(function ButtonComponent(
    { children, textProps, iconProps, spinnerProps, ...props },
    ref,
  ): React.JSX.Element {
    const Component = CreateComponent<HTMLButtonElement>({
      componentType: "button",
    });

    const {
      multiLanguageSupport,
      colorSchemeProperty,
      hoverTextProps,
      colorSchemeRaw,
      colorScheme,
      isDisabled,
      direction,
      isLoading,
      hoverText,
      hoverHelp,
      iconType,
      variant,
      ...cleanedProps
    } = useCleanValue({ props }) as ButtonPropsNoGeneric;

    const [hovered, setHover] = useState(false);

    const { otherComponents, strings } = useExtractString({
      multiLanguageSupport,
      children,
    });

    const structureStyle = useMemo(() => {
      return generateColorScheme({
        variant: variant || "linkLight",
        opacity: 0.8,
        isDisabled,
        baseColor: colorSchemeRaw || colorScheme || "teal",
        ...colorSchemeProperty,
      });
    }, [variant, isDisabled, colorSchemeRaw, colorScheme, colorSchemeProperty]);

    const arialLabel = cleanedProps["aria-label"]
      ? cleanedProps["aria-label"]
      : strings.length
        ? `Button with text: ${strings}`
        : iconType
          ? `Button with iconType: ${iconType}`
          : "Button without text or icon";

    return (
      <Component
        onMouseEnter={() => startTransition(() => setHover(true))}
        onMouseLeave={() => startTransition(() => setHover(false))}
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
        animationRaw={
          hovered
            ? "scaleUpLink 0.1s ease-in-out forwards"
            : "scaleDownLink 0.1s ease-in-out forwards"
        }
        pointerEvents={isDisabled ? "none" : "inherit"}
        flexDirectionRaw={direction || "row"}
        textRendering="optimizeLegibility"
        aria-labelledby={arialLabel}
        borderColor="transparent"
        justifyContent="center"
        aria-label={arialLabel}
        borderRadiusRaw="2.5dvw"
        textDecoration="none"
        position="relative"
        alignItems="center"
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
        {...cleanedProps}
      >
        {(iconType || iconProps) && (
          <Icon
            sizeRaw={
              cleanedProps.fontSizeRaw || cleanedProps.fontSize || "4dvh"
            }
            iconType={iconType}
            {...iconProps}
          />
        )}
        {strings.length > 0 && (
          <Span
            whiteSpace="nowrap"
            fontSize="inherit"
            userSelect="none"
            {...textProps}
          >
            {strings}
          </Span>
        )}
        {isLoading && (
          <Spinner
            colorSchemeRaw={colorSchemeRaw || colorScheme}
            sizeRaw={
              cleanedProps.fontSizeRaw || cleanedProps.fontSize || "3dvh"
            }
            {...spinnerProps}
          />
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
            borderRadius="1.5dvh"
            width="fitContent"
            position="fixed"
            py="1dvh"
            px="1dvw"
            {...hoverTextProps?.containerProps}
          >
            <Span
              whiteSpace="nowrap"
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
 * Button component.
 *
 * @component
 * @example
 * ```tsx
 * import { Button } from "./Button";
 *
 * const App = () => {
 *   return <Button onClick={() => console.log("Button clicked!")}>Click me</Button>;
 * };
 * ```
 */
export const Button = memo(Factory);
