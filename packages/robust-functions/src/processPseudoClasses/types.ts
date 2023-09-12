// Defines the possible values for a cssData property, which can be either a string or an object with string values
export type CSSPropValue = string | Partial<Record<string, string>>;

// Defines the structure of the cssData properties object, including base styles, pseudo-classes, pseudo-elements, and at-rules
export type CSSProperties = {
  base: unknown[]; // Array of base styles
  pseudoClasses: Record<string, string[]>; // Object mapping pseudo-class names to arrays of styles
  pseudoElements: Record<string, string[]>; // Object mapping pseudo-element names to arrays of styles
  atRules: Record<string, string[]>; // Object mapping at-rule names to arrays of styles
};

// Defines the options for processing pseudo-classes in cssData properties
export type ProcessPseudoClasses = {
  prop: string; // The property to process pseudo-classes for
  propValue: CSSPropValue; // The value of the property, which may contain pseudo-classes
  breakPoint: string; // The breakpoint value
  cssData: CSSProperties; // The cssData object to update
};
