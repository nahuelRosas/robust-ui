/* eslint-disable no-unused-vars */
import { useResizeListener } from "@robust-ui/use-resize-listener";
import { useGlobalContext } from "@robust-ui/use-global-context";
import { debounce } from "@robust-ui/tools";
import { useState, useCallback, useMemo } from "react";
import { handleResize } from "./handle-resize";

/**
 * Custom hook that returns a value based on the current breakpoint.
 *
 * @param options - The options for the hook.
 * @param options.values - An optional object containing values for each breakpoint.
 * @param options.breakPoints - An optional object defining the breakpoints.
 * @returns The value corresponding to the current breakpoint.
 * @throws An error if the hook is not used within the provider and no breakpoints are provided.
 */
export function useBreakpointValue({
  values,
  breakPoints,
}: {
  values?: Record<string, unknown>;
  breakPoints?: Record<string, number>;
} = {}): unknown {
  const devData = useGlobalContext({ key: "devData" });

  if (!devData && !breakPoints)
    throw new Error(
      "[useBreakPointValue] - You should use this hook within the provider.",
    );

  const [currentBreakpoint, setCurrentBreakpoint] = useState<string | null>(
    null,
  );

  const mediaBreakpoints = breakPoints || devData.mediaBreakpoints;

  const handleResizeCallback = useCallback(
    function (): void {
      handleResize({
        breakPoints: mediaBreakpoints,
        setCurrentBreakpoint,
        currentBreakpoint,
      });
    },
    [mediaBreakpoints, currentBreakpoint],
  );

  const debouncedHandleResize = useMemo(
    (): { (this: unknown): void; cancel: () => void } | undefined =>
      debounce({
        fn: handleResizeCallback,
        delay: 0,
        immediate: true,
      }),
    [handleResizeCallback],
  );

  const memoizedResult = useMemo(() => {
    if (values && currentBreakpoint !== null) {
      return values[currentBreakpoint] || Object.keys(values)[0];
    } else if (!values) {
      return currentBreakpoint || Object.keys(mediaBreakpoints)[0];
    } else {
      return Object.keys(values)[0];
    }
  }, [values, currentBreakpoint, mediaBreakpoints]);

  useResizeListener({
    handleResize: handleResizeCallback,
    debouncedHandleResize,
  });

  return memoizedResult;
}
