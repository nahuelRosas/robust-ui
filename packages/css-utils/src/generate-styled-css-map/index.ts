import { isNullOrUndefined, isEmptyArray } from "@robust-ui/tools";
import { CSSRulesSet } from "@robust-ui/theme";
import { ICSSRulesSet } from "@/types";

/**
 * Generates a styled CSS map based on the provided parameters.
 *
 * @param {Object} options - The options for generating the CSS map.
 * @param {string} options.classNameSelector - The class name selector for the CSS map.
 * @param {ICSSRulesSet} options.cssStyles - The CSS rules set for the CSS map.
 * @param {Record<string, Record<string | number, unknown>>} options.theme - The theme object for the CSS map.
 *
 * @returns {Map<string, string[]> | undefined} - The generated styled CSS map.
 * @throws {Error} - If there is an error generating the CSS code.
 */

export function generateStyledCSSMap({
  classNameSelector,
  cssStyles,
}: {
  classNameSelector: string;
  cssStyles: ICSSRulesSet;
  theme: Record<
    string,
    {
      [key: string | number]: unknown;
    }
  >;
}): Map<string, string[]> | undefined {
  const { base, pseudoClasses, pseudoElements, atRules } = cssStyles;

  try {
    const generatedStyles = new Map<string, string[]>();

    const baseStylesCode = `{${base.join("")}}`;
    if (!isEmptyArray(base)) {
      generatedStyles.set(`.${classNameSelector}`, [`${baseStylesCode}`]);
    }

    for (const pseudoClass in pseudoClasses) {
      if (Object.prototype.hasOwnProperty.call(pseudoClasses, pseudoClass)) {
        const pseudoSelector =
          CSSRulesSet["PseudoClasses"][
            pseudoClass as keyof (typeof CSSRulesSet)["PseudoClasses"]
          ];
        const pseudoClassProperties = pseudoClasses[pseudoClass];
        if (isNullOrUndefined(pseudoClassProperties)) continue;
        const pseudoClassStyles = `{${pseudoClassProperties?.join("")}}`;

        generatedStyles.set(`.${classNameSelector}${pseudoSelector}`, [
          `${pseudoClassStyles}`,
        ]);
      }
    }

    for (const pseudoElement in pseudoElements) {
      if (Object.prototype.hasOwnProperty.call(pseudoElements, pseudoElement)) {
        const pseudoElementProperties = pseudoElements[pseudoElement];
        if (isNullOrUndefined(pseudoElementProperties)) continue;
        const pseudoElementStyles = `{${pseudoElementProperties?.join("")}}`;
        generatedStyles.set(`.${classNameSelector}::${pseudoElement}`, [
          `${pseudoElementStyles}`,
        ]);
      }
    }

    for (const atRule in atRules) {
      const value = atRules[atRule];
      if (isNullOrUndefined(value)) continue;
      const valueChecked = value as string[];
      if (valueChecked.length > 1) {
        const values = [];
        for (let index = 0; index < valueChecked.length; index++) {
          if (index !== 0) values.push(`@${atRule} ${valueChecked[index]}`);
        }
        generatedStyles.set(`@${atRule} `, [`${valueChecked[0]}`, ...values]);
      } else {
        generatedStyles.set(`@${atRule} `, [`${valueChecked.join("")}`]);
      }
    }
    return generatedStyles;
  } catch (error) {
    if (error instanceof Error) {
      throw new Error("Failed to generate CSS code: " + error.message);
    }
  }
}
