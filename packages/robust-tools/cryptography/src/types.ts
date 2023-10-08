import { BinaryToTextEncoding } from "crypto";

export interface IOptions {
  hashAlgorithm: string;
  salt?: string;
  pepper?: string;
  iterations: number;
  digest: BinaryToTextEncoding;
}
