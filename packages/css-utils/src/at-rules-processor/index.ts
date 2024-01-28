import { valueRecoverer, isNullOrUndefined } from "@robust-ui/tools";
import { functionRecoverer } from "@/function-recoverer";
import { ICSSRulesSet, Processor } from "@/types";

/**
 * Processes the at-rules based on the provided parameters and updates the CSS styles accordingly.
 * @param {Processor} options - The options for processing the at-rules.
 * @returns {ICSSRulesSet} - The updated CSS rules set.
 */
export function atRulesProcessor({
  inputProp,
  inputValue,
  cssStyles,
  darkMode,
  breakPoints,
  theme,
  commands,
}: Processor): ICSSRulesSet {
  const paramValue = valueRecoverer({
    inputProp,
    inputValue,
    breakPoints,
    darkMode,
    theme,
  });

  if (isNullOrUndefined(paramValue)) return cssStyles;
  const paramValueChecked = paramValue as
    | string
    | string[]
    | Record<string, unknown>;

  if (typeof paramValueChecked === "string") {
    const atRulesElement = cssStyles.atRules[inputProp] || [];
    if (!atRulesElement.includes(paramValueChecked)) {
      atRulesElement.push(paramValueChecked);
    }
    cssStyles.atRules[inputProp] = atRulesElement;
  } else if (
    typeof paramValueChecked === "object" &&
    Array.isArray(paramValueChecked)
  ) {
    console.log({ paramValueChecked }, "array At-rule");
  } else if (
    typeof paramValueChecked === "object" &&
    !Array.isArray(paramValueChecked)
  ) {
    const atRulesElement = cssStyles.atRules[inputProp] || [];
    const result = Object.entries(paramValueChecked).reduce(
      (accumulator, [key, value]) => {
        let partialResult = `${key} {`;
        partialResult += Object.entries(
          value as { [s: string]: unknown }
        ).reduce((innerAccumulator, [subKey, subValue]) => {
          if (isNullOrUndefined(subValue)) return innerAccumulator;
          const subValueChecked = subValue as string | Record<string, unknown>;
          if (typeof subValueChecked === "string") {
            const { propFunction, functionRaw } = functionRecoverer({
              inputProp: subKey,
              commands,
            });
            const paramValueChecked = valueRecoverer({
              inputValue: subValueChecked,
              isRaw: functionRaw,
              inputProp: subKey,
              breakPoints,
              darkMode,
              theme,
            });
            return `${innerAccumulator}${propFunction(paramValueChecked)}`;
          } else if (typeof subValueChecked === "object") {
            return `${innerAccumulator}${subKey} {${Object.entries(
              subValueChecked
            ).reduce((subInnerAccumulator, [prop, propValue]) => {
              const { propFunction, functionRaw } = functionRecoverer({
                inputProp: prop,
                commands,
              });
              const paramValueChecked = valueRecoverer({
                inputValue: propValue,
                isRaw: functionRaw,
                inputProp: prop,
                breakPoints,
                darkMode,
                theme,
              });
              return `${subInnerAccumulator}${propFunction(paramValueChecked)}`;
            }, "")}}`;
          }
          return innerAccumulator;
        }, "");
        partialResult += "}";
        if (!accumulator.includes(partialResult)) {
          accumulator.push(partialResult);
        }
        return accumulator;
      },
      [] as string[]
    );
    result.forEach((element) => {
      if (!atRulesElement.includes(element)) {
        atRulesElement.push(element);
      }
    });

    cssStyles.atRules[inputProp] = atRulesElement;
  }
  return cssStyles;
}
