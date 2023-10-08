import { debounce } from "@robust-ui/utils";
import { useEffect } from "react";

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
