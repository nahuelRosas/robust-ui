import { IOptions, generateHash } from "../generate-hash";
import { safeJSON } from "@/safe-json";

/**
 * Generates a unique ID based on the provided object, prefix, and options.
 * @param object - The object used to generate the ID. Can be a string or an object.
 * @param prefix - The prefix to prepend to the generated ID.
 * @param options - The options for generating the ID, including the hash algorithm, digest, and iterations.
 * @returns The generated unique ID.
 * @throws If unable to generate an ID from the input or if an error occurs during the generation process.
 */
export function generateUniqueId({
  object,
  prefix,
  options = {
    hashAlgorithm: "sha512",
    digest: "hex",
    iterations: 1,
  },
}: {
  object: Record<string, unknown> | string | unknown;
  prefix?: string;
  options?: IOptions;
}): string {
  const inputForHashing =
    typeof object === "string" ? object : safeJSON({ object });

  if (!inputForHashing) {
    throw new Error("Unable to generate an ID from input");
  }

  const hashedId = generateHash({
    inputString: inputForHashing,
    options,
  });

  const idWithPrefix = prefix ? `${prefix}-${hashedId}` : hashedId;

  return idWithPrefix;
}
