import { replaceCSSSelectors, storeItem } from "@robust-ui/functions";
import { cssReset } from "@robust-ui/theme";

export function useInjectCSS() {
  const robustDocument =
    document.getElementById("Robust-css") || createRobustDocument();

  function createRobustDocument() {
    const style = document.createElement("style");
    style.id = "Robust-css";
    style.innerHTML = cssReset;
    document.head.appendChild(style);
    return style;
  }

  function addProperty({
    selector,
    values,
  }: {
    selector: string;
    values: string[];
  }): void {
    const documentStyle = replaceCSSSelectors({
      css: robustDocument.innerHTML,
      replacementMap: new Map([[selector, values]]),
      process: "add",
    });
    robustDocument.innerHTML = documentStyle;
    storeItem<string>({
      key: "RobustDocument",
      value: documentStyle,
    });
  }

  function removeProperty({
    selector,
    property,
  }: {
    selector: string;
    property: string;
  }): void {
    const documentStyle = replaceCSSSelectors({
      css: robustDocument.innerHTML,
      replacementMap: new Map([[selector, Array(property)]]),
      process: "remove",
    });
    robustDocument.innerHTML = documentStyle;
    storeItem<string>({
      key: "RobustDocument",
      value: documentStyle,
    });
  }

  return { addProperty, removeProperty };
}
