import { debounce } from "@robust-ui/tools";
import { useEffect } from "react";

/**
 * Attaches a resize listener to the window and invokes the provided callback functions when the window is resized.
 *
 * @param handleResize - The callback function to be invoked when the window is resized.
 * @param debouncedHandleResize - The debounced callback function to be invoked when the window is resized.
 * @throws {Error} If the first argument is not a function or if debouncedHandleResize is falsy.
 */
export function useResizeListener({
  handleResize,
  debouncedHandleResize,
}: {
  handleResize: () => void;
  debouncedHandleResize: ReturnType<typeof debounce>;
}): void {
  if (typeof handleResize !== "function" || !debouncedHandleResize) {
    throw new Error(
      "The first argument of useResizeListener must be a function.",
    );
  }
  try {
    useEffect(
      function (): () => void {
        handleResize();

        window.addEventListener("resize", debouncedHandleResize);

        return () => {
          window.removeEventListener("resize", debouncedHandleResize);
        };
      },
      [debouncedHandleResize, handleResize],
    );
  } catch (error) {
    if (error instanceof Error)
      throw new Error(`[useResizeListener] - ${error.message}`);
  }
}
