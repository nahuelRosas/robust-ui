interface BreakPoints {
  [key: string]: number;
}

type HandleResizeOptions = {
  breakPoints: BreakPoints;
  setCurrentBreakpoint: React.Dispatch<React.SetStateAction<string | null>>;
  currentBreakpoint: string | null;
};

/**
 * Handles the resize event and updates the current breakpoint based on the window width.
 *
 * @param options - The options for handling the resize event.
 */
export function handleResize({
  breakPoints,
  setCurrentBreakpoint,
  currentBreakpoint,
}: HandleResizeOptions): void {
  if (!breakPoints) {
    console.error("breakPoints is undefined");
    return;
  }

  const newBreakpoint =
    typeof window !== "undefined"
      ? Object.entries(breakPoints).reduce(
          (acc, [breakpoint, breakpointElement]) => {
            if (window.innerWidth >= breakpointElement) {
              return breakpoint;
            }
            return acc;
          },
          null as string | null,
        )
      : null;

  if (newBreakpoint != null && newBreakpoint !== currentBreakpoint) {
    setCurrentBreakpoint(newBreakpoint);
  }
}
