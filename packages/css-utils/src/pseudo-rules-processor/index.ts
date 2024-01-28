import { functionRecoverer } from "@/function-recoverer";
import { valueRecoverer } from "@robust-ui/tools";
import { ICSSRulesSet, Processor } from "@/types";

/**
 * Processes pseudo rules based on the provided parameters.
 *
 * @param {Processor} options - The options for the pseudo rules processor.
 * @returns {ICSSRulesSet} - The processed CSS rules set.
 */
export function pseudoRulesProcessor({
  breakPoints,
  inputValue,
  pseudoProp,
  inputProp,
  cssStyles,
  darkMode,
  commands,
  theme,
}: Processor): ICSSRulesSet {
  if (!inputValue || !pseudoProp) return cssStyles;

  return Object.entries(
    valueRecoverer({
      inputProp,
      inputValue,
      breakPoints,
      darkMode,
      theme,
    }) as { [s: string]: unknown }
  ).reduce(
    (acc, [key, value]) => {
      if (!value) return acc;
      const { propFunction } = functionRecoverer({
        inputProp: key,
        commands,
      });

      const position = acc[pseudoProp][inputProp] || [];

      const expression = propFunction(value);

      if (position && expression && !position.includes(expression)) {
        acc = {
          ...acc,
          [pseudoProp]: {
            ...acc[pseudoProp],
            [inputProp]: [...position, expression],
          },
        };
      }

      return acc;
    },
    { ...cssStyles }
  );
}
