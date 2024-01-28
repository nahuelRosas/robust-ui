export function isNullOrUndefined(value: unknown): boolean {
  return value === undefined || value === null;
}

export function isEmptyObject(obj: object): boolean {
  return Object.keys(obj).length === 0;
}

export function isEmptyArray(arr: unknown[]): boolean {
  return arr.length === 0;
}
