import {
  useState,
  useRef,
  useCallback,
  useTransition,
  useInsertionEffect,
} from "react";
import { useIsomorphicLayoutEffect } from "../useIsomorphicLayoutEffect";

export function useElementDimensions() {
  const [dimensions, setDimensions] = useState<
    Record<string, { width: string; height: string }>
  >({});
  const elementRefs = useRef<Record<string, HTMLElement>>({});
  const [windowSize, setWindowSize] = useState<{
    width: string;
    height: string;
  }>({
    width: `${window.innerWidth}px`,
    height: `${window.innerHeight}px`,
  });

  const updateDimensions = useCallback(() => {
    const newDimensions: Record<string, { width: string; height: string }> = {};

    Object.entries(elementRefs.current).forEach(([key, ref]) => {
      if (ref) {
        const { height, width } = ref.getBoundingClientRect();

        newDimensions[key] = {
          width: `${width}px`,
          height: `${height}px`,
        };
      }
    });

    setDimensions(newDimensions);
  }, []);

  const handleResize = useCallback(() => {
    setWindowSize({
      width: `${window.innerWidth}px`,
      height: `${window.innerHeight}px`,
    });
  }, []);
  useIsomorphicLayoutEffect(() => {
    const handleResizeAndDimensions = () => {
      handleResize();
      updateDimensions();
    };

    handleResizeAndDimensions();

    window.addEventListener("resize", handleResizeAndDimensions);

    return () => {
      window.removeEventListener("resize", handleResizeAndDimensions);
    };
  }, [elementRefs.current.length, handleResize, updateDimensions]);

  function registerElementRef(ref: HTMLElement | null) {
    if (ref) {
      elementRefs.current[ref.className] = ref;
    }
  }

  function getElementByKeyContainingString({
    searchString,
  }: {
    searchString: string;
  }): { width: string; height: string } {
    const foundEntry = Object.entries(dimensions).find(([key]) =>
      key.includes(searchString),
    );

    return foundEntry
      ? foundEntry[1]
      : {
          width: "100%",
          height: "100%",
        };
  }

  return {
    registerElementRef,
    dimensions,
    getElementByKeyContainingString,
    windowSize,
  };
}
