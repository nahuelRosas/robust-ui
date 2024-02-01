import { generateEntries } from "@/utils";
import { TSize, TSizeViewport, TPercentage } from "./types";

const dvwEntries = generateEntries({
  length: 700,
  prefix: "dvw",
}) as Record<TSizeViewport, TSizeViewport>;

const dvhEntries = generateEntries({
  length: 700,
  prefix: "dvh",
}) as Record<TSizeViewport, TSizeViewport>;

const percentageEntries = generateEntries({
  length: 101,
  prefix: "%",
}) as Record<TPercentage, TPercentage>;

/**
 * Represents a collection of sizes used in the theme.
 */
export const sizes = {
  ...percentageEntries,
  ...dvwEntries,
  ...dvhEntries,
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
} as TSize;

/**
 * Represents the type of the `sizes` object.
 */
export type TSizes = typeof sizes;
