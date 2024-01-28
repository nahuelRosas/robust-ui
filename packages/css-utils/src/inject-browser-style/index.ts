/* eslint-disable no-undef */
import { generateStyledCSSMap } from "@/generate-styled-css-map";
import { isNullOrUndefined } from "@robust-ui/tools";
import { cssValueProcessor } from "@/css-value-processor";
import { InjectCSSTOptions } from "@/inject-style/types";
import { manipulateCSS } from "@/manipulate-css";
import { ICSSRulesSet } from "@/types";

/**
 * Injects browser styles based on the provided options.
 *
 * @param options - The options for injecting browser styles.
 * @returns An object containing the styled CSS map and input props, or undefined.
 * @throws If an unexpected error occurs while processing the classNameSelector property.
 */
export function inyectBrowserStyle({
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
  try {
    const styleDocument = document.getElementById("robust-ui");
    const styleDocumentContent = styleDocument?.textContent || "";
    if (styleDocumentContent.includes(classNameSelector)) return;

    const cssStyles: ICSSRulesSet = Object.entries(inputProps).reduce(
      (acc, [key, value]) => {
        if (isNullOrUndefined(value) || isNullOrUndefined(key)) return acc;
        acc = cssValueProcessor({
          inputProp: key,
          inputValue: value,
          breakPoints,
          cssStyles: acc,
          commands,
          darkMode,
          theme,
        });
        return acc;
      },
      {
        atRules: {},
        pseudoClasses: {},
        pseudoElements: {},
        base: [],
      } as ICSSRulesSet,
    );

    const styledCSSMap = generateStyledCSSMap({
      classNameSelector,
      cssStyles,
      theme,
    });

    if (isNullOrUndefined(styledCSSMap))
      return {
        styledCSSMap: new Map<string, string[]>([]),
        inputProps,
      };

    const styledCSSMapChecked = styledCSSMap as Map<string, string[]>;

    if (styleDocument) {
      const manipulatedCSS = manipulateCSS({
        originalCSS: styleDocument.textContent || cssReset,
        replacementMap: styledCSSMapChecked,
      });

      styleDocument.textContent = manipulatedCSS;
    } else {
      const documentStyle = document.createElement("style");
      documentStyle.setAttribute("id", "robust-ui");
      const manipulatedCSS = manipulateCSS({
        originalCSS: cssReset,
        replacementMap: styledCSSMapChecked,
      });
      documentStyle.textContent = manipulatedCSS;
      document.head.appendChild(documentStyle);
    }

    return {
      styledCSSMap: styledCSSMapChecked,
      inputProps,
    };
  } catch (error) {
    if (error instanceof Error) {
      throw new Error(
        `[inyectBrowserStyle] - An unexpected error occurred while processing the ${classNameSelector} property. ${error}`,
      );
    }
  }
}
