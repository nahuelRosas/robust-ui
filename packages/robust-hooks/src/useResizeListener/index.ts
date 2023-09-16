import { debounce } from "@robust-ui/functions/src/debounce";
import { useIsomorphicLayoutEffect } from "../useIsomorphicLayoutEffect";

export function useResizeListener(
  handleResize: () => void,
  debouncedHandleResize: ReturnType<typeof debounce>,
): void {
  useIsomorphicLayoutEffect(
    function (): () => void {
      handleResize();

      window.addEventListener("resize", debouncedHandleResize);

      return () => {
        window.removeEventListener("resize", debouncedHandleResize);
      };
    },
    [debouncedHandleResize, handleResize],
  );
}
