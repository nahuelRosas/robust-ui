import { GenerateIdOptions } from "./types";
import { safeJSON } from "@robust-ui/purging";
import { generateHash } from "../generate-hash";

/**
 * Generates a unique ID based on the provided object or string using a specified algorithm.
 *
 * @param options - Options for generating the ID.
 * @param options.object - The object or string to generate the ID from.
 * @param options.prefix - An optional prefix to include in the generated ID.
 * @param options.algorithm - The hash algorithm to use for generating the hash. Default is "sha512".
 * @returns The generated ID as a string.
 */
export function generateUniqueId({
  object,
  prefix,
  options = {
    hashAlgorithm: "sha512",
    digest: "hex",
    iterations: 1,
  },
}: GenerateIdOptions) {
  // Define common hash options

  // Determine the input for hashing
  const inputForHashing =
    typeof object === "string" ? object : safeJSON({ object });
  if (!inputForHashing) throw new Error("Unable to generate an ID from input");

  // Generate the hash
  const hashedId = generateHash({
    inputString: inputForHashing,
    options,
  });

  // Conditionally add the prefix
  const idWithPrefix = prefix ? `${prefix}-${hashedId}` : hashedId;

  return idWithPrefix;
}
