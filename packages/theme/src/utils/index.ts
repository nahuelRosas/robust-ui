/**
 * Generates an object with key-value entries based on the specified length, prefix, and integer flag.
 * @param length - The number of entries to generate.
 * @param prefix - The prefix to be added to each key and value.
 * @param integer - A flag indicating whether the generated numbers should be integers or floats.
 * @returns An object with key-value entries.
 */
export function generateEntries({
  length,
  prefix,
  integer = false,
}: {
  length: number;
  prefix?: string;
  integer?: boolean;
}): { [k: string]: string } {
  return Object.fromEntries(
    Array.from({ length }, (_, i) => {
      const number = integer ? i + 1 : (i + 1) / 10;
      return [`${number}${prefix}`, `${number}${prefix}`];
    }),
  );
}
