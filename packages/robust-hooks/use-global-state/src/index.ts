import { useRecoveryGlobalStateValue } from "@robust-ui/use-recovery-global-state-value";
import { useGlobalStateUpdater } from "@robust-ui/use-global-state-updater";
import {
  useGlobalContext,
  GlobalContextValues,
} from "@robust-ui/use-global-context";
import { generateUniqueId } from "@robust-ui/cryptography";
import { FunctionType, UseGlobalStateProps } from "./types";
import { useEffect, useRef } from "react";

export function useGlobalState<T>({
  key,
  defaultValue,
  isDev = false,
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
