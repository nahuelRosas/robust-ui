import { ReactNode } from "react";

/**
 * Checks if the given element is an SVG element.
 * @param element - The element to check.
 * @returns `true` if the element is an SVG element, `false` otherwise.
 */
export function isSVGElement({ element }: { element: ReactNode }): boolean {
  if (!element) {
    return false;
  }

  if (typeof element !== "object") {
    return false;
  }

  if (!("type" in element)) {
    return false;
  }

  if (typeof element.type !== "string") {
    return false;
  }

  if (element.type.toLowerCase() !== "svg") {
    return false;
  }

  return true;
}
