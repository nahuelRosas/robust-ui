/* eslint-disable @typescript-eslint/no-unused-vars */
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

/**
 * ExcludeEndingZero removes the ending ".0" from a string literal type.
 * @template T - The input string literal type.
 * @returns A new type without the ending ".0".
 */
type ExcludeEndingZero<T> = T extends `${infer _R}.0` ? never : T;

/**
 * Represents a decimal range viewport for sizing.
 * It is a union type that includes values from 0.1 to 300, excluding values with trailing zeros.
 */
type DecimalRangeViewPort = ExcludeEndingZero<
  EnumerateRange<300> | `${EnumerateRange<50>}.${EnumerateRange<9>}`
>;

/**
 * Represents a decimal range percentage.
 * It is a union type that includes numbers from 0 to 100, as well as decimal numbers from 0.0 to 99.9.
 */
type DecimalRangePercentage = ExcludeEndingZero<
  EnumerateRange<101> | `${EnumerateRange<100>}.${EnumerateRange<9>}`
>;

/**
 * Represents a type that combines a number or string with a "dvh" or "dvw" unit.
 * The "dvh" unit represents a percentage of the viewport height.
 * The "dvw" unit represents a percentage of the viewport width.
 * @template T The type of the number or string.
 */
type PropWithViewPort<T extends number | string> = `${T}dvh` | `${T}dvw`;

/**
 * Represents a type that combines a numeric or string value with a percentage symbol (%).
 * @template T - The type of the numeric or string value.
 */
type PropWithPercentage<T extends number | string> = `${T}%`;

/**
 * Represents a type for viewport sizes.
 * @template T - The type of the viewport.
 */
export type TSizeViewport = PropWithViewPort<DecimalRangeViewPort>;

/**
 * Represents a type for percentage values with decimal range.
 */
export type TPercentage = PropWithPercentage<DecimalRangePercentage>;

/**
 * Represents a size object that defines various sizes for different viewports and percentages.
 */
export type TSize = Record<TSizeViewport, TSizeViewport> &
  Record<TPercentage, TPercentage> & {
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
