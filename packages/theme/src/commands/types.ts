export type LinearColorArguments = { colors: string[]; deg: string };
export type ShadowArguments = {
  color: string;
  x: string;
  y: string;
  blur: string;
};
export type BorderArguments = {
  width: string | number;
  style: string;
  color: string;
};
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
