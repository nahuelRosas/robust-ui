import { FunctionRecoverer } from "@/function-recoverer";
import { ICSSRulesSet } from "@/types";
import { ValueRecoverer } from "@/value-recoverer";
import { CSSRulesSet } from "@robust-ui/theme";
export function pseudoRulesProcessor({
  inputProp,
  inputValue,
  cssStyles,
  darkMode,
  breakPoints,
  theme,
  commands,
}: {
  inputProp: string;
  inputValue: unknown;
  cssStyles: ICSSRulesSet;
  darkMode: boolean;
  commands: Record<string, unknown>;
  breakPoints: {
    current: string;
    context: Record<string, unknown>;
  };
  theme: Record<
    string,
    {
      [key: string | number]: unknown;
    }
  >;
}): ICSSRulesSet {
  if (typeof inputValue === "undefined") return cssStyles;

  const pseudoProp = CSSRulesSet.PseudoClasses[
    inputProp as keyof typeof CSSRulesSet.PseudoClasses
  ]
    ? "pseudoClasses"
    : CSSRulesSet.PseudoElements[
        inputProp as keyof typeof CSSRulesSet.PseudoElements
      ]
    ? "pseudoElements"
    : null;

  if (!pseudoProp) return cssStyles;

  if (!cssStyles[pseudoProp][inputProp]) {
    cssStyles[pseudoProp][inputProp] = [];
  }

  const paramValue = ValueRecoverer({
    inputProp,
    inputValue,
    breakPoints,
    darkMode,
    theme,
  });

  Object.entries(paramValue as { [s: string]: unknown }).forEach(
    ([key, value]) => {
      if (typeof value === "undefined") return;
      const { propFunction } = FunctionRecoverer({
        inputProp: key,
        commands,
      });
      const paramValue = ValueRecoverer({
        inputProp: key,
        inputValue: value,
        breakPoints,
        darkMode,
        theme,
      });

      if (
        propFunction &&
        !cssStyles[pseudoProp][inputProp].includes(propFunction(paramValue))
      ) {
        cssStyles[pseudoProp][inputProp].push(propFunction(paramValue));
      }
    },
  );

  return cssStyles;
}
