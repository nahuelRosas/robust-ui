/**
 * Represents a value for a cssData property, which can be a string or an object with pseudo-elements.
 */
export type CSSPropValue = string | Partial<Record<string, string>>;

/**
 * Represents the structure of cssData properties.
 */
export type CSSProperties = {
  base: unknown[]; // An array of base cssData property values
  pseudoClasses: Record<string, string[]>; // A mapping of pseudo-classes to their transformed values
  pseudoElements: Record<string, string[]>; // A mapping of pseudo-elements to their transformed values
  atRules: Record<string, string[]>; // A mapping of at-rules to their transformed values
};

/**
 * Represents the options for processing pseudo-elements.
 */
export type ProcessPseudoElements = {
  prop: string; // The property to process pseudo-elements for
  propValue: CSSPropValue; // The value of the property, which may contain pseudo-elements
  breakPoint: string; // The breakpoint value
  cssData: CSSProperties; // The cssData object to update
};
