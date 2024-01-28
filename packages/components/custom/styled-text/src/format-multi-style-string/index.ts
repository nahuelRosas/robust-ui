import { getRandomHexColor } from "@robust-ui/css-utils";
import { StyledTextPropsNoGeneric } from "@/types";
import { Children } from "react";

/**
 * Formats a multi-style string based on the provided props.
 *
 * @param fontWeightsRaw - An array of font weights.
 * @param randomColors - A boolean indicating whether to use random colors.
 * @param colorsRaw - An array of color keys.
 * @param splitter - The string used to split the text into multiple styles.
 * @param children - The children elements.
 * @param isActive - A boolean indicating whether the multi-style string is active.
 * @returns An array of formatted children elements.
 */
export function formatMultiStyleString({
  fontWeightsRaw,
  randomColors,
  colorsRaw,
  splitter,
  children,
  isActive,
}: Partial<StyledTextPropsNoGeneric>): unknown[] {
  const hasValidMultiStyles = isActive && splitter;
  let formattedChildren: unknown[] = [];
  let plainTextChildren: string[] = [];

  Children.forEach(children, (child) => {
    if (typeof child === "string") {
      plainTextChildren.push(child);
    } else {
      formattedChildren.push(child);
    }
  });

  if (!hasValidMultiStyles || !plainTextChildren.length) {
    return formattedChildren;
  }

  plainTextChildren.forEach((text) => {
    const textLines =
      text &&
      typeof text === "string" &&
      text
        .split(/\n/)
        .map((line) => line.trim())
        .filter((line) => line.length > 0);

    if (!textLines) {
      return formattedChildren.push(text);
    }

    formattedChildren.push(
      textLines.map((line) => {
        const textLines = line
          .split(splitter as string)
          .filter((text) => text.trim().length > 0)
          .map((text, index) => {
            const colorIndex = (colorsRaw && index % colorsRaw?.length) || 0;
            const fontWeightsIndex =
              (fontWeightsRaw && index % fontWeightsRaw?.length) || 0;
            const colorKey = colorsRaw?.[colorIndex] || undefined;
            const colorRaw = randomColors ? getRandomHexColor() : undefined;
            const fontWeights = fontWeightsRaw?.[fontWeightsIndex] || 1;
            return { text, colorKey, colorRaw, fontWeights };
          })
          .flat();
        return textLines;
      }),
    );
  });

  return formattedChildren;
}
