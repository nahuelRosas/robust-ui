export interface ICSSRulesSet {
  base: unknown[];
  pseudoClasses: Record<string, string[]>;
  pseudoElements: Record<string, string[]>;
  atRules: Record<string, string[]>;
}

export interface Processor {
  inputProp: string;
  inputValue: unknown;
  cssStyles: ICSSRulesSet;
  darkMode: boolean;
  commands: Record<string, unknown>;
  pseudoProp?: "pseudoClasses" | "pseudoElements";
  breakPoints: {
    current: string;
    context: Record<string, unknown>;
  };
  theme: Record<string, { [key: string | number]: unknown }>;
}
