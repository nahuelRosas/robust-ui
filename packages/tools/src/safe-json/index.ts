/**
 * Safely converts an object to a JSON string representation.
 * Circular references are replaced with '[Circular]'.
 *
 * @param replacerFunction - Optional function to customize the serialization of each object property.
 * @param indentation - Optional string or number specifying the indentation level.
 * @param object - The object to be converted to JSON.
 * @returns The JSON string representation of the object, or undefined if an error occurs.
 * @throws Error if unable to stringify the object due to a TypeError.
 */
export function safeJSON({
  replacerFunction,
  indentation,
  object,
}: {
  replacerFunction?: (key: string, value: unknown) => unknown;
  indentation?: string | number;
  object: unknown;
}): string | undefined {
  try {
    const visitedObjects = new Set<object>();
    const jsonString = JSON.stringify(
      object,
      function (key, value) {
        if (typeof value === "object" && value !== null) {
          if (visitedObjects.has(value)) {
            return "[Circular]";
          }
          visitedObjects.add(value);
        }
        return replacerFunction ? replacerFunction(key, value) : value;
      },
      indentation,
    );
    visitedObjects.clear();
    return jsonString;
  } catch (error) {
    if (error instanceof TypeError) {
      throw new Error(`Unable to stringify object: ${error.message}`);
    }
  }
}
