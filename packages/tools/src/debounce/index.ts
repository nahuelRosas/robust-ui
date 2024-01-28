/**
 * Creates a debounced function that delays invoking the provided function until after a specified delay.
 *
 * @template T - The type of the function to debounce.
 * @param {Object} options - The options for the debounced function.
 * @param {T} options.fn - The function to debounce.
 * @param {number} [options.delay=0] - The delay in milliseconds before invoking the debounced function.
 * @param {boolean} [options.immediate=false] - Specifies whether the debounced function should be invoked immediately on the leading edge.
 * @returns {Function} - The debounced function.
 */
export function debounce<T extends (...args: unknown[]) => void>({
  fn,
  delay = 0,
  immediate = false,
}: {
  fn: T;
  delay?: number;
  immediate?: boolean;
}):
  | { (this: unknown, ...args: Parameters<T>): void; cancel: () => void }
  | undefined {
  let timer: ReturnType<typeof setTimeout> | null = null;

  if (typeof fn !== "function") {
    throw new Error("Debounce function must be a valid function");
  }

  const cancelTimer = (): void => {
    if (timer) {
      clearTimeout(timer);
      timer = null;
    }
  };

  const executeFunction = (args: Parameters<T>): void => {
    try {
      fn(...args);
    } catch (error) {
      if (error instanceof Error) {
        throw new Error(
          "Error while executing debounced function: " + error.message,
        );
      }
    }
  };

  const debouncedFunction = function (
    this: unknown,
    ...args: Parameters<T>
  ): void {
    cancelTimer();

    if (immediate) {
      executeFunction(args);
    } else {
      timer = setTimeout(() => {
        executeFunction(args);
        timer = null;
      }, delay);
    }
  };

  debouncedFunction.cancel = cancelTimer;

  return debouncedFunction;
}
