import { InjectCSSTOptions, ICSSRulesSet } from "./types";
import { safeJSON } from "@robust-ui/purging";
import { usePathname } from "next/navigation";
import {
  generateStyledCSSMap,
  CSSValueProcessor,
  manipulateCSS,
} from "@robust-ui/css-utils";
import { useMemo } from "react";

export function useInjectStyle({
  partialComputedStyles,
  classNameSelector,
  breakPoints,
  inputProps,
  commands,
  darkMode,
  cssReset,
  isServer,
  theme,
}: InjectCSSTOptions):
  | { styledCSSMap: Map<string, string[]>; inputProps: Record<string, unknown> }
  | undefined {
  const Pathname = usePathname();
  return useMemo(() => {
    if (isServer) {
      const fs = require("fs");
      const path = require("path");
      const cwd = process.cwd();
      const publicFolder = path.join(cwd, "public");
      const nameFile = Pathname.toString().split("/");
      const cssFile = path.join(
        publicFolder,
        `${
          nameFile[nameFile.length - 1].length === 0
            ? "root"
            : nameFile[nameFile.length - 1]
        }-document.css`,
      );

      function pathRenderLog({
        context,
      }: {
        context: "START" | "END" | "WORKING";
      }) {
        if (!fs.existsSync(publicFolder)) fs.mkdirSync(publicFolder);

        const logFile = path.join(publicFolder, `path.log`);

        fs.writeFileSync(logFile, `${Pathname} - ${context}`, "utf8");
      }
      if (Object.keys(inputProps).length === 0)
        return {
          styledCSSMap: new Map<string, string[]>([]),
          inputProps,
        };

      const status = classNameSelector.includes("Provider")
        ? "START"
        : classNameSelector.includes("ToastManager")
          ? "END"
          : "WORKING";

      pathRenderLog({ context: status });

      let cssStyles: ICSSRulesSet = {
        base: [],
        pseudoClasses: {},
        pseudoElements: {},
        atRules: {},
      };

      if (status === "START" && fs.existsSync(cssFile)) {
        fs.unlinkSync(cssFile);
      }

      Object.entries(inputProps).forEach(([prop, propValue]) => {
        if (!propValue) return;
        cssStyles = CSSValueProcessor({
          inputProp: prop,
          inputValue: propValue,
          breakPoints,
          cssStyles,
          commands,
          darkMode,
          theme,
        });
      });

      const styledCSSMap: Map<string, string[]> = generateStyledCSSMap({
        classNameSelector,
        cssStyles,
        theme,
      });

      if (fs.existsSync(cssFile)) {
        const cssFileContent = fs.readFileSync(cssFile, "utf8");
        const manipulatedCSS = manipulateCSS({
          originalCSS: cssFileContent || cssReset,
          replacementMap: styledCSSMap,
        });

        fs.writeFileSync(cssFile, manipulatedCSS, "utf8");
      } else {
        const content =
          cssReset +
          Array.from(styledCSSMap.entries())
            .flatMap(([key, value]) => [key, value])
            .join("");

        fs.writeFileSync(cssFile, content, "utf8");
      }
      // if (status === "END")
      //   console.log(`Robust UI -
      // generated static css file for ${Pathname}`);

      return;
    } else {
      try {
        let cssStyles: ICSSRulesSet = {
          base: [],
          pseudoClasses: {},
          pseudoElements: {},
          atRules: {},
        };
        const CTpartialComputedStyles =
          partialComputedStyles && partialComputedStyles[breakPoints.current];

        const PartialResult =
          CTpartialComputedStyles && CTpartialComputedStyles.styledCSSMap;

        const SavedProps =
          CTpartialComputedStyles && CTpartialComputedStyles.inputProps;

        const validation =
          !PartialResult ||
          !(
            safeJSON({ object: SavedProps }) ===
            safeJSON({ object: inputProps })
          );

        if (validation) {
          Object.entries(inputProps).forEach(([prop, propValue]) => {
            if (!propValue) return;
            cssStyles = CSSValueProcessor({
              inputProp: prop,
              inputValue: propValue,
              breakPoints,
              cssStyles,
              commands,
              darkMode,
              theme,
            });
          });
        }

        const styledCSSMap: Map<string, string[]> = validation
          ? generateStyledCSSMap({
              classNameSelector,
              cssStyles,
              theme,
            }) || PartialResult
          : PartialResult;

        const styleDocument = document.querySelector("style");
        const manipulatedCSS =
          styleDocument &&
          manipulateCSS({
            originalCSS: styleDocument?.textContent || "",
            replacementMap: styledCSSMap,
          });
        const newDocument = manipulatedCSS
          ? manipulatedCSS
          : Array.from(styledCSSMap.entries())
              .flatMap(([key, value]) => [key, value])
              .join("");
        if (!styleDocument) {
          const documentStyle = document.createElement("style");
          documentStyle.textContent = cssReset + newDocument;
          document.head.appendChild(documentStyle);
        } else {
          styleDocument.textContent = newDocument;
        }
        return {
          styledCSSMap,
          inputProps,
        };
      } catch (error) {
        if (error instanceof Error) {
          throw new Error(
            `[injectCSS] - An unexpected error occurred while processing the ${classNameSelector} property. ${error}`,
          );
        }
      }
    }

    return;
  }, [
    partialComputedStyles,
    classNameSelector,
    breakPoints,
    inputProps,
    isServer,
    Pathname,
    commands,
    darkMode,
    cssReset,
    theme,
  ]);
}
