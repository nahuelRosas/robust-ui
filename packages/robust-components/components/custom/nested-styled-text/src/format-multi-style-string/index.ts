import { getRandomHexColor } from "@robust-ui/css-utils";
import { StyledTextPropsNoGeneric } from "@/types";
import React from "react";
export function formatMultiStyleString({
  fontWeightsRaw,
  randomColors,
  colorsRaw,
  splitter,
  children,
  isActive,
}: Partial<StyledTextPropsNoGeneric>) {
  const hasValidMultiStyles = isActive && splitter;
  let formattedChildren: unknown[] = [];
  let plainTextChildren: string[] = [];

  React.Children.forEach(children, (child) => {
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
      })
    );
  });

  return formattedChildren;
}
