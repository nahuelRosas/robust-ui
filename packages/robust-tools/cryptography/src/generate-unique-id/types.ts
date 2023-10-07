import { IOptions } from "../types";

export type GenerateIdOptions = {
  object: Record<string, unknown> | string | unknown;
  prefix?: string;
  options?: IOptions;
};
