import { FunctionRecoverer } from "@/function-recoverer";
import { ValueRecoverer } from "@/value-recoverer";
import { ICSSRulesSet } from "@/types";

export function atRulesProcessor({
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
  let result = "";

  const paramValue = ValueRecoverer({
    inputProp,
    inputValue,
    breakPoints,
    darkMode,
    theme,
  });

  if (typeof paramValue === "undefined") return cssStyles;
  else if (typeof paramValue === "string")
    result += `@${inputProp} ${paramValue};`;
  else if (typeof paramValue === "object" && !Array.isArray(paramValue)) {
    Object.entries(paramValue as { [s: string]: unknown }).forEach(
      ([key, value]) => {
        if (result === "") result += `${key} {`;
        else if (result !== "") result += `@${inputProp} ${key} {`;
        Object.entries(value as { [s: string]: unknown }).forEach(
          ([subKey, subValue]) => {
            if (typeof subValue === "string") {
              const { propFunction, functionRaw } = FunctionRecoverer({
                inputProp: subKey,
                commands,
              });
              const paramValue = ValueRecoverer({
                inputValue: subValue,
                isRaw: functionRaw,
                inputProp: subKey,
                breakPoints,
                darkMode,
                theme,
              });
              result += `\n\t${propFunction(paramValue)}`;
            } else if (typeof subValue === "object") {
              result += `\n\t${subKey} {`;
              Object.entries(subValue as { [s: string]: unknown }).forEach(
                ([prop, propValue]) => {
                  const { propFunction, functionRaw } = FunctionRecoverer({
                    inputProp: prop,
                    commands,
                  });
                  const paramValue = ValueRecoverer({
                    inputValue: propValue,
                    isRaw: functionRaw,
                    inputProp: prop,
                    breakPoints,
                    darkMode,
                    theme,
                  });
                  result += `\n\t\t${propFunction(paramValue)}`;
                },
              );
              result += "\n\t}";
            }
          },
        );

        result += "\n}\n";
      },
    );
  }
  if (!cssStyles.atRules[inputProp]) {
    cssStyles.atRules[inputProp] = [];
  }
  if (!cssStyles.atRules[inputProp].includes(result)) {
    cssStyles.atRules[inputProp].push(result);
  }

  return cssStyles;
}
