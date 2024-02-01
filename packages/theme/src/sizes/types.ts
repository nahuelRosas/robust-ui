/**
 * Generates an array of numbers from 0 to the specified end value.
 *
 * @template End - The end value of the range.
 * @template Acc - The accumulated array of numbers.
 * @param {End} End - The end value of the range.
 * @param {Acc} Acc - The accumulated array of numbers.
 * @returns {Acc[number]} - The generated array of numbers.
 */
type EnumerateRange<
  End extends number,
  Acc extends number[] = [],
> = Acc["length"] extends End
  ? Acc[number]
  : EnumerateRange<End, [...Acc, Acc["length"]]>;

type IntegerRange<From extends number, To extends number> = Exclude<
  EnumerateRange<To>,
  EnumerateRange<From>
>;

type ViewportSize<T extends number> = `${T}dvw` | `${T}dvh`;

export type TSizeViewport = ViewportSize<IntegerRange<1, 300>>;
