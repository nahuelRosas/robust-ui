import { IGenerateHashOptions } from "./types";
import crypto from "crypto";
/**
 * Generates a hash from a given string using the specified hash algorithm and output format.
 * @param {string} inputString - The input string to generate the hash from.
 * @param {Object} options - An object containing optional parameters.
 * @param {string} [options.hashAlgorithm="sha512"] - The hash algorithm to use.
 * @param {string} [options.salt=""] - The salt string to prepend to the inputString.
 * @param {string} [options.pepper=""] - The pepper string to append to the inputString.
 * @param {number} [options.iterations=1] - The number of iterations to perform.
 * @param {BinaryToTextEncoding} [options.digest="hex"] - The output format for the hash.
 * @returns {string} - The generated hash in the specified format.
 * @throws {Error} - If an invalid hash algorithm or digest format is provided.
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
}: IGenerateHashOptions): string {
  if (!crypto.getHashes().includes(options.hashAlgorithm)) {
    throw new Error(
      `Invalid hash algorithm: ${
        options.hashAlgorithm
      }. Valid algorithms are: ${crypto.getHashes().join(", ")}.`,
    );
  }

  if (!["hex", "base64"].includes(options.digest)) {
    throw new Error(
      `Invalid digest format: ${options.digest}. Valid formats are 'hex' and 'base64'.`,
    );
  }

  let hash = options.salt + inputString + options.pepper;

  for (let i = 0; i < options.iterations; i++) {
    hash = crypto
      .createHash(options.hashAlgorithm)
      .update(hash)
      .digest(options.digest);
  }

  return hash;
}
