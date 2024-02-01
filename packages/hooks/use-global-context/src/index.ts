/* eslint-disable no-redeclare */
import { useContext, createContext } from "react";
import { GlobalContextValues } from "./types";
export * from "./types";

/**
 * The global context for the application.
 */
export const GlobalContext = createContext<GlobalContextValues>(
  {} as GlobalContextValues
);

/**
 * Custom hook to access the global context values.
 *
 * @template T - The key of the global context value to retrieve.
 * @param {Object} options - Optional configuration for the hook.
 * @param {T} options.key - The key of the global context value to retrieve.
 * @returns {GlobalContextValues[T]} - The value of the global context associated with the specified key.
 */
export function useGlobalContext<
  T extends keyof GlobalContextValues,
>(options?: { key: T }): GlobalContextValues[T];

/**
 * Retrieves a value from the global context based on the provided key and subKey.
 * @template T - The type of the key in the global context.
 * @template K - The type of the subKey in the global context.
 * @param {Object} options - The options for retrieving the value.
 * @param {T} options.key - The key in the global context.
 * @param {K} options.subKey - The subKey in the global context.
 * @returns {GlobalContextValues[T][K]} The value from the global context.
 */
export function useGlobalContext<
  T extends keyof GlobalContextValues,
  K extends keyof GlobalContextValues[T],
>(options?: { key: T; subKey: K }): GlobalContextValues[T][K];

/**
 * Custom hook that provides access to the global context values.
 * @param options - Optional configuration options.
 * @param options.key - The key of the specific context value to retrieve.
 * @param options.subKey - The sub-key of the specific context value to retrieve.
 * @returns The global context value(s) based on the provided options.
 * @throws Error if GlobalContext is not available.
 */
export function useGlobalContext(options?: {
  key?: keyof GlobalContextValues;
  subKey?: keyof unknown;
}) {
  const context = useContext(GlobalContext);

  if (!context) {
    throw new Error(
      "GlobalContext is not available. Make sure to wrap your component in a GlobalContext provider."
    );
  }

  if (options && options.key) {
    if (options.subKey) {
      const subContext = context[options.key];
      return (
        subContext && subContext[options.subKey as keyof typeof subContext]
      );
    } else {
      return context[options.key];
    }
  }

  return context as GlobalContextValues;
}
