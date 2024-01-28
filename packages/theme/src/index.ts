import { AtRules, PseudoClasses, PseudoElements } from "./css-rules-set";
import { commands } from "./commands/index";
export * from "./commands";
export * from "./css-reset";
export * from "./css-rules-set";
export * from "./language";
export * from "./media-breakpoints";
export * from "./theme";

import { language } from "./language";

export const selectors = {
  ...commands,
  ...AtRules,
  ...PseudoClasses,
  ...PseudoElements,
};

export type languageType = keyof typeof language;
