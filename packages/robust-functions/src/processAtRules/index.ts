import { CssPropertyMappings, defaultTheme } from "@robust-ui/theme";
import { convertRawProp } from "../convertRawProp";
import { CSSProperties, ProcessAtRule } from "./types";

/**
 * Processes the cssData property as an @rule and generates cssData styles based on it.
 *
 * @param prop - The name of the cssData property.
 * @param propValue - The value of the cssData property.
 * @param cssData - The cssData object to which the generated styles will be added.
 * @returns The updated cssData object.
 */
export function processAtRule({
  prop,
  propValue,
  cssData,
}: ProcessAtRule): CSSProperties {
  let result = "";

  // Iterate over each key-value pair in the propValue object.
  Object.entries(propValue as { [s: string]: unknown }).forEach(
    ([key, value]) => {
      if (result === "") result += `${key} {`;
      else if (result !== "") result += `@${prop} ${key} {`;
      // Iterate over each key-value pair in the subValue object.
      Object.entries(value as { [s: string]: unknown }).forEach(
        ([subKey, subValue]) => {
          result += `\n\t${subKey} {`;

          // Iterate over each key-value pair in the subValue object.
          Object.entries(subValue as { [s: string]: unknown }).forEach(
            ([prop, propValue]) => {
              // Map the prop to a cssData property using CssPropertyMappings.

              const cssProperty =
                CssPropertyMappings[prop as keyof typeof CssPropertyMappings];

              // Map the cssData property to a value in the Theme object.
              const mapProperty =
                defaultTheme[cssProperty as keyof typeof defaultTheme];

              const property =
                mapProperty &&
                mapProperty[cssProperty as keyof typeof mapProperty];

              // If a mapping exists in Theme for the cssData property, use the mapped value.
              if (property !== undefined) {
                value = property[propValue as keyof typeof property];
              }

              // Generate the CTString by splitting, filtering, and joining the prop string.

              const { prop: CorrectProp } = convertRawProp({
                inputKey: prop,
              });

              // Add the generated cssData style to the result string.
              result += `\n\t\t${CorrectProp}: ${propValue};`;
            }
          );

          result += "\n\t}";
        }
      );

      result += "\n}\n";
    }
  );

  // Add the result string to the cssData.atRules[prop] array if it doesn't exist.
  if (!cssData.atRules[prop]) {
    cssData.atRules[prop] = [];
  }

  // Push the result string to the cssData.atRules[prop] array if it's not already included.
  if (!cssData.atRules[prop].includes(result)) {
    cssData.atRules[prop].push(result);
  }

  return cssData;
}
