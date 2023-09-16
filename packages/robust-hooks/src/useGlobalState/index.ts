import { useRef } from "react";
import { useGlobalContext } from "../useGlobalContext";
import { RobustGlobalContext } from "@robust-ui/contexts";
import {
  generateId,
  RecoveryGlobalState,
  updateValueGlobalState,
} from "@robust-ui/functions";
import { FunctionType, UseGlobalStateProps } from "./types";
import { useIsomorphicLayoutEffect } from "../useIsomorphicLayoutEffect";

export function useGlobalState<T>({
  key,
  defaultValue,
}: UseGlobalStateProps<T>): [T, (value: FunctionType<T>) => void] {
  if (!key && !defaultValue) {
    throw new Error(
      `key and defaultValue are both undefined. At least one of them must be defined.`
    );
  }

  const { globalState, setGlobalStateValue } = useGlobalContext({
    providerContext: RobustGlobalContext,
  });

  const location =
    (typeof key === "undefined" && new Error()?.stack?.split("\n")[1]) || "";

  const id = generateId({ object: key || location });

  const savedValue = RecoveryGlobalState<T>({ key: id, globalState }) as T;

  const initialValue = savedValue !== undefined ? savedValue : defaultValue;

  const valueRef = useRef<T>(initialValue as T);

  useIsomorphicLayoutEffect(() => {
    if (globalState[id] === undefined && defaultValue !== undefined) {
      setGlobalStateValue(id, defaultValue);
    }
  }, [id, defaultValue, globalState, setGlobalStateValue]);

  useIsomorphicLayoutEffect(() => {
    if (initialValue !== valueRef.current) {
      valueRef.current = initialValue as T;
    }
  }, [initialValue]);

  function updateValue(newValue: FunctionType<T>) {
    updateValueGlobalState<T>({
      newValue,
      valueRef,
      setGlobalStateValue,
      key: id,
    });
  }

  return [valueRef.current, updateValue];
}
