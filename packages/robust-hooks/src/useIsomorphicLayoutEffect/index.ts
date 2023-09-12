import { useLayoutEffect, useEffect, useInsertionEffect } from "react";

export const useIsomorphicLayoutEffect =
  typeof window !== "undefined" ? useLayoutEffect : useEffect;
