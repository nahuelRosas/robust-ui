import { TypeNumbersIntegerRange } from "./types";
export * from "./types";

/**
 * Represents a collection of numbers.
 */
export const Numbers: Record<TypeNumbersIntegerRange, TypeNumbersIntegerRange> =
  Object.fromEntries(
    (Array(300) as TypeNumbersIntegerRange[]).map((_, i) => [
      `${i + 1}`,
      `${i + 1}`,
    ])
  ) as unknown as Record<TypeNumbersIntegerRange, TypeNumbersIntegerRange>;

/**
 * Represents the type of the Numbers object.
 */
export type TNumbers = typeof Numbers;
