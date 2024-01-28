import { inyectBrowserStyle } from "@/inject-browser-style";
import { inyectServerStyle } from "@/inject-server-style";
import { InjectCSSTOptions } from "./types";

/**
 * Injects CSS styles based on the provided options.
 *
 * @param options - The options for injecting CSS styles.
 * @returns An object containing the styled CSS map and input props, or undefined.
 */

export function injectStyle({
  classNameSelector,
  breakPoints,
  inputProps,
  commands,
  darkMode,
  cssReset,
  theme,
  isServer,
  pathname,
}: InjectCSSTOptions):
  | { styledCSSMap: Map<string, string[]>; inputProps: Record<string, unknown> }
  | undefined {
  if (isServer) {
    return inyectServerStyle({
      classNameSelector,
      breakPoints,
      inputProps,
      commands,
      darkMode,
      cssReset,
      pathname,
      isServer,
      theme,
    });
  } else {
    return inyectBrowserStyle({
      classNameSelector,
      breakPoints,
      inputProps,
      commands,
      darkMode,
      cssReset,
      theme,
      isServer,
    });
  }
}
