import { HandleResizeOptions } from "./types";

export function handleResize<T>({
  breakPoints,
  setCurrentBreakpoint,
  currentBreakpoint,
}: HandleResizeOptions<T>): void {
  try {
    const isWindowDefined = typeof window !== "undefined";

    const newBreakpoint = isWindowDefined
      ? Object.keys(breakPoints)
          .reverse()
          .find((breakpoint) => window.innerWidth >= breakPoints[breakpoint])
      : null;

    if (newBreakpoint != null && newBreakpoint !== currentBreakpoint) {
      setCurrentBreakpoint(newBreakpoint);
    }
  } catch (error) {
    if (error instanceof Error)
      throw new Error(`[handleResize] - ${error.message}`);
  }
}
