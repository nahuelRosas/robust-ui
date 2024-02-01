import { generateEntries } from "@/utils";
import { RangeStrings } from "./types";
export * from "./types";

/**
 * A record that maps range strings to range strings.
 */

export const Numbers = generateEntries({
  length: 101,
  prefix: "",
  integer: true,
}) as Record<RangeStrings, RangeStrings>;

/**
 * Represents the type of the Numbers object.
 */
export type TNumbers = typeof Numbers;
