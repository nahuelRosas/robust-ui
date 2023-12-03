import { colors as colorsTheme } from "@robust-ui/nextjs-components";
import { SpinnerModelProps } from "./types";

export function models({ colors, model, colorsRaw }: SpinnerModelProps) {
  const primaryColor =
    colorsRaw?.primary &&
    colorsTheme[colorsRaw?.primary as keyof typeof colorsTheme]
      ? colorsTheme[colorsRaw?.primary as keyof typeof colorsTheme]
      : colorsRaw?.primary &&
          !colorsTheme[colorsRaw?.primary as keyof typeof colorsTheme]
        ? colorsRaw?.primary
        : colors && colorsTheme[colors.primary];

  const secondaryColor =
    colorsRaw?.secondary &&
    colorsTheme[colorsRaw?.secondary as keyof typeof colorsTheme]
      ? colorsTheme[colorsRaw?.secondary as keyof typeof colorsTheme]
      : colorsRaw?.secondary &&
          !colorsTheme[colorsRaw?.secondary as keyof typeof colorsTheme]
        ? colorsRaw?.secondary
        : colors && colorsTheme[colors.secondary];

  const basics: {
    [key: string]: {
      [key: string]: unknown;
    };
  } = {
    A: {
      border: `0.75vh solid ${primaryColor}`,
      borderBottomColor: secondaryColor,
      borderRadius: "50%",
      display: "inlineBlock",
      boxSizing: "borderBox",
      animation: "rotationModelA 1s linear infinite",
      keyframes: {
        rotationModelA: {
          "0%": {
            transform: "rotate(0deg)",
          },
          "100%": {
            transform: "rotate(360deg)",
          },
        },
      },
    },
  };

  return basics[model as keyof typeof basics];
}
