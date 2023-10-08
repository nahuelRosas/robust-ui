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
  const r = parseInt(color.slice(1, 3), 16);
  const g = parseInt(color.slice(3, 5), 16);
  const b = parseInt(color.slice(5, 7), 16);
  return `rgba(${r}, ${g}, ${b}, ${opacity})`;
}
type Variant = "solid" | "outline" | "ghost";

export function generateColorScheme({
  color = "mulberry",
  variant,
  colorRaw,
}: {
  color?: keyof typeof colors;
  colorRaw?: string;
  variant: Variant;
}) {
  const bgColor = colorRaw ? colorRaw : color && colors[color];
  const luminance = calculateLuminance({ color: bgColor });
  const textColor = luminance < 128 ? colors["white"] : colors["black"];
  const altTextColor = luminance < 128 ? colors["black"] : colors["white"];
  const borderColor = bgColor;
  const hoverColor = addOpacity({ color: bgColor, opacity: 0.8 });

  const variantStyles = {
    solid: {
      background: bgColor,
      color: textColor,
      hover: {
        background: hoverColor,
      },
    },
    outline: {
      background: "transparent",
      color: bgColor,
      border: `1px solid ${borderColor}`,
      hover: {
        background: hoverColor,
        color: altTextColor,
      },
    },
    ghost: {
      background: "transparent",
      color: bgColor,
      hover: {
        background: hoverColor,
        color: altTextColor,
      },
    },
  };

  if (!variantStyles[variant]) {
    throw new Error(`Invalid variant: ${variant}`);
  }

  return variantStyles[variant];
}
