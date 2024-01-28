import { valueRecoverer, isNullOrUndefined } from "@robust-ui/tools";
import { pseudoRulesProcessor } from "@/pseudo-rules-processor";
import { functionRecoverer } from "@/function-recoverer";
import { atRulesProcessor } from "@/at-rules-processor";
import { ICSSRulesSet, Processor } from "@/types";
import { CSSRulesSet } from "@robust-ui/theme";

/**
 * Processes a CSS value based on the provided input and returns the updated CSS rules set.
 *
 * @param inputProp - The input property to process.
 * @param inputValue - The value of the input property.
 * @param breakPoints - The breakpoints for responsive styling.
 * @param cssStyles - The current CSS rules set.
 * @param commands - The commands for customizing the processing behavior.
 * @param darkMode - A flag indicating whether dark mode is enabled.
 * @param theme - The theme for styling.
 * @returns The updated CSS rules set.
 * @throws If an unexpected error occurs while processing the input property.
 */
export function cssValueProcessor({
  inputProp,
  inputValue,
  breakPoints,
  cssStyles,
  commands,
  darkMode,
  theme,
}: Processor): ICSSRulesSet {
  try {
    if (isNullOrUndefined(inputValue)) return cssStyles;

    const pseudoProp = CSSRulesSet.PseudoClasses[
      inputProp as keyof typeof CSSRulesSet.PseudoClasses
    ]
      ? "pseudoClasses"
      : CSSRulesSet.PseudoElements[
            inputProp as keyof typeof CSSRulesSet.PseudoElements
          ]
        ? "pseudoElements"
        : null;

    if (CSSRulesSet.AtRules[inputProp as keyof typeof CSSRulesSet.AtRules]) {
      cssStyles = atRulesProcessor({
        inputProp,
        inputValue,
        cssStyles,
        breakPoints,
        darkMode,
        theme,
        commands,
      });
    } else if (pseudoProp) {
      cssStyles = pseudoRulesProcessor({
        inputProp,
        inputValue,
        cssStyles,
        breakPoints,
        darkMode,
        theme,
        commands,
        pseudoProp,
      });
    } else {
      const { propFunction, functionRaw, correctPropName } = functionRecoverer({
        inputProp,
        commands,
      });

      const paramValue = valueRecoverer({
        inputProp: correctPropName,
        isRaw: functionRaw,
        inputValue,
        breakPoints,
        darkMode,
        theme,
      });

      cssStyles.base.push(propFunction(paramValue));
    }

    return cssStyles;
  } catch (error) {
    if (error instanceof Error) {
      throw new Error(
        `[cssValueProcessor] - An unexpected error occurred while processing the ${inputProp} property. ${error.message}`
      );
    }
    return cssStyles;
  }
}
