export type CSSObject = {
  base?: unknown[];
  pseudoClasses?: Record<string, string[]>;
  pseudoElements?: Record<string, string[]>;
  atRules?: Record<string, string[]>;
};

export type GenerateCSSCodeOptions = {
  cssData: CSSObject;
  selector: string;
};
