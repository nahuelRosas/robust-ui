import {
  CssPropertyMappings,
  defaultTheme,
  cssGenerators,
} from "@robust-ui/theme";
import { getPropValueGetters } from "../getPropValueGetters";
import { getPropValueWithBreakPoint } from "../getPropValueWithBreakPoint";
import { CSSProperties, ProcessComplexFunctionsProps } from "./types";

/**
 * Processes pseudo-classes in cssData properties and updates the provided cssData object accordingly.
 *
 * @param {ProcessPseudoClasses} options - The options for processing pseudo-classes.
 * @param {string} options.prop - The property to process pseudo-classes for.
 * @param {unknown} options.propValue - The value of the property, which may contain pseudo-classes.
 * @param {RulesCSS} options.cssData - The cssData object to update.
 * @param {string} options.breakPoint - The breakpoint value.
 * @returns {CSSProperties} - The updated cssData object.
 */
export function processComplexFunctions({
  prop,
  propValue,
  cssData,
  breakPoint,
}: ProcessComplexFunctionsProps): CSSProperties {
  if (typeof propValue === "undefined") {
    // If the propValue is undefined, return the original cssData object.
    return cssData;
  }
  const propFunction = getPropValueGetters({ componentType: prop });

  if (propFunction === undefined) {
    return cssData;
  }

  const hasInternalProps = Object.keys(propValue as object).some(
    (key) =>
      defaultTheme.hasOwnProperty(key) || cssGenerators.hasOwnProperty(key)
  );

  if (hasInternalProps) {
    const internalProps = Object.entries(propValue).reduce(
      (acc, [key, value]) => {
        if (defaultTheme.hasOwnProperty(key) && Array.isArray(value)) {
          let transformedValue = value;
          const mapProperty = defaultTheme[key as keyof typeof defaultTheme];
          const property = mapProperty as Record<string, string>;
          if (property !== undefined) {
            transformedValue = value.map((v) => property[v]);
          }
          acc[key] = transformedValue;
        } else if (cssGenerators.hasOwnProperty(key)) {
          // Get the prop value with the breakpoint applied.
          const propValueWithBreakpoint = getPropValueWithBreakPoint({
            propValue: value as
              | string
              | Partial<Record<string, unknown>>
              | undefined,
            breakPoint,
          });

          // Map the prop to a cssData property.
          const cssProperty =
            CssPropertyMappings[key as keyof typeof CssPropertyMappings];
          // Map the cssData property to a value in the Theme.
          const mapProperty =
            defaultTheme[cssProperty as keyof typeof defaultTheme];
          const property = mapProperty as Record<string, string>;
          let newValue = propValueWithBreakpoint;
          // If a mapping exists in Theme for the cssData property, use the mapped value.
          if (property !== undefined) {
            newValue =
              property[propValueWithBreakpoint as keyof typeof property];
          }

          acc[key] = newValue;
        } else {
          acc[key] = value;
        }
        return acc;
      },
      {} as Record<string, unknown>
    );
    const newValue = propFunction(internalProps);

    cssData.base.push(newValue);
  } else {
    const propValueWithBreakpoint = getPropValueWithBreakPoint({
      propValue: propValue,
      breakPoint,
    });

    const cssProperty =
      CssPropertyMappings[prop as keyof typeof CssPropertyMappings];

    const mapProperty = defaultTheme[cssProperty as keyof typeof defaultTheme];
    const property = mapProperty as Record<string, string>;

    let value = propValueWithBreakpoint;

    if (property !== undefined) {
      value = property[propValueWithBreakpoint as keyof typeof property];
    }

    cssData.base.push(propFunction(value));
  }

  return cssData;
}
