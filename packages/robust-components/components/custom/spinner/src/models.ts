import { defaultTheme, sizes, colors as colorsTheme } from "@robust-ui/theme";
import { SpinnerModelProps } from "./types";

export function models({ colors, model }: SpinnerModelProps) {
  const basics: {
    [key: string]: {
      [key: string]: unknown;
    };
  } = {
    A: {
      border: "5px solid",
      borderBottomColor: colors.secondary,
      borderRadiusRaw: "50%",
      display: "inlineBlock",
      boxSizing: "borderBox",
      animation: "ModelAA 1s linear infinite",
      keyframes: {
        ModelAA: {
          "0%": { transform: "rotate(0deg)" },
          "100%": { transform: "rotate(360deg)" },
        },
      },
    },
    B: {
      borderRadiusRaw: "50%",
      position: "relative",
      animation: "ModelBA 1s linear infinite",
      before: {
        content: '""',
        boxSizing: "borderBox",
        position: "absolute",
        inset: "0px",
        borderRadiusRaw: "50%",
        border: "5px solid",
        animation: "ModelBB 2s linear infinite",
      },
      after: {
        content: '""',
        boxSizing: "borderBox",
        position: "absolute",
        borderRadiusRaw: "50%",
        border: "5px solid",
        animation: "ModelBB 2s linear infinite",
        inset: "8px",
        transform: "rotate3d(90, 90, 0, 180deg)",
        borderColor: colors.secondary,
      },
      keyframes: {
        ModelBA: {
          "0%": { transform: "rotate(0deg)" },
          "100% ": { transform: "rotate(360deg)" },
        },
        ModelBB: {
          "0%": { clipPath: "polygon(50% 50%, 0 0, 0 0, 0 0, 0 0, 0 0)" },
          "50%": {
            clipPath: "polygon(50% 50%, 0 0, 100% 0, 100% 0, 100% 0, 100% 0)",
          },
          "75%": {
            clipPath:
              "polygon(50% 50%, 0 0, 100% 0, 100% 100%, 100% 100%, 100% 100%)",
          },
          "100%": {
            clipPath:
              "polygon(50% 50%, 0 0, 100% 0, 100% 100%, 100% 100%, 100% 100%)",
          },
        },
      },
    },
    C: {
      borderRadiusRaw: "50%",
      display: "inlineBlock",
      position: "relative",
      border: "3px solid",
      borderColorRaw: `${
        colorsTheme[colors.secondary as keyof typeof colorsTheme]
      } ${colorsTheme[colors.primary as keyof typeof colorsTheme]} transparent`,
      boxSizing: "borderBox",
      animation: "rotation 1s linear infinite",
      after: {
        content: '""',
        boxSizing: "borderBox",
        position: "absolute",
        left: "0",
        top: "0",
        right: "0",
        bottom: "0",
        margin: "auto",
        border: "3px solid",
        borderColorRaw: `transparent ${
          colorsTheme[colors.primary as keyof typeof colorsTheme]
        } ${colorsTheme[colors.secondary as keyof typeof colorsTheme]}`,
        borderRadiusRaw: "50%",
        animation: "rotationBack 0.5s linear infinite",
        transformOrigin: "center center",
        inset: "-1rem",
      },
      keyframes: {
        rotation: {
          "0%": { transform: "rotate(0deg)" },
          "100%": { transform: "rotate(360deg)" },
        },
        rotationBack: {
          "0%": { transform: "rotate(0deg)" },
          "100%": { transform: "rotate(-360deg)" },
        },
      },
    },
  };

  return basics[model as keyof typeof basics];
}
