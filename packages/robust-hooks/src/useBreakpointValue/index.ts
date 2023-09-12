import { useState, useCallback, useMemo } from "react";
import { useResizeListener } from "../useResizeListener";
import { useBreakPointValueProps } from "./types";
import { handleResize, debounce } from "@robust-ui/functions";

const OBJECT_STR = "object";

export function useBreakpointValue<T>({
  values,
  options,
}: useBreakPointValueProps<T>): T | null {
  if (typeof values !== OBJECT_STR) {
    throw new Error(
      "The first argument of useBreakpointValue must be an object."
    );
  }

  const [currentBreakpoint, setCurrentBreakpoint] = useState<string | null>(
    null
  );

  const handleResizeCallback = useCallback(
    function (): void {
      handleResize({ options, setCurrentBreakpoint, currentBreakpoint });
    },
    [options, setCurrentBreakpoint, currentBreakpoint]
  );

  const debouncedHandleResize = useMemo(
    function () {
      return debounce({
        fn: handleResizeCallback,
        delay: 100,
        immediate: false,
      });
    },
    [handleResizeCallback]
  );

  useResizeListener(handleResizeCallback, debouncedHandleResize);

  if (options) {
    return currentBreakpoint != null
      ? values[currentBreakpoint as keyof typeof values]
      : options.fallback || null;
  } else {
    return currentBreakpoint != null
      ? values[currentBreakpoint as keyof typeof values]
      : null;
  }
}
