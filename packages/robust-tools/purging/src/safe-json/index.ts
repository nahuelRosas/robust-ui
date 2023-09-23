import { SafeJSONOptions } from "./types";

/**
 * Safely converts an object to a JSON string, handling circular references.
 * @param {SafeJSONOptions} options - The options for converting the object to JSON.
 * @param {unknown} options.object - The object to convert to JSON.
 * @param {(key: string, value: unknown) => unknown} [options.replacer] - A function that alters the behavior of stringifying objects. Optional.
 * @param {string | number} [options.indent] - The number of spaces to use for indentation or a string to use for indentation. Optional.
 * @returns {string | null} - The JSON string representation of the object, or null if an error occurs.
 */
export function safeJSON({
  object,
  replacerFunction,
  indentation,
}: SafeJSONOptions): string | null {
  try {
    // Create a cache to keep track of visited objects
    const visitedObjects = new Set();

    // Convert the object to JSON with circular reference handling
    const jsonString = JSON.stringify(
      object,
      function (key, value) {
        // Check if the value is an object and not null
        if (typeof value === "object" && value !== null) {
          // Check if the object is already in the cache (circular reference)
          if (visitedObjects.has(value)) {
            return "[Circular]";
          }
          // Add the object to the cache
          visitedObjects.add(value);
        }
        // If a replacer function is provided, use it to modify the value
        return replacerFunction ? replacerFunction(key, value) : value;
      },
      indentation,
    );

    // Clear the cache for future conversions
    visitedObjects.clear();

    // Return the JSON string representation of the object
    return jsonString;
  } catch (error) {
    // Handle any exceptions that may occur during JSON.stringify()
    console.error("Error while converting to JSON:", error);
    return null;
  }
}
