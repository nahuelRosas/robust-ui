// Import necessary modules and types
import { useContext, createContext } from "react";
import { GlobalContextValues } from "./types";

export * from "./types";
// Create the global context with an empty initial value
export const GlobalContext = createContext<GlobalContextValues>(
  {} as GlobalContextValues,
);

/**
 * Hook to access the GlobalContext data.
 *
 * @param {Object} options - Options for selecting specific context data.
 * @param {string} options.key - Key to select a specific context data object.
 * @param {string} options.subKey - Subkey to access a nested property within the selected context data.
 * @returns {GlobalContextValues | DeveloperTools | UserTools | ToolConfiguration} - The selected context data.
 * @throws {Error} - Throws an error if GlobalContext is not available.
 */

export function useGlobalContext<
  T extends keyof GlobalContextValues,
>(options?: { key: T }): GlobalContextValues[T];

export function useGlobalContext<
  T extends keyof GlobalContextValues,
  K extends keyof GlobalContextValues[T],
>(options?: { key: T; subKey: K }): GlobalContextValues[T][K];

export function useGlobalContext(options?: {
  key?: keyof GlobalContextValues;
  subKey?: keyof unknown;
}) {
  const context = useContext(GlobalContext);

  if (!context) {
    throw new Error(
      "GlobalContext is not available. Make sure to wrap your component in a GlobalContext provider.",
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
