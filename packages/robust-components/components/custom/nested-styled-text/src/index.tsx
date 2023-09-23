import { formatMultiStyleString } from "./format-multi-style-string";
import { useGlobalContext } from "@robust-ui/use-global-context";
import { useCleanValue } from "@robust-ui/use-clean-value";
import { CreateComponent } from "@robust-ui/constructor";
import React, { forwardRef, Ref, useMemo } from "react";
import { assambleChilden } from "./assemble-children";
import {
  ForwardRefExoticStyledText,
  StyledTextProps,
  StyledTextPropsNoGeneric,
} from "./types";

const StyledTextComponent: React.ForwardRefExoticComponent<ForwardRefExoticStyledText> =
  forwardRef<unknown, StyledTextProps>(function StyledTextComponent(
    { ...props },
    ref: Ref<unknown>,
  ): React.JSX.Element {
    const DefaultComponent = CreateComponent({
      ComponentType: "div",
    });
    const globalContextData = useGlobalContext({ key: "devData" });
    const cleanedProps = useCleanValue({ props });
    const {
      children,
      multiLanguageSupport,
      isActive = true,
      styleMarker = "|",
      fontWeights,
      fontWeightsRaw,
      textColors,
      textColorsRaw,
      useRandomColors = false,
      ...rest
    } = cleanedProps as StyledTextPropsNoGeneric;

    const localizedChildren =
      multiLanguageSupport?.[globalContextData.currentGlobalLanguage] ||
      children;

    const formattedChildren = useMemo(
      () =>
        formatMultiStyleString({
          fontWeightsRaw: fontWeights || fontWeightsRaw,
          textColorsRaw: textColors || textColorsRaw,
          children: localizedChildren,
          useRandomColors,
          styleMarker,
          isActive,
        }),
      [
        localizedChildren,
        useRandomColors,
        fontWeightsRaw,
        textColorsRaw,
        styleMarker,
        fontWeights,
        textColors,
        isActive,
      ],
    );

    const processedChildren = useMemo(() => {
      return assambleChilden({ children: formattedChildren });
    }, [formattedChildren]);

    return (
      <DefaultComponent
        elementName="StyledText"
        fontSize="1rem"
        whiteSpace="normal"
        fontStyle="normal"
        lineHeight="normal"
        textRendering="optimizeLegibility"
        ref={ref}
        {...rest}
      >
        {processedChildren}
      </DefaultComponent>
    );
  });

export const StyledText = React.memo(StyledTextComponent);
