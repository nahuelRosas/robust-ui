import React, { forwardRef, Ref } from "react";
import { useGlobalContext } from "@robust-ui/use-global-context";
import { useCleanValue } from "@robust-ui/use-clean-value";
import { colors } from "@robust-ui/theme";
import {
  addOpacity,
  calculateLuminance,
  generateColorScheme,
} from "@robust-ui/css-utils";
import { Flex } from "@robust-ui/flex";
import { StyledText } from "@robust-ui/nested-styled-text";
import { Icon } from "@robust-ui/icon";
import {
  ForwardRefExoticCodeText,
  CodeTextProps,
  CodeTextPropsNoGeneric,
} from "./types";

import { useToast } from "@robust-ui/use-toast";

const Factory: React.ForwardRefExoticComponent<ForwardRefExoticCodeText> =
  forwardRef<unknown, CodeTextProps>(function CodeTextComponent(
    { ...props },
    ref: Ref<unknown>,
  ): React.JSX.Element {
    const globalContextData = useGlobalContext({ key: "devData" });
    const cleanedProps = useCleanValue({ props });
    const toast = useToast();
    const {
      children,
      multiLanguageSupport,
      textProps,
      styleMarker = "##",
      fontWeights = ["600"],
      fontWeightsRaw,
      variant = "solid",
      colorScheme = "mulberry",
      textColors,
      textColorsRaw,
      ...rest
    } = cleanedProps as CodeTextPropsNoGeneric;

    const localizedChildren =
      multiLanguageSupport?.[globalContextData.currentGlobalLanguage] ||
      children;
    const colorRaw = colors[colorScheme];
    const opacityColor = addOpacity({
      color: colorRaw,
      opacity: 0.4,
    });
    const luminance = calculateLuminance({ color: colorRaw });
    const textColor = luminance < 128 ? colors["white"] : colors["black"];
    return (
      <Flex
        alignItems="center"
        justifyContent="spaceBetween"
        position="relative"
        bgRaw={opacityColor}
        optimizedWidth
        height="fitContent"
        borderRadius="2.5vh"
        px="2vw"
        py="1vh"
        cursor="pointer"
        gap="2vw"
        ref={ref}
        {...rest}
      >
        <StyledText
          fontWeights={fontWeights}
          textColors={textColors}
          fontWeightsRaw={fontWeightsRaw}
          textColorsRaw={textColorsRaw || [textColor]}
          styleMarker={styleMarker}
          userSelect="Text"
          textAlign="left"
          optimizedWidth
          cursor="text"
          py="1vh"
          px="2vw"
          fontSize="2.5vh"
          overflow="auto"
          {...textProps}
        >
          {typeof localizedChildren === "string" ? localizedChildren : ""}
        </StyledText>
        <Icon
          icon={"copy"}
          sizeRaw="5vh"
          cursor="pointer"
          borderRadius="1vh"
          onClick={() => {
            navigator.clipboard.writeText(
              localizedChildren && typeof localizedChildren === "string"
                ? localizedChildren
                : "",
            );
            toast({
              duration: 2000,
              headline:
                globalContextData.currentGlobalLanguage === "es"
                  ? "Copiado al portapapeles"
                  : "Copied to clipboard",
              description:
                globalContextData.currentGlobalLanguage === "es"
                  ? "El texto se ha copiado al portapapeles"
                  : "The text has been copied to the clipboard",
              status: "success",
            });
          }}
          {...generateColorScheme({ color: colorScheme, variant })}
        />
      </Flex>
    );
  });

export const CodeText = React.memo(Factory);
