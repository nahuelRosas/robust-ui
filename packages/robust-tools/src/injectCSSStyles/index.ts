import {
  generateCSSCodeWithOptions,
  processPropValue,
  replaceCSSSelectors,
  completeBreakpoints,
} from "@robust-ui/functions";
import { InjectCSSTOptions, CSSProperties } from "./types";
import { cssReset } from "@robust-ui/theme";
import DOMPurify from "dompurify";

const UNDEFINED_STR = "undefined";

export function InjectCSSStyles({
  classSelector,
  componentProps,
  breakPoint,
  generatedStyles,
}: InjectCSSTOptions) {
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
    {
      !generatedStyles &&
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
    }

    const Styles: Map<string, string[]> =
      generatedStyles ||
      generateCSSCodeWithOptions({
        cssData,
        selector: classSelector,
      });

    let isEmpty = false;

    for (const valueArray of Styles.values()) {
      if (valueArray.some((value: string) => value.startsWith("{}"))) {
        isEmpty = true;
        break;
      }
    }

    if (isEmpty) {
      return;
    }

    const robustDocument = document.getElementById("Robust-css");
    const cleanText = DOMPurify.sanitize(robustDocument?.innerText || "");
    const newCSS =
      cleanText &&
      replaceCSSSelectors({
        css: cleanText,
        replacementMap: Styles,
      });

    const documentStyle = newCSS
      ? newCSS
      : cssReset +
        Array.from(Styles.entries())
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
    return Styles;
  } catch (error) {
    throw new Error(
      `An unexpected error occurred while injecting CSS styles. ${error}`
    );
  }
}
