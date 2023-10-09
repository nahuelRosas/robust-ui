import React, { Ref, forwardRef } from "react";
import { ForwardRefExoticToast, ToastProps, ToastPropsClean } from "./types";
import { useGlobalContext } from "@robust-ui/use-global-context";
import { useCleanValue } from "@robust-ui/use-clean-value";
import { Icon, Ticon } from "@robust-ui/icon";
import { colors } from "@robust-ui/theme";
import {
  addOpacity,
  calculateLuminance,
  generateColorScheme,
} from "@robust-ui/css-utils";
import { Flex } from "@robust-ui/flex";
import { StyledText } from "@robust-ui/nested-styled-text";
export * from "./types";
const Factory: React.ForwardRefExoticComponent<ForwardRefExoticToast> =
  forwardRef<unknown, ToastProps>(function ToastComponent(
    { ...props }: ToastProps,
    ref: Ref<unknown>,
  ): React.JSX.Element {
    const globalContextData = useGlobalContext({ key: "devData" });
    const cleanedProps = useCleanValue({ props });
    const {
      styleMarker = "|",
      fontWeights = ["300"],
      fontWeightsRaw,
      variant = "ghost",
      colorScheme,
      status = "warning",
      textProps,
      textColors,
      textColorsRaw,
      icon,
      headline = "title default",
      description = "info default",
      isClosable = true,
      position = "bottom",
      size,
      multiLanguageSupport,
      children,
      onClose,
      ...rest
    } = cleanedProps as ToastPropsClean;

    const localizedChildren =
      description ||
      multiLanguageSupport?.[globalContextData.currentGlobalLanguage] ||
      children;

    const statusMap: {
      success: {
        color: string;
        icon: Ticon;
      };
      error: {
        color: string;
        icon: Ticon;
      };
      warning: {
        color: string;
        icon: Ticon;
      };
      info: {
        color: string;
        icon: Ticon;
      };
    } = {
      success: {
        color: colors["green600"],
        icon: "checkFill",
      },
      error: {
        color: colors["red600"],
        icon: "errorWarningFill",
      },
      warning: {
        color: colors["yellow600"],
        icon: "errorWarningFill",
      },
      info: {
        color: colors["blue600"],
        icon: "infoCircleFilled",
      },
    };

    const colorRaw =
      colorScheme && colors[colorScheme]
        ? colors[colorScheme]
        : statusMap[status].color;

    const opacityColor = addOpacity({
      color: colorRaw,
      opacity: 0.8,
    });
    const textColor = colorScheme
      ? calculateLuminance({ color: colorRaw }) < 128
        ? colors["white"]
        : colors["black"]
      : colors["white"];

    const Placement = {
      topRight: {
        top: "0",
        right: "0",
      },
      top: {
        top: "0",
        left: "50%",
        transform: "translateX(-50%)",
      },
      topLeft: {
        top: "0",
        left: "0",
      },
      bottomRight: {
        bottom: "0",
        right: "0",
      },
      bottom: {
        bottom: "0",
        left: "50%",
        transform: "translateX(-50%)",
      },
      bottomLeft: {
        bottom: "0",
        left: "0",
      },
    };

    const variantMap = {
      solid: {
        bg: colorRaw,
        color: textColor,
      },
      subtle: {
        bg: "transparent",
        color: colorRaw,
      },
      "left-accent": {
        bg: colorRaw,
        color: textColor,
      },
      "top-accent": {
        bg: colorRaw,
        color: textColor,
      },
    };

    return (
      <Flex
        flexDirection="row"
        alignItems="center"
        justifyContent="spaceBetween"
        position="relative"
        bgRaw={opacityColor}
        width="fitContent"
        height="fitContent"
        borderRadius="2vh"
        p="2vh"
        cursor="pointer"
        zIndex="9999"
        ref={ref}
      >
        <Icon
          icon={statusMap[status].icon}
          size="3vh"
          cursor="pointer"
          borderRadius="2vh"
          onClick={onClose}
          {...generateColorScheme({
            colorRaw,
            variant: "ghost",
          })}
          bg="transparent"
          color={textColor}
          hover="none"
        />
        <Flex
          flexDirection="column"
          alignItems="center"
          justifyContent="spaceBetween"
          position="relative"
          width="fitContent"
          height="fitContent"
          borderRadius="2vh"
          pr="8vw"
          pl="2vh"
          cursor="pointer"
          zIndex="9999"
        >
          <StyledText
            fontWeights={["900"]}
            fontSize={"3.5vh"}
            textColors={textColors}
            textColorsRaw={textColorsRaw || [textColor]}
            styleMarker={styleMarker}
            userSelect="Text"
            textAlign="left"
            optimizedWidth
            cursor="pointer"
            {...textProps}
          >
            {headline}
          </StyledText>
          <StyledText
            fontWeights={fontWeights}
            textColors={textColors}
            fontWeightsRaw={fontWeightsRaw}
            textColorsRaw={textColorsRaw || [textColor]}
            styleMarker={styleMarker}
            userSelect="Text"
            textAlign="left"
            optimizedWidth
            cursor="pointer"
            fontSize="2.5vh"
            {...textProps}
          >
            {typeof localizedChildren === "string" ? localizedChildren : ""}
          </StyledText>
        </Flex>
        {isClosable && (
          <Icon
            icon={"closeFill"}
            size="3vh"
            cursor="pointer"
            borderRadius="2vh"
            onClick={onClose}
            {...generateColorScheme({
              colorRaw,
              variant: "ghost",
            })}
            color={textColor}
          />
        )}
      </Flex>
    );
  });

export const Toast = React.memo(Factory);
