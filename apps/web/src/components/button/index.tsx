import {
  CreateComponent,
  ForwardRefExotic,
  useCleanValue,
} from "@robust-ui/nextjs-components";
import { ButtonProps, ButtonPropsNoGeneric } from "./types";
import React, { forwardRef, useMemo, useState, startTransition } from "react";
import { ExtractStrings } from "@robust-ui/utils";
import { Span } from "../span";
import { Flex } from "../flex";
import { Icon } from "../icon";
import { generateColorScheme } from "@robust-ui/css-utils";
import { Spinner } from "../spinner";
export * from "./types";
const Factory: React.ForwardRefExoticComponent<ForwardRefExotic<ButtonProps>> =
  forwardRef(function ButtonComponent(
    { children, textProps, iconProps, spinnerProps, ...props },
    ref
  ): React.JSX.Element {
    const Component = CreateComponent<HTMLButtonElement>({
      componentType: "button",
    });

    const {
      multiLanguageSupport,
      colorSchemeProperty,
      hoverTextProps,
      colorSchemeRaw,
      fontSizeRaw,
      colorScheme,
      isDisabled,
      direction,
      isLoading,
      hoverText,
      hoverHelp,
      fontSize,
      iconType,
      variant,
      ...cleanedProps
    } = useCleanValue({ props }) as ButtonPropsNoGeneric;

    const [hovered, setHover] = useState(false);

    const structureStyle = useMemo(() => {
      return generateColorScheme({
        variant: variant || "linkDark",
        opacity: 0.8,
        isDisabled,
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
        animationRaw={
          hovered
            ? "scaleUpLink 0.1s ease-in-out forwards"
            : "scaleDownLink 0.1s ease-in-out forwards"
        }
        pointerEventsRaw={isDisabled ? "none" : undefined}
        flexDirectionRaw={direction || "row"}
        textRendering="optimizeLegibility"
        aria-labelledby={arialLabel}
        borderColor="transparent"
        justifyContent="center"
        aria-label={arialLabel}
        borderRadiusRaw="2.5vw"
        textDecoration="none"
        elementName="Button"
        position="relative"
        alignItems="center"
        width="fitContent"
        fontSizeRaw={fontSizeRaw || fontSize || "3vh"}
        cursor="pointer"
        display="flex"
        role="link"
        gap="0.5vw"
        ref={ref}
        py="1vh"
        px="1vw"
        {...structureStyle}
        {...cleanedProps}>
        {(iconType || iconProps) && (
          <Icon
            sizeRaw={fontSizeRaw || fontSize || "4vh"}
            elementName="ButtonIcon"
            iconType={iconType}
            {...iconProps}
          />
        )}
        {strings.length > 0 && (
          <Span
            elementName="ButtonSpan"
            whiteSpace="nowrap"
            fontSize="inherit"
            userSelect="none"
            {...textProps}>
            {strings}
          </Span>
        )}
        {isLoading && (
          <Spinner
            colorSchemeRaw={colorSchemeRaw || colorScheme}
            sizeRaw={fontSizeRaw || fontSize || "3vh"}
            elementName="ButtonSpinner"
            {...spinnerProps}
          />
        )}
        {otherComponents}
        {hoverHelp && (
          <Flex
            fontSizeRaw={fontSizeRaw || fontSize || "3vh"}
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

export const Button = React.memo(Factory);
