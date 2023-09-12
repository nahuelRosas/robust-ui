import { CssPropertyMappings, cssGenerators } from "@robust-ui/theme";
import { convertRawProp } from "../convertRawProp";
/**
 * Retrieves the property value getters based on the component type.
 *
 * @param {Object} options - The options object.
 * @param {string} options.componentType - The component type.
 */
export function getPropValueGetters({
  componentType,
}: {
  componentType: string;
}) {
  const { prop, isKeywordPresent } = convertRawProp({
    inputKey: componentType,
  });

  const CTCamelCase = prop.replace(/-([a-z])/g, function (g) {
    return g[1].toUpperCase();
  });

  // Check if CssPropertyMappings doesn't have a mapping for the componentType and "str" or "string" is not forced

  if (
    cssGenerators[CTCamelCase as keyof typeof cssGenerators] === undefined &&
    cssGenerators[componentType as keyof typeof cssGenerators]
  ) {
    return cssGenerators[componentType as keyof typeof cssGenerators];
  }
  // Check if cssGenerators has a mapping for the CTCamelCase
  else if (cssGenerators[CTCamelCase as keyof typeof cssGenerators]) {
    return cssGenerators[CTCamelCase as keyof typeof cssGenerators];
  } else if (
    CssPropertyMappings[componentType as keyof typeof CssPropertyMappings] ===
      undefined &&
    !isKeywordPresent
  ) {
    return undefined;
  }

  // Return a function that formats the property value as a CSS property-value pair
  return (propValue: unknown) => {
    return `${prop} : ${propValue};`;
  };
}
