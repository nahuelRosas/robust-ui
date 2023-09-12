import { createStyleSheet } from "../createStyleSheet";
import { GenerateCSSCodeOptions } from "../types";
import { RulesCSS } from "@robust-ui/theme";
export function generateCSSCodeWithOptions({
  cssData,
  selector,
}: GenerateCSSCodeOptions) {
  const { base, pseudoClasses, pseudoElements, atRules } = cssData;
  const generatedStyles = new Map();

  try {
    const baseStylesCode = createStyleSheet({ rules: base });
    generatedStyles.set(`.${selector}`, [`${baseStylesCode}`]);

    for (const pseudoClass in pseudoClasses) {
      const pseudoSelector =
        RulesCSS["PseudoClasses"][
          pseudoClass as keyof (typeof RulesCSS)["PseudoClasses"]
        ];

      const pseudoClassProperties = pseudoClasses[pseudoClass];
      const pseudoClassStyles = createStyleSheet({
        rules: pseudoClassProperties,
      });

      generatedStyles.set(`.${selector}${pseudoSelector}`, [
        `${pseudoClassStyles}`,
      ]);
    }

    for (const pseudoElement in pseudoElements) {
      const pseudoElementProperties = pseudoElements[pseudoElement];
      const pseudoElementStyles = createStyleSheet({
        rules: pseudoElementProperties,
      });
      generatedStyles.set(`.${selector}::${pseudoElement}`, [
        `${pseudoElementStyles}`,
      ]);
    }

    for (const atRule in atRules) {
      const atRuleProperties = atRules[atRule];

      generatedStyles.set(`@${atRule} `, [`${atRuleProperties.join(";")}`]);
    }

    return generatedStyles;
  } catch (error) {
    if (error instanceof Error) {
      throw new Error("Failed to generate CSS code: " + error.message);
    } else {
      throw new Error("An unknown error occurred while generating CSS code.");
    }
  }
}
