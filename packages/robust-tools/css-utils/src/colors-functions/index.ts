import { colors } from "@robust-ui/theme";

interface RGBColor {
  r: number;
  g: number;
  b: number;
}

interface HSLColor {
  h: number;
  s: number;
  l: number;
}

function componentToHex(c: number): string {
  const hex = c.toString(16);
  return hex.length === 1 ? "0" + hex : hex;
}

function rgbaToHex(rgb: RGBColor, a?: number): string {
  const alphaHex = a !== undefined ? componentToHex(Math.round(a * 255)) : "";
  return `#${componentToHex(rgb.r)}${componentToHex(rgb.g)}${componentToHex(
    rgb.b,
  )}${alphaHex}`;
}

function hslToHex(hsl: HSLColor): string {
  const { h, s, l } = hsl;
  const c = (1 - Math.abs(2 * l - 1)) * s;
  const x = c * (1 - Math.abs(((h / 60) % 2) - 1));
  const m = l - c / 2;

  let r = 0;
  let g = 0;
  let b = 0;

  if (h >= 0 && h < 60) {
    r = c;
    g = x;
  } else if (h >= 60 && h < 120) {
    r = x;
    g = c;
  } else if (h >= 120 && h < 180) {
    g = c;
    b = x;
  } else if (h >= 180 && h < 240) {
    g = x;
    b = c;
  } else if (h >= 240 && h < 300) {
    r = x;
    b = c;
  } else {
    r = c;
    b = x;
  }

  return `#${componentToHex(Math.round((r + m) * 255))}${componentToHex(
    Math.round((g + m) * 255),
  )}${componentToHex(Math.round((b + m) * 255))}`;
}

export function cssColorToHex(color: string) {
  if (color.startsWith("#")) {
    return color;
  } else if (color.startsWith("rgb")) {
    const match = color.match(
      /rgba?\((\d+),\s*(\d+),\s*(\d+)(?:,\s*([\d.]+))?\)/,
    );
    if (match) {
      const [, r, g, b, a] = match.map(Number);
      const color = { r: r || 0, g: g || 0, b: b || 0 };

      return rgbaToHex(
        { r: color.r, g: color.g, b: color.b },
        a !== undefined ? a : 1,
      );
    }
  } else if (color.startsWith("hsl")) {
    const match = color.match(
      /hsla?\((\d+),\s*(\d+)%,\s*(\d+)%(?:,\s*([\d.]+))?\)/,
    );
    if (match) {
      const [, h, s, l, a] = match.map(Number);

      const color = { h: h || 0, s: s || 0, l: l || 0 };

      return hslToHex({ h: color.h, s: color.s, l: color.l });
    }
  }
}

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

export function calculateLuminance({ rgbaColor }: { rgbaColor: string }) {
  const match = rgbaColor.match(
    /^rgba\((\d+),\s*(\d+),\s*(\d+),\s*([\d.]+)\)$/,
  );

  if (!match) {
    throw new Error("Invalid color format. Please provide a valid RGBA color.");
  }

  const red = parseInt(match[1] || "0", 10);
  const green = parseInt(match[2] || "0", 10);
  const blue = parseInt(match[3] || "0", 10);

  return 0.299 * red + 0.587 * green + 0.114 * blue;
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

export function generateContrastingColor(baseColor: string): string {
  const rgbaMatch = baseColor.match(
    /^rgba\((\d+),\s*(\d+),\s*(\d+),\s*([\d.]+)\)$/,
  );

  if (!rgbaMatch) {
    throw new Error("Invalid color format. Please provide a valid RGBA color.");
  }

  const baseRed = parseInt(rgbaMatch[1] || "0", 10);
  const baseGreen = parseInt(rgbaMatch[2] || "0", 10);
  const baseBlue = parseInt(rgbaMatch[3] || "0", 10);
  const baseAlpha = parseFloat(rgbaMatch[4] || "1");

  const baseGrayscaleValue =
    0.299 * baseRed + 0.587 * baseGreen + 0.114 * baseBlue;
  const contrastBrightness = baseGrayscaleValue > 128 ? 0 : 255;
  const contrastAlpha = baseAlpha * 2.5 > 1 ? 1 : baseAlpha * 2.5;

  const contrastColor = `rgba(${contrastBrightness}, ${contrastBrightness}, ${contrastBrightness}, ${contrastAlpha})`;

  return contrastColor;
}

type Variant =
  | "solid"
  | "solidLight"
  | "solidDark"
  | "outline"
  | "outlineLight"
  | "outlineDark"
  | "ghost"
  | "ghostLight"
  | "ghostDark"
  | "link"
  | "linkLight"
  | "linkDark";

export function generateColorScheme({
  complementaryColor = false,
  isActivated = true,
  isDisabled = false,
  baseColor = "teal",
  isInvalid = false,
  isValid = false,
  variant = "solid",
  opacity = 0.7,
  props,
}: {
  baseColor?: keyof typeof colors | string;
  complementaryColor?: boolean;
  isActivated?: boolean;
  isDisabled?: boolean;
  isInvalid?: boolean;
  isValid?: boolean;
  variant: Variant;
  opacity?: number;
  props?: {
    background?: boolean;
    border?: boolean;
    active?: boolean;
    hover?: boolean;
    focus?: boolean;
  };
}) {
  const propsRaw = {
    background: true,
    active: true,
    border: true,
    hover: true,
    focus: true,
    ...props,
  };

  const variantWithoutMode = variant.replace("Light", "").replace("Dark", "");

  if (!isActivated) return {};

  const baseColorRaw = isDisabled
    ? colors["gray"]
    : isInvalid
      ? colors["red"]
      : isValid
        ? colors["green"]
        : colors[baseColor as keyof typeof colors]
          ? colors[baseColor as keyof typeof colors]
          : baseColor;

  const colorHexa = cssColorToHex(baseColorRaw) || baseColorRaw;

  const mainColorLowOpacity = addOpacity({
    color: colorHexa,
    opacity: opacity * 0.1,
  });

  const mainColorWithMiddleOpacity = addOpacity({
    color: colorHexa,
    opacity: opacity * 1.2,
  });

  const mainColorWithHighOpacity = addOpacity({
    color: colorHexa,
    opacity: opacity * 1.4,
  });

  const mainColorWithOpacity = addOpacity({ color: colorHexa, opacity });

  const mainColorText =
    variantWithoutMode === "link"
      ? colorHexa
      : generateContrastingColor(mainColorWithOpacity);

  const textColor = isDisabled
    ? mainColorText
    : isInvalid
      ? mainColorText
      : isValid
        ? mainColorText
        : variant.includes("Light")
          ? colors["white"]
          : variant.includes("Dark")
            ? colors["black"]
            : mainColorText;

  if (isInvalid && isValid && !isDisabled) {
    throw new Error(
      "Input can't be invalid and valid at the same time. Please check your code.",
    );
  }

  const variantStyles = {
    link: {
      backgroundRaw: "transparent",
      colorRaw: textColor,
      borderRadiusRaw: "0.5vh",
      borderRaw: "0.5vh solid transparent",
      hoverRaw: propsRaw.hover
        ? {
            outlineRaw: "none",
            backgroundRaw: "transparent",
            colorRaw: textColor,
            borderBottom: `0.5vh solid ${mainColorWithHighOpacity}`,
          }
        : undefined,
      focusRaw: propsRaw.focus
        ? {
            outlineRaw: "none",
            backgroundRaw: "transparent",
            colorRaw: textColor,
            borderBottom: `0.5vh solid ${mainColorWithHighOpacity}`,
          }
        : undefined,
      activeRaw: propsRaw.active
        ? {
            outlineRaw: "none",
            backgroundRaw: "transparent",
            colorRaw: textColor,
            borderBottom: `0.5vh solid ${mainColorWithHighOpacity}`,
          }
        : undefined,
    },

    outline: {
      backgroundRaw: propsRaw.background ? mainColorLowOpacity : "transparent",
      colorRaw: mainColorWithOpacity,
      boxShadowRaw: "0 0.5vh 1vh rgba(0, 0, 0, 0.15)",
      borderRaw: propsRaw.border
        ? `0.5vh solid ${mainColorWithMiddleOpacity}`
        : "0.5vh solid transparent",
      hoverRaw: propsRaw.hover
        ? {
            outlineRaw: "none",
            backgroundRaw: propsRaw.background
              ? mainColorWithOpacity
              : "transparent",
            colorRaw: textColor,
            borderRaw: "0.5vh solid transparent",
          }
        : undefined,
      focusRaw: propsRaw.focus
        ? {
            outlineRaw: "none",
            backgroundRaw: propsRaw.background
              ? mainColorWithOpacity
              : "transparent",
            colorRaw: textColor,
            borderRaw: "0.5vh solid transparent",
          }
        : undefined,
      activeRaw: propsRaw.active
        ? {
            outlineRaw: "none",
            backgroundRaw: propsRaw.background
              ? mainColorWithOpacity
              : "transparent",
            colorRaw: textColor,
            borderRaw: "0.5vh solid transparent",
          }
        : undefined,
    },

    solid: {
      backgroundRaw: propsRaw.background ? mainColorWithOpacity : "transparent",
      colorRaw: textColor,
      boxShadowRaw: "0 0.5vh 1vh rgba(0, 0, 0, 0.15)",
      borderRaw: "0.5vh solid transparent",
      hoverRaw: propsRaw.hover
        ? {
            backgroundRaw: mainColorWithHighOpacity,
            outlineRaw: "none",
          }
        : undefined,
      focusRaw: propsRaw.focus
        ? {
            backgroundRaw: mainColorWithHighOpacity,
            outlineRaw: "none",
          }
        : undefined,
      activeRaw: propsRaw.active
        ? {
            backgroundRaw: mainColorWithHighOpacity,
            outlineRaw: "none",
          }
        : undefined,
    },

    ghost: {
      backgroundRaw: "transparent",
      colorRaw: textColor,
      boxShadowRaw: "none",
      borderRaw: "0.5vh solid transparent",
      hoverRaw: propsRaw.hover
        ? {
            backgroundRaw: mainColorWithOpacity,
            outlineRaw: "none",
          }
        : undefined,
      focusRaw: propsRaw.focus
        ? {
            backgroundRaw: mainColorWithOpacity,
            outlineRaw: "none",
          }
        : undefined,
      activeRaw: propsRaw.active
        ? {
            backgroundRaw: mainColorWithOpacity,
            outlineRaw: "none",
          }
        : undefined,
    },
  };

  if (!variantStyles[variantWithoutMode as keyof typeof variantStyles]) {
    throw new Error(`Invalid variant: ${variant}`);
  }

  if (complementaryColor) {
    return {
      ...variantStyles[variantWithoutMode as keyof typeof variantStyles],
      complementaryColor: calculateComplementaryColor(mainColorWithOpacity),
    };
  }
  return variantStyles[variantWithoutMode as keyof typeof variantStyles];
}

export function calculateComplementaryColor(rgbaColor: string): string {
  const match = rgbaColor.match(
    /^rgba\((\d+),\s*(\d+),\s*(\d+),\s*([\d.]+)\)$/,
  );
  if (!match) throw new Error("Invalid color");

  const red = parseInt(match[1] || "0", 10);
  const green = parseInt(match[2] || "0", 10);
  const blue = parseInt(match[3] || "0", 10);
  const alpha = parseFloat(match[4] || "1");

  const complementaryRed = 255 - red;
  const complementaryGreen = 255 - green;
  const complementaryBlue = 255 - blue;

  const complementaryColor = `rgba(${complementaryRed}, ${complementaryGreen}, ${complementaryBlue}, ${alpha})`;
  return complementaryColor;
}
