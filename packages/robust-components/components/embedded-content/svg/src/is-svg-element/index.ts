import { ReactNode } from "react";

export function isSVGElement(element: ReactNode): boolean {
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
