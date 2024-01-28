/* eslint-disable @typescript-eslint/no-var-requires */
import { generateStyledCSSMap } from "@/generate-styled-css-map";
import { cssValueProcessor } from "@/css-value-processor";
import { InjectCSSTOptions } from "@/inject-style/types";
import { manipulateCSS } from "@/manipulate-css";
import { ICSSRulesSet } from "@/types";

/**
 * Injects server-side styles based on the provided options.
 *
 * @param options - The options for injecting server-side styles.
 * @returns An object containing the styled CSS map and input props, or undefined if the input props or pathname are empty.
 * @throws If there is an error injecting the server style.
 */

export function inyectServerStyle({
  classNameSelector,
  breakPoints,
  inputProps,
  pathname,
  commands,
  darkMode,
  cssReset,
  theme,
}: InjectCSSTOptions):
  | { styledCSSMap: Map<string, string[]>; inputProps: Record<string, unknown> }
  | undefined {
  if (!Object.keys(inputProps).length || !pathname)
    return {
      styledCSSMap: new Map<string, string[]>([]),
      inputProps,
    };

  try {
    const fs = require("fs");
    const path = require("path");
    const cwd = process.cwd();
    const robustFolder = path.join(cwd, ".robust-ui");
    const nameFile = pathname.toString().split("/");
    const lastElementName = nameFile[nameFile.length - 1];
    const cssFile = path.join(
      robustFolder,
      `${
        !lastElementName || lastElementName.length === 0
          ? "root"
          : nameFile[nameFile.length - 1]
      }-document.css`,
    );

    const cssFileContent = fs.existsSync(cssFile)
      ? fs.readFileSync(cssFile, "utf8")
      : false;

    if (cssFileContent && cssFileContent.includes(classNameSelector)) return;

    if (!fs.existsSync(robustFolder)) fs.mkdirSync(robustFolder);

    const cssStyles: ICSSRulesSet = Object.entries(inputProps).reduce(
      (acc, [key, value]) => {
        if (!value || !key) return acc;

        acc = cssValueProcessor({
          inputProp: key,
          inputValue: value,
          breakPoints,
          cssStyles: acc,
          commands,
          darkMode,
          theme,
        });
        return acc;
      },
      {
        atRules: {},
        pseudoClasses: {},
        pseudoElements: {},
        base: [],
      } as ICSSRulesSet,
    );

    const styledCSSMap = generateStyledCSSMap({
      classNameSelector,
      cssStyles,
      theme,
    });

    if (!styledCSSMap)
      return {
        styledCSSMap: new Map<string, string[]>([]),
        inputProps,
      };
    if (fs.existsSync(cssFile)) {
      const cssFileContent = fs.readFileSync(cssFile, "utf8");
      const manipulatedCSS = manipulateCSS({
        originalCSS: cssFileContent || cssReset,
        replacementMap: styledCSSMap,
      });
      fs.writeFileSync(cssFile, manipulatedCSS, "utf8");
    } else {
      const manipulatedCSS = manipulateCSS({
        originalCSS: cssReset,
        replacementMap: styledCSSMap,
      });
      fs.writeFileSync(cssFile, manipulatedCSS, "utf8");
    }

    return {
      styledCSSMap,
      inputProps,
    };
  } catch (error) {
    if (error instanceof Error) {
      throw new Error(
        `[inyectServerStyle] - An unexpected error occurred while processing the ${classNameSelector} property. ${error}`,
      );
    }
  }
}
