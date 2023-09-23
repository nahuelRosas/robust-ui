import React from "react";
import { StyledTextPropsNoGeneric } from "@/types";

export function formatMultiStyleString({
  children,
  isActive,
  styleMarker,
  textColorsRaw,
  fontWeightsRaw,
  useRandomColors,
}: Partial<StyledTextPropsNoGeneric>) {
  const hasValidMultiStyles = isActive && styleMarker;
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
        const formattedText = line
          .split(styleMarker as string)
          .filter((text) => text.trim().length > 0)
          .map((text, index) => {
            const colorIndex =
              (textColorsRaw && index % textColorsRaw?.length) || 0;
            const fontWeightsIndex =
              (fontWeightsRaw && index % fontWeightsRaw?.length) || 0;
            const colorKey = textColorsRaw?.[colorIndex] || undefined;
            const colorRaw = useRandomColors ? "random" : undefined;
            const fontWeights = fontWeightsRaw?.[fontWeightsIndex] || 1;
            return { text, colorKey, colorRaw, fontWeights };
          })
          .flat();
        return formattedText;
      }),
    );
  });

  return formattedChildren;
}
