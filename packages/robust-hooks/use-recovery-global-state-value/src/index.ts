import { useRef } from "react";

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
    valueRef.current = globalState[Object.keys(globalState)[indexOfKey]] as T;
  }

  return valueRef.current;
}
