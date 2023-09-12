export type breakPoints = Record<string, number>;

export type useBreakPointValueProps<T> = {
  values: Record<string, T>;
  options?: {
    breakpoints?: breakPoints;
    fallback?: T;
  };
};
