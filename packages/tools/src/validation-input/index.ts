/**
 * Checks if a value is null or undefined.
 *
 * @param value - The value to check.
 * @returns True if the value is null or undefined, false otherwise.
 */
export function isNullOrUndefined(value: unknown): boolean {
  return value === undefined || value === null;
}

/**
 * Checks if an object is empty.
 * @param obj - The object to check.
 * @returns True if the object is empty, false otherwise.
 */
export function isEmptyObject(obj: object): boolean {
  return Object.keys(obj).length === 0;
}

/**
 * Checks if an array is empty.
 * @param arr - The array to check.
 * @returns True if the array is empty, false otherwise.
 */
export function isEmptyArray(arr: unknown[]): boolean {
  return arr.length === 0;
}
