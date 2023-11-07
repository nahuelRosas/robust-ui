import React, { forwardRef, lazy, Ref, Suspense, useMemo } from "react";
import { formatMultiStyleString } from "./format-multi-style-string";
import { useCleanValue } from "@robust-ui/use-clean-value";
import { assambleChilden } from "./assemble-children";
import { extractStrings } from "@robust-ui/utils";
import { StyledTextProps, StyledTextPropsNoGeneric } from "./types";
import { ForwardRefExotic } from "@robust-ui/constructor";
export * from "./types";

const Block = lazy(() =>
  import("@robust-ui/block").then((module) => ({ default: module.Block }))
);

const StyledTextComponent: React.ForwardRefExoticComponent<
  ForwardRefExotic<StyledTextProps>
> = forwardRef(function StyledTextComponent(
  { ...props },
  ref
): React.JSX.Element {
  const cleanedProps = useCleanValue({ props });
  const {
    useRandomColors = false,
    multiLanguageSupport,
    styleMarker = "|",
    isActive = true,
    fontWeightsRaw,
    textColorsRaw,
    fontWeights,
    textColors,
    children,
    ...rest
  } = cleanedProps as StyledTextPropsNoGeneric;

  const { otherComponents, strings } = useMemo(
    () =>
      extractStrings({
        children,
        multiLanguageSupport,
      }),
    [children, multiLanguageSupport]
  );
  const formattedChildren = useMemo(
    () =>
      formatMultiStyleString({
        fontWeightsRaw: fontWeights || fontWeightsRaw,
        textColorsRaw: textColors || textColorsRaw,
        children: strings,
        useRandomColors,
        styleMarker,
        isActive,
      }),
    [
      useRandomColors,
      fontWeightsRaw,
      textColorsRaw,
      styleMarker,
      fontWeights,
      textColors,
      isActive,
      strings,
    ]
  );

  const processedChildren = useMemo(() => {
    return assambleChilden({ children: formattedChildren });
  }, [formattedChildren]);

  return (
    <Suspense>
      <Block
        textRendering="optimizeLegibility"
        elementName="StyledText"
        textOverflow="ellipsis"
        lineHeight="normal"
        whiteSpace="normal"
        fontStyle="normal"
        fontSize="2.5vh"
        userSelect
        ref={ref}
        {...rest}>
        {processedChildren}
        {otherComponents}
      </Block>
    </Suspense>
  );
});

export const StyledText = React.memo(StyledTextComponent);
