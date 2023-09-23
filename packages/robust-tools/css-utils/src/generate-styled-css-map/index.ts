import { ICSSRulesSet } from "@/types";
import { CSSRulesSet } from "@robust-ui/theme";
export function generateStyledCSSMap({
  classNameSelector,
  cssStyles,
  theme,
}: {
  classNameSelector: string;
  cssStyles: ICSSRulesSet;
  theme: Record<
    string,
    {
      [key: string | number]: unknown;
    }
  >;
}) {
  const { base, pseudoClasses, pseudoElements, atRules } = cssStyles;
  const generatedStyles = new Map();

  try {
    const baseStylesCode = `{${base.join("\n")}}`;
    generatedStyles.set(`.${classNameSelector}`, [`${baseStylesCode}`]);

    for (const pseudoClass in pseudoClasses) {
      const pseudoSelector =
        CSSRulesSet["PseudoClasses"][
          pseudoClass as keyof (typeof CSSRulesSet)["PseudoClasses"]
        ];
      const pseudoClassProperties = pseudoClasses[pseudoClass];
      const pseudoClassStyles = `{${pseudoClassProperties.join("\n")}}`;
      generatedStyles.set(`.${classNameSelector}${pseudoSelector}`, [
        `${pseudoClassStyles}`,
      ]);
    }

    for (const pseudoElement in pseudoElements) {
      const pseudoElementProperties = pseudoElements[pseudoElement];
      const pseudoElementStyles = `{${pseudoElementProperties.join("\n")}}`;
      generatedStyles.set(`.${classNameSelector}::${pseudoElement}`, [
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
