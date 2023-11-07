import { colors } from "@robust-ui/theme";

export function isValidHexColor({ color }: { color: string }): boolean {
  const hexColorRegex = /^#([A-Fa-f0-9]{6}|[A-Fa-f0-9]{3})$/;
  return hexColorRegex.test(color);
}

export function blendColors({
  color1,
  color2,
  weight,
}: {
  color1: string;
  color2: string;
  weight: number;
}): string {
  if (
    !isValidHexColor({ color: color1 }) ||
    !isValidHexColor({ color: color2 }) ||
    weight < 0 ||
    weight > 1
  ) {
    throw new Error("Invalid input");
  }

  const r1 = parseInt(color1.slice(1, 3), 16);
  const g1 = parseInt(color1.slice(3, 5), 16);
  const b1 = parseInt(color1.slice(5, 7), 16);

  const r2 = parseInt(color2.slice(1, 3), 16);
  const g2 = parseInt(color2.slice(3, 5), 16);
  const b2 = parseInt(color2.slice(5, 7), 16);

  const blendedR = Math.round(r1 * (1 - weight) + r2 * weight);
  const blendedG = Math.round(g1 * (1 - weight) + g2 * weight);
  const blendedB = Math.round(b1 * (1 - weight) + b2 * weight);

  return `#${blendedR.toString(16).padStart(2, "0")}${blendedG
    .toString(16)
    .padStart(2, "0")}${blendedB.toString(16).padStart(2, "0")}`;
}

export function getRandomHexColor(): string {
  const randomColor = `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, "0")}`;
  return randomColor;
}

export function rgbToHex({
  r,
  g,
  b,
}: {
  r: number;
  g: number;
  b: number;
}): string {
  if (r < 0 || r > 255 || g < 0 || g > 255 || b < 0 || b > 255) {
    throw new Error("Invalid RGB values");
  }
  return `#${r.toString(16).padStart(2, "0")}${g
    .toString(16)
    .padStart(2, "0")}${b.toString(16).padStart(2, "0")}`;
}

export function calculateLuminance({ color }: { color: string }) {
  const r = parseInt(color.slice(1, 3), 16);
  const g = parseInt(color.slice(3, 5), 16);
  const b = parseInt(color.slice(5, 7), 16);
  return 0.299 * r + 0.587 * g + 0.114 * b;
}

export function addOpacity({
  color,
  opacity,
}: {
  color: string;
  opacity: number;
}) {
  const colorRaw = colors[color as keyof typeof colors]
    ? colors[color as keyof typeof colors]
    : color;
  const r = parseInt(colorRaw.slice(1, 3), 16);
  const g = parseInt(colorRaw.slice(3, 5), 16);
  const b = parseInt(colorRaw.slice(5, 7), 16);
  return `rgba(${r}, ${g}, ${b}, ${opacity})`;
}

export const getTextColor = (color: string, altColor: boolean) =>
  altColor
    ? calculateLuminance({ color }) > 128
      ? colors["black"]
      : colors["white"]
    : calculateLuminance({ color }) < 128
    ? colors["white"]
    : colors["black"];
type Variant = "solid" | "outline" | "ghost" | "link";
export function generateColorScheme({
  baseColor = "mulberry",
  variant = "solid",
  opacity = 0.4,
  isDisabled = false,
  isInvalid = false,
  isValid = false,
  onlyBorder = false,
  altColor = false,
}: {
  baseColor?: keyof typeof colors | string;
  variant: Variant;
  opacity?: number;
  isDisabled?: boolean;
  isInvalid?: boolean;
  isValid?: boolean;
  onlyBorder?: boolean;
  altColor?: boolean;
}) {
  const baseColorRaw = isDisabled
    ? colors["gray"]
    : isInvalid
    ? colors["red"]
    : isValid
    ? colors["green"]
    : colors[baseColor as keyof typeof colors]
    ? colors[baseColor as keyof typeof colors]
    : baseColor;

  const borderColor = isDisabled
    ? "transparent"
    : isInvalid
    ? colors["red"]
    : isValid
    ? colors["green"]
    : "transparent";

  if (isInvalid && isValid && !isDisabled) {
    throw new Error(
      "Input can't be invalid and valid at the same time. Please check your code."
    );
  }

  const mainColorWithOpacity = addOpacity({ color: baseColorRaw, opacity });

  let borderColorWithOpacity: string;
  let textColor: string;

  if (onlyBorder) {
    borderColorWithOpacity =
      borderColor === "transparent"
        ? borderColor
        : addOpacity({ color: borderColor, opacity });
    textColor = getTextColor(
      borderColorWithOpacity === "transparent"
        ? baseColorRaw
        : borderColorWithOpacity,
      altColor
    );
  } else {
    borderColorWithOpacity = "transparent";
    textColor = getTextColor(mainColorWithOpacity, altColor);
  }

  const hoverColor = addOpacity({
    color: baseColorRaw,
    opacity: opacity * 1.5,
  });

  const variantStyles = {
    solid: {
      background: mainColorWithOpacity,
      color: textColor,
      border: onlyBorder
        ? `0.2vh solid ${borderColorWithOpacity}`
        : "transparent",
      hover: {
        outline: "none",

        background: hoverColor,
        border: onlyBorder
          ? `0.2vh solid ${borderColorWithOpacity}`
          : "transparent",
        color: textColor,
      },
      focus: {
        outline: "none",

        background: hoverColor,
        border: onlyBorder
          ? `0.2vh solid ${borderColorWithOpacity}`
          : "transparent",
        color: textColor,
      },
      active: {
        outline: "none",

        background: hoverColor,
        border: onlyBorder
          ? `0.2vh solid ${borderColorWithOpacity}`
          : "transparent",
        color: textColor,
      },
    },
    outline: {
      background: "transparent",
      color: baseColorRaw,
      border: `0.5vh solid ${baseColorRaw}`,
      hover: {
        outline: "none",
        background: hoverColor,
        border: onlyBorder
          ? `0.2vh solid ${borderColorWithOpacity}`
          : "transparent",
        color: textColor,
      },
      focus: {
        outline: "none",
        background: hoverColor,
        border: onlyBorder
          ? `0.2vh solid ${borderColorWithOpacity}`
          : "transparent",
        color: textColor,
      },
      active: {
        outline: "none",
        background: hoverColor,
        border: onlyBorder
          ? `0.2vh solid ${borderColorWithOpacity}`
          : "transparent",
        color: textColor,
      },
    },
    ghost: {
      background: "transparent",
      color: baseColorRaw,
      border: onlyBorder
        ? `0.2vh solid ${borderColorWithOpacity}`
        : "transparent",
      hover: {
        outline: "none",

        background: hoverColor,
        border: onlyBorder
          ? `0.2vh solid ${borderColorWithOpacity}`
          : "transparent",
        color: getTextColor(mainColorWithOpacity, altColor),
      },
      focus: {
        outline: "none",

        background: hoverColor,
        border: onlyBorder
          ? `0.2vh solid ${borderColorWithOpacity}`
          : "transparent",
        color: getTextColor(mainColorWithOpacity, altColor),
      },
      active: {
        outline: "none",

        background: hoverColor,
        border: onlyBorder
          ? `0.2vh solid ${borderColorWithOpacity}`
          : "transparent",
        color: getTextColor(mainColorWithOpacity, altColor),
      },
    },
    link: {
      background: "transparent",
      color: altColor
        ? getTextColor(mainColorWithOpacity, altColor)
        : baseColorRaw,
      border: "none",
      borderRadius: "0",
      hover: {
        outline: "none",
        background: "transparent",
        borderBottom: `0.2vh solid ${baseColorRaw}`,
        color: getTextColor(mainColorWithOpacity, altColor),
      },
      focus: {
        outline: "none",
        background: "transparent",
        borderBottom: `0.2vh solid ${baseColorRaw}`,
        color: getTextColor(mainColorWithOpacity, altColor),
      },
      active: {
        outline: "none",
        background: "transparent",
        borderBottom: `0.2vh solid ${baseColorRaw}`,
        color: getTextColor(mainColorWithOpacity, altColor),
      },
    },
  };

  if (!variantStyles[variant]) {
    throw new Error(`Invalid variant: ${variant}`);
  }

  return variantStyles[variant];
}
