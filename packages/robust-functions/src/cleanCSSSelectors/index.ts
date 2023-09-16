import { removeSelectorsFromCSS } from "../removeSelectorsFromCSS";

export function cleanCSSSelectors({ css }: { css: string }): string {
  if (typeof css !== "string") {
    throw new Error('Input parameter "css" must be a string.');
  }

  if (typeof document === "undefined") {
    throw new Error("This function can only be used in a browser environment.");
  }

  const classNamesToRemove = new Set<string>();

  document.querySelectorAll("*").forEach((element) => {
    try {
      if (element instanceof HTMLElement && element.className) {
        if (typeof element.className === "string") {
          element.className.split(" ").forEach((className) => {
            classNamesToRemove.add(className);
          });
        } else if (
          typeof element.className === "object" &&
          "baseVal" in element.className
        ) {
          const baseVal = (element.className as SVGAnimatedString).baseVal;
          baseVal.split(" ").forEach((className) => {
            classNamesToRemove.add(className);
          });
        }
      }
    } catch (error) {
      if (error instanceof Error) {
        throw new Error(
          `Error processing element: ${element.tagName}, ${error.message}`,
        );
      } else {
        throw new Error(
          `An unknown error occurred while processing element: ${element.tagName}`,
        );
      }
    }
  });

  try {
    const updatedCSS = removeSelectorsFromCSS({
      css,
      selectors: Array.from(classNamesToRemove),
    });

    return updatedCSS;
  } catch (error) {
    if (error instanceof Error) {
      throw new Error(`Error while cleaning CSS selectors: ${error.message}`);
    } else {
      throw new Error(
        "An unknown error occurred while cleaning CSS selectors.",
      );
    }
  }
}
