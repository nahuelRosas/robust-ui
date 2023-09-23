import { safeJSON } from "@robust-ui/purging";

export type FunctionType<T> = ((prevState: T) => T) | T;

export function useGlobalStateUpdater<T>({
  newValue,
  valueRef,
  SetterGlobalState,
  isDev,
  key,
}: {
  newValue: FunctionType<T>;
  isDev: boolean;
  valueRef: React.MutableRefObject<T>;
  SetterGlobalState: (key: string, value: unknown, isDev: boolean) => void;
  key: string;
}) {
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
