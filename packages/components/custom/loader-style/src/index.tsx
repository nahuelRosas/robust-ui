/* eslint-disable no-undef */
import { ForwardRefExotic } from "@robust-ui/constructor";
import { useSSR } from "@robust-ui/use-ssr";
import { LoaderStyleProps } from "./types";
import { createElement, ReactElement, forwardRef, Fragment, memo } from "react";

export * from "./types";

const Factory: React.ForwardRefExoticComponent<
  ForwardRefExotic<LoaderStyleProps>
> = forwardRef(function LoaderStyleComponent({ pathname }): React.JSX.Element {
  const { isServer } = useSSR();
  let content: string;
  const elementsCSS: ReactElement[] = [];

  if (isServer && pathname) {
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
    try {
      content = fs.readFileSync(cssFile, "utf8");
      elementsCSS.push(
        createElement("style", {
          key: "robust-ui-style",
          dangerouslySetInnerHTML: { __html: content },
        }),
      );
    } catch (e) {
      if (e instanceof Error) {
        throw new Error(`LoaderStyle: ${e.message}`);
      }
    }
  }

  return <Fragment>{elementsCSS.length ? elementsCSS : <Fragment />}</Fragment>;
});
/**
 * Renders the LoaderStyle component.
 *
 * @component
 * @param {Object} props - The component props.
 * @param {string} props.pathname - The pathname used to determine the CSS file to load.
 * @returns {JSX.Element} The rendered LoaderStyle component.
 * @throws {Error} If there is an error reading the CSS file.
 */

export const LoaderStyle = memo(Factory);
