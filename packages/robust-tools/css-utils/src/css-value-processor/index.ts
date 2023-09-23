import { pseudoRulesProcessor } from "@/pseudo-rules-processor";
import { FunctionRecoverer } from "@/function-recoverer";
import { atRulesProcessor } from "@/at-rules-processor";
import { ValueRecoverer } from "@/value-recoverer";
import { CSSRulesSet } from "@robust-ui/theme";
import { ICSSRulesSet } from "@/types";
export function CSSValueProcessor({
  inputProp,
  inputValue,
  breakPoints,
  cssStyles,
  commands,
  darkMode,
  theme,
}: {
  inputProp: string;
  inputValue: unknown;
  breakPoints: {
    current: string;
    context: Record<string, unknown>;
  };
  cssStyles: ICSSRulesSet;
  commands: Record<string, unknown>;
  darkMode: boolean;
  theme: Record<
    string,
    {
      [key: string | number]: unknown;
    }
  >;
}): ICSSRulesSet {
  try {
    if (typeof inputValue === "undefined") return cssStyles;

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
    } else if (
      CSSRulesSet.PseudoClasses[
        inputProp as keyof typeof CSSRulesSet.PseudoClasses
      ] ||
      CSSRulesSet.PseudoElements[
        inputProp as keyof typeof CSSRulesSet.PseudoElements
      ]
    ) {
      cssStyles = pseudoRulesProcessor({
        inputProp,
        inputValue,
        cssStyles,
        breakPoints,
        darkMode,
        theme,
        commands,
      });
    } else {
      const { propFunction, functionRaw, correctPropName } = FunctionRecoverer({
        inputProp,
        commands,
      });
      const paramValue = ValueRecoverer({
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
        `[CSSValueProcessor] - An unexpected error occurred while processing the ${inputProp} property. ${error.message}`,
      );
    }
    return cssStyles;
  }
}
