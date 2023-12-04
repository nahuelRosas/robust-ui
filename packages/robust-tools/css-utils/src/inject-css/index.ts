import { generateStyledCSSMap } from "@/generate-styled-css-map";
import { CSSValueProcessor } from "@/css-value-processor";
import { manipulateCSS } from "@/manipulate-css";
import { safeJSON } from "@robust-ui/purging";
import { InjectCSSTOptions } from "./types";
import { ICSSRulesSet } from "@/types";

export function injectCSS({
  partialComputedStyles,
  classNameSelector,
  breakPoints,
  inputProps,
  commands,
  darkMode,
  cssReset,
  theme,
}: InjectCSSTOptions):
  | { styledCSSMap: Map<string, string[]>; inputProps: Record<string, unknown> }
  | undefined {
  if (
    typeof document === "undefined" ||
    typeof window === "undefined" ||
    Object.keys(inputProps).length === 0
  )
    return {
      styledCSSMap: new Map<string, string[]>([]),
      inputProps,
    };

  try {
    let cssStyles: ICSSRulesSet = {
      base: [],
      pseudoClasses: {},
      pseudoElements: {},
      atRules: {},
    };
    const CTpartialComputedStyles =
      partialComputedStyles && partialComputedStyles[breakPoints.current];

    const PartialResult =
      CTpartialComputedStyles && CTpartialComputedStyles.styledCSSMap;

    const SavedProps =
      CTpartialComputedStyles && CTpartialComputedStyles.inputProps;

    const validation =
      !PartialResult ||
      !(safeJSON({ object: SavedProps }) === safeJSON({ object: inputProps }));

    if (validation) {
      Object.entries(inputProps).forEach(([prop, propValue]) => {
        if (!propValue) return;
        cssStyles = CSSValueProcessor({
          inputProp: prop,
          inputValue: propValue,
          breakPoints,
          cssStyles,
          commands,
          darkMode,
          theme,
        });
      });
    }

    const styledCSSMap: Map<string, string[]> = validation
      ? generateStyledCSSMap({
          classNameSelector,
          cssStyles,
          theme,
        }) || PartialResult
      : PartialResult;

    const styleDocument = document.getElementById("robust-ui");

    const manipulatedCSS =
      styleDocument &&
      manipulateCSS({
        originalCSS: styleDocument?.textContent || "",
        replacementMap: styledCSSMap,
      });

    const newDocument = manipulatedCSS
      ? manipulatedCSS
      : Array.from(styledCSSMap.entries())
          .flatMap(([key, value]) => [key, value])
          .join("");

    if (!styleDocument) {
      const documentStyle = document.createElement("style");
      documentStyle.setAttribute("id", "robust-ui");
      documentStyle.textContent = cssReset + newDocument;
      document.head.appendChild(documentStyle);
    } else {
      styleDocument.textContent = newDocument;
    }
    return {
      styledCSSMap,
      inputProps,
    };
  } catch (error) {
    if (error instanceof Error) {
      throw new Error(
        `[injectCSS] - An unexpected error occurred while processing the ${classNameSelector} property. ${error}`,
      );
    }
  }
}
