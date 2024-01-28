import { useRef } from "react";

/**
 * Retrieves a value from the global state object based on a search key.
 * @template T - The type of the value to retrieve.
 * @param {Object} options - The options for retrieving the value.
 * @param {string} options.searchKey - The search key to match against the keys in the global state object.
 * @param {Record<string, unknown>} options.globalState - The global state object.
 * @returns {T | undefined} - The retrieved value, or undefined if not found.
 */
export function useRecoveryGlobalStateValue<T>({
  searchKey,
  globalState,
}: {
  searchKey: string;
  globalState: Record<string, unknown>;
}): T | undefined {
  const valueRef = useRef<T | undefined>(undefined);

  const indexOfKey = Object.keys(globalState).findIndex((key) => {
    return key.toLocaleLowerCase() === searchKey.toLocaleLowerCase();
  });

  if (indexOfKey !== -1) {
    const key = Object.keys(globalState)[indexOfKey];
    if (key) valueRef.current = globalState[key] as T;
  }

  return valueRef.current;
}
