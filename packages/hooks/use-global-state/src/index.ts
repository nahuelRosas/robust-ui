import { useRecoveryGlobalStateValue } from "@robust-ui/use-recovery-global-state-value";
import { useGlobalStateUpdater } from "@robust-ui/use-global-state-updater";
import { useGlobalContext } from "@robust-ui/use-global-context";
import { FunctionType, UseGlobalStateProps } from "./types";
import { generateUniqueId } from "@robust-ui/tools";
import { useEffect, useRef } from "react";

/**
 * A custom hook that provides global state management.
 *
 * @template T - The type of the global state value.
 * @param {UseGlobalStateProps<T>} options - The options for the hook.
 * @param {string} options.key - The key to identify the global state.
 * @param {T} options.defaultValue - The default value for the global state.
 * @param {boolean} [options.isDev=false] - Indicates if the hook is used in a development environment.
 * @returns {[T, (value: FunctionType<T>) => void]} - An array containing the current value of the global state and a function to update the value.
 * @throws {Error} - If both `key` and `defaultValue` are undefined.
 */
export function useGlobalState<T>({
  key,
  defaultValue,
  isDev = false,
  // eslint-disable-next-line no-unused-vars
}: UseGlobalStateProps<T>): [T, (value: FunctionType<T>) => void] {
  if (!key && !defaultValue) {
    throw new Error(
      `key and defaultValue are both undefined. At least one of them must be defined.`,
    );
  }
  const devData = useGlobalContext({ key: "devData" });
  const devTools = useGlobalContext({ key: "devTools" });
  const userContext = useGlobalContext({
    key: "userContext",
  });

  const location =
    (typeof key === "undefined" && new Error()?.stack?.split("\n")[1]) || "";

  const id = generateUniqueId({ object: key || location, prefix: "useGlobal" });

  const globalState = isDev ? devData.globalState : userContext.globalState;

  const SetterGlobalState = isDev
    ? devTools.setAppState
    : userContext.setAppState;

  const savedValue = useRecoveryGlobalStateValue<T>({
    globalState,
    searchKey: id,
  }) as T;

  const initialValue = savedValue !== undefined ? savedValue : defaultValue;

  const valueRef = useRef<T>(initialValue as T);

  useEffect(() => {
    if (
      globalState[id] === undefined &&
      defaultValue !== undefined &&
      SetterGlobalState
    ) {
      SetterGlobalState(id, defaultValue, isDev);
    }
  }, [id, defaultValue, globalState, SetterGlobalState, isDev]);

  useEffect(() => {
    if (initialValue !== valueRef.current) {
      valueRef.current = initialValue as T;
    }
  }, [initialValue]);

  function UpdateValue(newValue: FunctionType<T>) {
    useGlobalStateUpdater<T>({
      isDev,
      SetterGlobalState,
      newValue,
      valueRef,
      key: id,
    });
  }

  return [valueRef.current, UpdateValue];
}
