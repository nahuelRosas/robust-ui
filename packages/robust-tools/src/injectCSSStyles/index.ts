import {
  generateCSSCodeWithOptions,
  processPropValue,
  replaceCSSSelectors,
  completeBreakpoints,
  safeJSON,
  retrieveItem,
  storeItem,
} from "@robust-ui/functions";
import { InjectCSSTOptions, CSSProperties } from "./types";
import { cssReset } from "@robust-ui/theme";

const UNDEFINED_STR = "undefined";

export function injectCSSStyles({
  classSelector,
  componentProps,
  breakPoint,
}: InjectCSSTOptions): void {
  if (typeof document === UNDEFINED_STR) {
    return;
  }

  try {
    let cssData: CSSProperties = {
      base: [],
      pseudoClasses: {},
      pseudoElements: {},
      atRules: {},
    };

    Object.entries(componentProps).forEach(([prop, propValue]) => {
      if (typeof propValue === UNDEFINED_STR) {
        return;
      }

      const completedBreakpoints = completeBreakpoints({
        inputObject: propValue,
      });

      try {
        cssData = processPropValue({
          prop,
          propValue: completedBreakpoints,
          breakPoint,
          cssData,
        });
      } catch (error) {
        throw new Error(
          `An unexpected error occurred while processing the ${prop} property. ${error}`
        );
      }
    });

    const generatedStyles = generateCSSCodeWithOptions({
      cssData,
      selector: classSelector,
    });

    let isEmpty = false;

    for (const valueArray of generatedStyles.values()) {
      if (valueArray.some((value: string) => value.startsWith("{}"))) {
        isEmpty = true;
        break;
      }
    }

    if (isEmpty) {
      return;
    }

    const robustDocument = document.getElementById("Robust-css");

    const newCSS =
      robustDocument?.textContent &&
      replaceCSSSelectors({
        css: robustDocument?.textContent,
        replacementMap: generatedStyles,
      });

    const documentStyle = newCSS
      ? newCSS
      : cssReset +
        Array.from(generatedStyles.entries())
          .flatMap(([key, value]) => [key, value])
          .join("");

    if (!robustDocument && !isEmpty) {
      const style = document.createElement("style");
      style.id = `Robust-css`;
      style.innerHTML = documentStyle;
      document.head.appendChild(style);
    } else if (robustDocument && !isEmpty) {
      robustDocument.innerHTML = documentStyle;
    }
  } catch (error) {
    throw new Error(
      `An unexpected error occurred while injecting CSS styles. ${error}`
    );
  }
}
