import { CssPropertyMappings, defaultTheme, RulesCSS } from "@robust-ui/theme";
import { getPropValueGetters } from "../getPropValueGetters";
import { getPropValueWithBreakPoint } from "../getPropValueWithBreakPoint";
import { processAtRule } from "../processAtRules";
import { processComplexFunctions } from "../processComplexFunctions";
import { processPseudoClasses } from "../processPseudoClasses";
import { processPseudoElements } from "../processPseudoElements";
import { CSSProperties, ProcessPropValue } from "./types";

const UNDEFINED_STR = "undefined";

/**
 * Processes a single property value and generates cssData styles based on it.
 *
 * @param prop - The name of the cssData property.
 * @param propValue - The value of the cssData property.
 * @param breakPoint - The breakpoint value (optional).
 * @param cssData - The cssData object to which the generated styles will be added.
 * @returns The updated cssData object.
 */
export function processPropValue({
  prop,
  propValue,
  breakPoint,
  cssData,
}: ProcessPropValue): CSSProperties {
  if (typeof propValue === UNDEFINED_STR) {
    // If the propValue is undefined, return the original cssData object.
    return cssData;
  }

  if (RulesCSS.AtRules[prop as keyof typeof RulesCSS.AtRules] !== undefined) {
    cssData = processAtRule({
      prop,
      propValue,
      cssData,
    });
  } else if (
    RulesCSS.PseudoClasses[prop as keyof typeof RulesCSS.PseudoClasses] !==
    undefined
  ) {
    cssData = processPseudoClasses({
      prop,
      propValue,
      cssData,
      breakPoint,
    });
  } else if (
    RulesCSS.PseudoElements[prop as keyof typeof RulesCSS.PseudoElements] !==
    undefined
  ) {
    cssData = processPseudoElements({
      prop,
      propValue,
      cssData,
      breakPoint,
    });
  } else if (
    RulesCSS.ComplexFunctions[
      prop as keyof typeof RulesCSS.ComplexFunctions
    ] !== undefined
  ) {
    cssData = processComplexFunctions({
      prop,
      propValue,
      cssData,
      breakPoint,
    });
  }

  // If the prop is not an @rule, pseudo-class, or pseudo-element, process the value.
  else {
    // Get the prop function based on the component type.

    const propFunction = getPropValueGetters({ componentType: prop });

    // Get the prop value with the breakpoint applied.
    const propValueWithBreakpoint = getPropValueWithBreakPoint({
      propValue: propValue,
      breakPoint,
    });

    // If the prop function is undefined, return the original cssData object.
    if (propFunction === undefined) {
      return cssData;
    }

    // Map the prop to a cssData property.
    const cssProperty =
      CssPropertyMappings[prop as keyof typeof CssPropertyMappings];

    // Map the cssData property to a value in the Theme.
    const mapProperty = defaultTheme[cssProperty as keyof typeof defaultTheme];
    const property = mapProperty as Record<string, string>;

    let value = propValueWithBreakpoint;

    // If a mapping exists in Theme for the cssData property, use the mapped value.
    if (property !== undefined) {
      value = property[propValueWithBreakpoint as keyof typeof property];
    }

    // Add the generated style to the 'base' array in the cssData object.
    cssData.base.push(propFunction(value));
  }

  // Return the updated cssData object.
  return cssData;
}
