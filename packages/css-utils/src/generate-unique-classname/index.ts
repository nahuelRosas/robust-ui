import { generateUniqueId } from "@robust-ui/tools";

/**
 * Generates a unique class name based on the provided object.
 *
 * @param object - The object used to generate the unique class name.
 * @returns The generated unique class name.
 * @throws If an error occurs while generating the unique class name.
 */
export function generateUniqueClassName({
  object,
}: {
  object: { [k: string]: unknown };
}): string | undefined {
  try {
    return generateUniqueId({
      object,
      prefix: `Robust-CSS`,
    });
  } catch (error) {
    if (error instanceof Error) {
      throw new Error(
        `Error while generating unique class name for ${
          JSON.stringify(object, null, 2) || "undefined"
        }: ${error.message}`
      );
    }
  }
}
