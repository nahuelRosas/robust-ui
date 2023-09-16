export function debounce<T extends (...args: unknown[]) => void>({
  fn,
  delay = 0,
  immediate = false,
}: {
  fn: T;
  delay?: number;
  immediate?: boolean;
}): {
  (...args: Parameters<T>): void;
  cancel(): void;
} {
  let timer: ReturnType<typeof setTimeout> | null = null;

  if (typeof fn !== "function") {
    throw new Error("Debounce function must be a valid function");
  }

  function cancelTimer(): void {
    if (timer) {
      clearTimeout(timer);
      timer = null;
    }
  }

  function debouncedFunction(this: unknown, ...args: Parameters<T>): void {
    cancelTimer();

    if (immediate) {
      executeFunction(args);
    } else {
      timer = setTimeout(() => {
        executeFunction(args);
        timer = null;
      }, delay);
    }
  }

  function executeFunction(args: Parameters<T>): void {
    try {
      fn(...args);
    } catch (error) {
      if (error instanceof Error) {
        throw new Error(
          "Error while executing debounced function: " + error.message,
        );
      } else {
        throw new Error(
          "An unknown error occurred while executing debounced function.",
        );
      }
    }
  }

  debouncedFunction.cancel = cancelTimer;

  return debouncedFunction;
}
