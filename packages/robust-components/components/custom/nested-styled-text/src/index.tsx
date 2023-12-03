import { formatMultiStyleString } from "./format-multi-style-string";
import { StyledTextProps, StyledTextPropsNoGeneric } from "./types";
import { useCleanValue } from "@robust-ui/use-clean-value";
import { generateColorScheme } from "@robust-ui/css-utils";
import { ForwardRefExotic } from "@robust-ui/constructor";
import { assambleChilden } from "./assemble-children";
import React, { forwardRef, useMemo } from "react";
import { ExtractStrings } from "@robust-ui/utils";
import { Block } from "@robust-ui/block";
export * from "./types";

const Factory: React.ForwardRefExoticComponent<
  ForwardRefExotic<StyledTextProps>
> = forwardRef(function StyledTextComponent(
  { children, ...props },
  ref
): React.JSX.Element {
  const {
    multiLanguageSupport,
    colorSchemeProperty,
    colorSchemeRaw,
    fontWeightsRaw,
    randomColors,
    colorScheme,
    fontWeights,
    colorsRaw,
    splitter,
    isActive,
    colors,
    ...cleanedProps
  } = useCleanValue({
    props,
  }) as StyledTextPropsNoGeneric;

  const structureStyle = useMemo(() => {
    if (!colorSchemeProperty && !colorSchemeRaw && !colorScheme) return {};
    return generateColorScheme({
      variant: colorSchemeProperty?.variant || "link",
      props: {
        monochromeText: true,
      },
      opacity: 0.9,
      baseColor:
        colorSchemeProperty?.baseColor ||
        colorSchemeProperty?.baseColorRaw ||
        colorSchemeRaw ||
        colorScheme ||
        "indigo",
      ...colorSchemeProperty,
    });
  }, [colorSchemeRaw, colorScheme, colorSchemeProperty]);

  const { otherComponents, strings } = ExtractStrings({
    children,
    multiLanguageSupport,
  });

  const formattedChildren = useMemo(
    () =>
      formatMultiStyleString({
        fontWeightsRaw: fontWeightsRaw || fontWeights,
        colorsRaw: colorsRaw || colors,
        randomColors: randomColors || false,
        splitter: splitter || "|",
        isActive: isActive || true,
        children: strings,
      }),
    [
      colors,
      colorsRaw,
      fontWeights,
      fontWeightsRaw,
      isActive,
      randomColors,
      splitter,
      strings,
    ]
  );

  const processedChildren = useMemo(() => {
    return assambleChilden({ children: formattedChildren });
  }, [formattedChildren]);

  return (
    <Block
      textRendering="optimizeLegibility"
      elementName="StyledText"
      textOverflow="ellipsis"
      lineHeight="normal"
      whiteSpace="normal"
      fontStyle="normal"
      fontSize="2.5vh"
      userSelect="none"
      ref={ref}
      {...structureStyle}
      {...cleanedProps}>
      {processedChildren}
      {otherComponents}
    </Block>
  );
});

export const StyledText = React.memo(Factory);
