import { IOptions, generateHash } from "../generate-hash";
import { safeJSON } from "@/safe-json";

/**
 * Generates a unique ID based on the provided object, prefix, and options.
 * If the object is a string, it will be used directly. Otherwise, it will be converted to a JSON string.
 * The generated ID is a hash of the input string using the specified hash algorithm and digest.
 * If a prefix is provided, it will be prepended to the generated ID.
 *
 * @param object - The object, string, or unknown value used to generate the ID.
 * @param prefix - An optional prefix to prepend to the generated ID.
 * @param options - An optional configuration object for customizing the ID generation process.
 * @returns The generated unique ID.
 * @throws Error if unable to generate an ID from the input.
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
