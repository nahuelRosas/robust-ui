/* eslint-disable no-unused-vars */
import { safeJSON } from "@robust-ui/tools";

export type FunctionType<T> = ((prevState: T) => T) | T;

/**
 * Updates the global state value and triggers the setter function.
 *
 * @template T - The type of the global state value.
 * @param {Object} options - The options for updating the global state.
 * @param {FunctionType<T>} options.newValue - The new value or a function that returns the new value.
 * @param {boolean} options.isDev - Indicates whether the code is running in a development environment.
 * @param {React.MutableRefObject<T>} options.valueRef - The reference to the mutable global state value.
 * @param {(key: string, value: unknown, isDev: boolean) => void} options.SetterGlobalState - The setter function for updating the global state.
 * @param {string} options.key - The key of the global state value.
 * @returns {T | undefined} - The previous value of the global state.
 */
export function useGlobalStateUpdater<T>({
  SetterGlobalState,
  newValue,
  valueRef,
  isDev,
  key,
}: {
  newValue: FunctionType<T>;
  isDev: boolean;
  valueRef: React.MutableRefObject<T>;
  SetterGlobalState: (key: string, value: unknown, isDev: boolean) => void;
  key: string;
}): T | undefined {
  const currentValue = valueRef.current as T;
  const currentValueString = safeJSON({ object: currentValue });

  if (typeof newValue === "function") {
    const updatedValue = (newValue as (prevState: T) => T)(currentValue);
    const updatedValueString = safeJSON({ object: updatedValue });

    if (
      updatedValueString !== currentValueString &&
      updatedValue !== currentValue
    ) {
      valueRef.current = updatedValue;
      SetterGlobalState(key, updatedValue, isDev);
    }
  } else if (typeof newValue === "object" && newValue !== null) {
    const mergedValue = { ...currentValue, ...newValue };
    const mergedValueString = safeJSON({ object: mergedValue });

    if (
      mergedValueString !== currentValueString &&
      mergedValue !== currentValue
    ) {
      valueRef.current = mergedValue;
      SetterGlobalState(key, mergedValue, isDev);
    }
  } else {
    const previousValue = currentValue;
    const newValueString = safeJSON({ object: newValue });

    if (newValueString !== currentValueString && newValue !== currentValue) {
      valueRef.current = newValue;
      SetterGlobalState(key, newValue, isDev);
    }

    return previousValue;
  }
}
