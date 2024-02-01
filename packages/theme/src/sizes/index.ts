import { TSizeViewport } from "./types";

/**
 * Represents a collection of sizes used for viewport calculations.
 */
export const sizes = {
  ...Object.fromEntries(
    (Array(300) as TSizeViewport[]).map((_, i) => [
      `${i + 1}dvw`,
      `${i + 1}dvw`,
    ]),
  ),
  ...Object.fromEntries(
    (Array(300) as TSizeViewport[]).map((_, i) => [
      `${i + 1}dvh`,
      `${i + 1}dvh`,
    ]),
  ),
  fullDVW: "100dvw",
  fullDVH: "100dvh",
  full: "100%",
  auto: "auto",
  xlDVH: "90dvh",
  xlDVW: "90dvw",
  xl: "3dvh",
  lgDVH: "75dvh",
  lgDVW: "75dvw",
  lg: "2dvh",
  mdDVH: "50dvh",
  mdDVW: "50dvw",
  md: "1.5dvh",
  smDVH: "30dvh",
  smDVW: "30dvw",
  sm: "1dvh",
  xsDVH: "15dvh",
  xsDVW: "15dvw",
  xs: "0.5dvh",
} as Record<TSizeViewport, TSizeViewport> & {
  auto: string;
  fullDVW: string;
  fullDVH: string;
  full: string;
  xlDVH: string;
  xlDVW: string;
  xl: string;
  lgDVH: string;
  lgDVW: string;
  lg: string;
  mdDVH: string;
  mdDVW: string;
  md: string;
  smDVH: string;
  smDVW: string;
  sm: string;
  xsDVH: string;
  xsDVW: string;
  xs: string;
};

/**
 * Represents the type of the `sizes` object.
 */
export type TSizes = typeof sizes;
