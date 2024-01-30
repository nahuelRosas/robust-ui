import { colors as colorsTheme } from "@robust-ui/theme";
import { SpinnerModelProps } from "./types";

/**
 * Generates the models for the spinner component.
 *
 * @param {SpinnerModelProps} props - The spinner model properties.
 * @returns {object | undefined} - The generated models for the spinner component.
 */
export function models({
  colors,
  model,
  colorsRaw,
}: SpinnerModelProps): { [key: string]: unknown } | undefined {
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
      border: `0.75dvh solid ${primaryColor}`,
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
          full: {
            transform: "rotate(360deg)",
          },
        },
      },
    },
  };

  return basics[model as keyof typeof basics];
}
