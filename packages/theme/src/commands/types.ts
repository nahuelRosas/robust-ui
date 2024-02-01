/**
 * Represents the arguments for a linear color gradient.
 */
export type LinearColorArguments = { colors: string[]; deg: string };
/**
 * Represents the arguments for a shadow.
 */
export type ShadowArguments = {
  color: string;
  x: string;
  y: string;
  blur: string;
};
/**
 * Represents the arguments for defining a border.
 */
export type BorderArguments = {
  width: string | number;
  style: string;
  color: string;
};
/**
 * Represents the possible types for the Arguments parameter.
 */
export type Arguments =
  | string
  | number
  | string[]
  | number[]
  | boolean
  | null
  | undefined
  | Record<string, unknown>
  | Record<string, unknown>[]
  | unknown;
