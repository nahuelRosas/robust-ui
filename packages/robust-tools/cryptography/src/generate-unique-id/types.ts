import { IOptions } from "../types";

export type GenerateIdOptions = {
  object: Record<string, unknown> | string;
  prefix?: string;
  options?: IOptions;
};
