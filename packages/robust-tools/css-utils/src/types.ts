export interface ICSSRulesSet {
  base: unknown[];
  pseudoClasses: Record<string, string[]>;
  pseudoElements: Record<string, string[]>;
  atRules: Record<string, string[]>;
}
