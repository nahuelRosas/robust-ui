export type ReplaceCSSSelectorsOptions = {
  css: string;
  replacementMap: Map<string, string[]>;
  process?: "add" | "replace" | "remove";
};
