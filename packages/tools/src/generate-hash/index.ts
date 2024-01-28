import crypto, { BinaryToTextEncoding } from "crypto";

export interface IOptions {
  hashAlgorithm: string;
  salt?: string;
  pepper?: string;
  iterations: number;
  digest: BinaryToTextEncoding;
}

/**
 * Generates a hash for the given input string using the specified options.
 *
 * @param inputString - The string to be hashed.
 * @param options - The options for generating the hash (optional).
 * @returns The generated hash as a string.
 * @throws Error if an invalid hash algorithm or digest format is provided.
 */
export function generateHash({
  inputString,
  options = {
    hashAlgorithm: "sha512",
    salt: "",
    pepper: "",
    iterations: 1,
    digest: "hex",
  },
}: {
  inputString: string;
  options?: IOptions;
}): string {
  const { hashAlgorithm, salt, pepper, iterations, digest } = options;

  if (!crypto.getHashes().includes(hashAlgorithm)) {
    throw new Error(
      `Invalid hash algorithm: ${hashAlgorithm}. Valid algorithms are: ${crypto
        .getHashes()
        .join(", ")}.`,
    );
  }

  if (!["hex", "base64", "base64url", "binary"].includes(digest)) {
    throw new Error(
      `Invalid digest format: ${digest}. Valid formats are "base64", "base64url", "hex", and "binary".`,
    );
  }
  let hash = `${salt}${inputString}${pepper}`;

  for (let i = 0; i < iterations; i++) {
    hash = crypto.createHash(hashAlgorithm).update(hash).digest(digest);
  }

  return hash;
}
