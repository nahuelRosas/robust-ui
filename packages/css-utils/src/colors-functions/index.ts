import { colors } from "@robust-ui/theme";

/**
 * Represents an RGB color.
 */
interface RGBColor {
  r: number;
  g: number;
  b: number;
}

/**
 * Represents a color in the HSL (Hue, Saturation, Lightness) color model.
 */
interface HSLColor {
  h: number;
  s: number;
  l: number;
}

/**
 * Represents the variant options for colors.
 */
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

/**
 * Converts a number to its corresponding hexadecimal representation.
 * @param c - The number to convert.
 * @returns The hexadecimal representation of the number.
 */
function componentToHex(c: number): string {
  const hex = c.toString(16);
  return hex.length === 1 ? "0" + hex : hex;
}

/**
 * Converts an RGBA color to its hexadecimal representation.
 * @param rgb - The RGB color values.
 * @param a - The alpha value (optional).
 * @returns The hexadecimal representation of the RGBA color.
 */
function rgbaToHex(rgb: RGBColor, a?: number): string {
  const alphaHex = a !== undefined ? componentToHex(Math.round(a * 255)) : "";
  return `#${componentToHex(rgb.r)}${componentToHex(rgb.g)}${componentToHex(
    rgb.b
  )}${alphaHex}`;
}

/**
 * Converts an HSL color to its corresponding hexadecimal representation.
 * @param hsl - The HSL color to convert.
 * @returns The hexadecimal representation of the HSL color.
 */
function hslToHex(hsl: HSLColor): string {
  const { h, s, l } = hsl;
  const c = (1 - Math.abs(2 * l - 1)) * s;
  const x = c * (1 - Math.abs(((h / 60) % 2) - 1));
  const m = l - c / 2;

  let r = 0;
  let g = 0;
  let b = 0;

  switch (true) {
    case h >= 0 && h < 60:
      r = c;
      g = x;
      break;
    case h >= 60 && h < 120:
      r = x;
      g = c;
      break;
    case h >= 120 && h < 180:
      g = c;
      b = x;
      break;
    case h >= 180 && h < 240:
      g = x;
      b = c;
      break;
    case h >= 240 && h < 300:
      r = x;
      b = c;
      break;
    default:
      r = c;
      b = x;
      break;
  }

  return `#${componentToHex(Math.round((r + m) * 255))}${componentToHex(
    Math.round((g + m) * 255)
  )}${componentToHex(Math.round((b + m) * 255))}`;
}

/**
 * Converts a CSS color value to its hexadecimal representation.
 *
 * @param color - The CSS color value to convert.
 * @returns The hexadecimal representation of the color, or undefined if the color value is invalid.
 */
function cssColorToHex(color: string): string | undefined {
  if (color.startsWith("#")) {
    return color;
  } else if (color.startsWith("rgb")) {
    const match = color.match(
      /rgba?\((\d+),\s*(\d+),\s*(\d+)(?:,\s*([\d.]+))?\)/
    );

    if (match) {
      const [, r, g, b, a] = match.map(Number);
      const rgbColor = { r: r || 0, g: g || 0, b: b || 0 };

      return rgbaToHex(
        { r: rgbColor.r, g: rgbColor.g, b: rgbColor.b },
        a !== undefined ? a : 1
      );
    }
  } else if (color.startsWith("hsl")) {
    const match = color.match(
      /hsla?\((\d+),\s*(\d+)%,\s*(\d+)%(?:,\s*([\d.]+))?\)/
    );

    if (match) {
      const [, h, s, l] = match.map(Number);
      const hslColor = { h: h || 0, s: s || 0, l: l || 0 };

      return hslToHex({ h: hslColor.h, s: hslColor.s, l: hslColor.l });
    }
  }

  return undefined;
}

/**
 * Checks if a given color is a valid hexadecimal color.
 * @param color - The color to be validated.
 * @returns True if the color is a valid hexadecimal color, false otherwise.
 */
function isValidHexColor({ color }: { color: string }): boolean {
  const hexColorRegex = /^#([A-Fa-f0-9]{6}|[A-Fa-f0-9]{3})$/;
  return hexColorRegex.test(color);
}

/**
 * Adds opacity to a given color.
 * @param {Object} options - The options for adding opacity.
 * @param {string} options.color - The color to add opacity to.
 * @param {number} options.opacity - The opacity value (between 0 and 1).
 * @returns {string} The color with added opacity in the RGBA format.
 * @throws {Error} If the color format is invalid.
 */
export function addOpacity({
  color,
  opacity,
}: {
  color: string;
  opacity: number;
}): string {
  const colorRaw = colors[color as keyof typeof colors] || color;

  if (!isValidHexColor({ color: colorRaw })) {
    throw new Error("Invalid color format");
  }

  const r = parseInt(colorRaw.slice(1, 3), 16);
  const g = parseInt(colorRaw.slice(3, 5), 16);
  const b = parseInt(colorRaw.slice(5, 7), 16);

  return `rgba(${r}, ${g}, ${b}, ${opacity})`;
}

/**
 * Generates a contrasting color based on the provided base color.
 * The base color should be in the RGBA format.
 * If the base color is not in the expected format, an error will be thrown.
 * The contrast color is calculated by determining the grayscale value of the base color,
 * and then setting the brightness to either 0 or 255 based on the grayscale value.
 * The contrast alpha is calculated by multiplying the base alpha by 2.5, with a maximum value of 1.
 * @param baseColor The base color in the RGBA format.
 * @returns The contrasting color in the RGBA format.
 * @throws Error if the base color is not in the expected format.
 */
export function generateContrastingColor(baseColor: string): string {
  // Regex for matching RGBA format
  const rgbaMatch = baseColor.match(
    /^rgba\((\d+),\s*(\d+),\s*(\d+),\s*([\d.]+)\)$/
  );

  // Check if the input color is in the expected format
  if (!rgbaMatch) {
    throw new Error("Invalid color format. Please provide a valid RGBA color.");
  }

  // Extract RGBA components from the match
  const baseRed = parseInt(rgbaMatch[1] || "0", 10);
  const baseGreen = parseInt(rgbaMatch[2] || "0", 10);
  const baseBlue = parseInt(rgbaMatch[3] || "0", 10);
  const baseAlpha = parseFloat(rgbaMatch[4] || "1");

  // Calculate grayscale value
  const baseGrayscaleValue =
    0.299 * baseRed + 0.587 * baseGreen + 0.114 * baseBlue;

  // Calculate contrast brightness (either 0 or 255)
  const contrastBrightness = baseGrayscaleValue > 128 ? 0 : 255;

  // Calculate contrast alpha (limited to 1)
  const contrastAlpha = Math.min(baseAlpha * 2.5, 1);

  // Generate and return the contrasting color
  const contrastColor = `rgba(${contrastBrightness}, ${contrastBrightness}, ${contrastBrightness}, ${contrastAlpha})`;

  return contrastColor;
}

/**
 * Calculates the complementary color of an RGBA color.
 *
 * @param rgbaColor - The RGBA color to calculate the complementary color for.
 * @returns The complementary color in RGBA format.
 * @throws Error if the provided color is not in valid RGBA format.
 */
function calculateComplementaryColor(rgbaColor: string): string {
  const match = rgbaColor.match(
    /^rgba\((\d+),\s*(\d+),\s*(\d+),\s*([\d.]+)\)$/
  );

  if (!match) {
    throw new Error("Invalid color format. Please provide a valid RGBA color.");
  }

  const red = parseInt(match[1] || "0", 10);
  const green = parseInt(match[2] || "0", 10);
  const blue = parseInt(match[3] || "0", 10);
  const alpha = parseFloat(match[4] || "1");

  // Calculate complementary colors
  const complementaryRed = 255 - red;
  const complementaryGreen = 255 - green;
  const complementaryBlue = 255 - blue;

  // Ensure alpha is within the valid range [0, 1]
  const validAlpha = Math.min(Math.max(alpha, 0), 1);

  // Generate and return the complementary color
  const complementaryColor = `rgba(${complementaryRed}, ${complementaryGreen}, ${complementaryBlue}, ${validAlpha})`;

  return complementaryColor;
}

/**
 * Generates a random hexadecimal color code.
 *
 * @returns A string representing a random hexadecimal color code.
 */
export function getRandomHexColor(): string {
  const randomColor = `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, "0")}`;
  return randomColor;
}

/**
 * Generates a color scheme based on the provided options.
 *
 * @param options - The options for generating the color scheme.
 * @returns The generated color scheme.
 */
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
  if (!isActivated) {
    return {};
  }
  const variantWithoutMode = variant.replace("Light", "").replace("Dark", "");

  const propsRaw = {
    active: variantWithoutMode.includes("link") ? true : false,
    hover: variantWithoutMode.includes("link") ? true : false,
    focus: variantWithoutMode.includes("link") ? true : false,
    background: true,
    border: true,
    ...props,
  };

  const baseColorRaw = isDisabled
    ? colors["gray"]
    : isInvalid
      ? colors["red"]
      : isValid
        ? colors["green"]
        : colors[baseColor as keyof typeof colors] || baseColor;

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
    : isInvalid || isValid
      ? variant.includes("Light")
        ? colors["white"]
        : variant.includes("Dark")
          ? colors["black"]
          : mainColorText
      : variant.includes("Light")
        ? colors["white"]
        : variant.includes("Dark")
          ? colors["black"]
          : mainColorText;

  if (isInvalid && isValid && !isDisabled) {
    throw new Error(
      "Input can't be invalid and valid at the same time. Please check your code."
    );
  }

  const variantStyles = {
    link: {
      backgroundRaw: "transparent",
      colorRaw: textColor,
      borderRadiusRaw: "0.5dvh",
      outlineRaw: "none",
      borderRaw: "0.5dvh solid transparent",
      hoverRaw: propsRaw.hover
        ? {
            outlineRaw: "none",
            backgroundRaw: "transparent",
            colorRaw: textColor,
            borderBottom: `0.5dvh solid ${mainColorWithHighOpacity}`,
          }
        : {
            outlineRaw: "none",
            backgroundRaw: "transparent",
            colorRaw: textColor,
            borderRaw: "0.5dvh solid transparent",
          },
      focusRaw: propsRaw.focus
        ? {
            outlineRaw: "none",
            backgroundRaw: "transparent",
            colorRaw: textColor,
            borderBottom: `0.5dvh solid ${mainColorWithHighOpacity}`,
          }
        : {
            outlineRaw: "none",
            backgroundRaw: "transparent",
            colorRaw: textColor,
            borderRaw: "0.5dvh solid transparent",
          },
      activeRaw: propsRaw.active
        ? {
            outlineRaw: "none",
            backgroundRaw: "transparent",
            colorRaw: textColor,
            borderBottom: `0.5dvh solid ${mainColorWithHighOpacity}`,
          }
        : {
            outlineRaw: "none",
            backgroundRaw: "transparent",
            colorRaw: textColor,
            borderRaw: "0.5dvh solid transparent",
          },
    },

    outline: {
      backgroundRaw: propsRaw.background ? mainColorLowOpacity : "transparent",
      colorRaw: mainColorWithOpacity,
      outlineRaw: "none",
      boxShadowRaw: "0 0.5dvh 1dvh rgba(0, 0, 0, 0.15)",
      borderRaw: propsRaw.border
        ? `0.5dvh solid ${mainColorWithMiddleOpacity}`
        : "0.5dvh solid transparent",

      hoverRaw: propsRaw.hover
        ? {
            outlineRaw: "none",
            backgroundRaw: propsRaw.background
              ? mainColorWithOpacity
              : "transparent",
            colorRaw: textColor,
            borderRaw: "0.5dvh solid transparent",
          }
        : {
            outlineRaw: "none",
            backgroundRaw: propsRaw.background
              ? mainColorLowOpacity
              : "transparent",
            colorRaw: mainColorWithOpacity,
            borderRaw: propsRaw.border
              ? `0.5dvh solid ${mainColorWithMiddleOpacity}`
              : "0.5dvh solid transparent",
          },
      focusRaw: propsRaw.focus
        ? {
            outlineRaw: "none",
            backgroundRaw: propsRaw.background
              ? mainColorWithOpacity
              : "transparent",
            colorRaw: textColor,
            borderRaw: "0.5dvh solid transparent",
          }
        : {
            outlineRaw: "none",
            backgroundRaw: propsRaw.background
              ? mainColorLowOpacity
              : "transparent",
            colorRaw: mainColorWithOpacity,
            borderRaw: propsRaw.border
              ? `0.5dvh solid ${mainColorWithMiddleOpacity}`
              : "0.5dvh solid transparent",
          },
      activeRaw: propsRaw.active
        ? {
            outlineRaw: "none",
            backgroundRaw: propsRaw.background
              ? mainColorWithOpacity
              : "transparent",
            colorRaw: textColor,
            borderRaw: "0.5dvh solid transparent",
          }
        : {
            outlineRaw: "none",
            backgroundRaw: propsRaw.background
              ? mainColorLowOpacity
              : "transparent",
            colorRaw: mainColorWithOpacity,
            borderRaw: propsRaw.border
              ? `0.5dvh solid ${mainColorWithMiddleOpacity}`
              : "0.5dvh solid transparent",
          },
    },

    solid: {
      backgroundRaw: propsRaw.background ? mainColorWithOpacity : "transparent",
      colorRaw: textColor,
      outlineRaw: "none",
      boxShadowRaw: "0 0.5dvh 1dvh rgba(0, 0, 0, 0.15)",
      borderRaw: "0.5dvh solid transparent",
      hoverRaw: propsRaw.hover
        ? {
            backgroundRaw: mainColorWithHighOpacity,
            outlineRaw: "none",
          }
        : {
            backgroundRaw: propsRaw.background
              ? mainColorWithOpacity
              : "transparent",
            outlineRaw: "none",
          },
      focusRaw: propsRaw.focus
        ? {
            backgroundRaw: mainColorWithHighOpacity,
            outlineRaw: "none",
          }
        : {
            backgroundRaw: propsRaw.background
              ? mainColorWithOpacity
              : "transparent",
            outlineRaw: "none",
          },
      activeRaw: propsRaw.active
        ? {
            backgroundRaw: mainColorWithHighOpacity,
            outlineRaw: "none",
          }
        : {
            backgroundRaw: propsRaw.background
              ? mainColorWithOpacity
              : "transparent",
            outlineRaw: "none",
          },
    },

    ghost: {
      backgroundRaw: "transparent",
      colorRaw: textColor,
      outlineRaw: "none",
      boxShadowRaw: "none",
      borderRaw: "0.5dvh solid transparent",
      hoverRaw: propsRaw.hover
        ? {
            backgroundRaw: mainColorWithOpacity,
            outlineRaw: "none",
          }
        : {
            backgroundRaw: "transparent",
            outlineRaw: "none",
          },
      focusRaw: propsRaw.focus
        ? {
            backgroundRaw: mainColorWithOpacity,
            outlineRaw: "none",
          }
        : {
            backgroundRaw: "transparent",
            outlineRaw: "none",
          },
      activeRaw: propsRaw.active
        ? {
            backgroundRaw: mainColorWithOpacity,
            outlineRaw: "none",
          }
        : {
            backgroundRaw: "transparent",
            outlineRaw: "none",
          },
    },
  };

  if (!variantStyles[variantWithoutMode as keyof typeof variantStyles]) {
    throw new Error(`Invalid variant: ${variant}`);
  }

  const result =
    variantStyles[variantWithoutMode as keyof typeof variantStyles];

  if (complementaryColor) {
    return {
      ...variantStyles[variantWithoutMode as keyof typeof variantStyles],
      complementaryColor: calculateComplementaryColor(mainColorWithOpacity),
    };
  }

  return result;
}
