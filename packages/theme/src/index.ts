import { AtRules, PseudoClasses, PseudoElements } from "./css-rules-set";
export type languageType = keyof typeof language;
import { commands } from "./commands/index";
import { language } from "./language";
export * from "./media-breakpoints";
export * from "./css-rules-set";
export * from "./css-reset";
export * from "./commands";
export * from "./language";
export * from "./theme";

/**
 * Object containing selectors for styling elements.
 *  */
export const selectors = {
  ...PseudoElements,
  ...PseudoClasses,
  ...commands,
  ...AtRules,
};
