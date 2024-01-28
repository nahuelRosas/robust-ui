import { formatMultiStyleString } from "./format-multi-style-string";
import { StyledTextProps, StyledTextPropsNoGeneric } from "./types";
import { useExtractString } from "@robust-ui/use-extract-string";
import { useCleanValue } from "@robust-ui/use-clean-value";
import { generateColorScheme } from "@robust-ui/css-utils";
import { ForwardRefExotic } from "@robust-ui/constructor";
import { assambleChilden } from "./assemble-children";
import { forwardRef, useMemo, memo } from "react";
import { Block } from "@robust-ui/block";
export * from "./types";

const Factory: React.ForwardRefExoticComponent<
  ForwardRefExotic<StyledTextProps>
> = forwardRef(function StyledTextComponent(
  { children, ...props },
  ref,
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

  const { otherComponents, strings } = useExtractString({
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
    ],
  );

  const processedChildren = useMemo(() => {
    return assambleChilden({ children: formattedChildren });
  }, [formattedChildren]);

  return (
    <Block
      textRendering="optimizeLegibility"
      textOverflow="ellipsis"
      lineHeight="normal"
      whiteSpace="normal"
      fontStyle="normal"
      fontSize="2.5dvh"
      userSelect="none"
      ref={ref}
      {...structureStyle}
      {...cleanedProps}
    >
      {processedChildren}
      {otherComponents}
    </Block>
  );
});

/**
 * Renders a styled text component.
 *
 * @component
 * @example
 * ```tsx
 * import { StyledText } from "@robust-ui/styled-text";
 *
 * function App() {
 *   return (
 *     <StyledText colorScheme="blue" fontSize={16}>
 *       Hello, world!
 *     </StyledText>
 *   );
 * }
 * ```
 *
 * @param {StyledTextProps} props - The props for the styled text component.
 * @returns {JSX.Element} The rendered styled text component.
 */
export const StyledText = memo(Factory);
