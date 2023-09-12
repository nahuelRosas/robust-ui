import { randomColor } from "../randomColor";
import { MultiStyleStringProps } from "./types";

export function multiStyleString({
  children,
  multiStyles,
}: MultiStyleStringProps) {
  const isMultiStylesValid =
    multiStyles?.state && multiStyles?.selectorMultiStyles;

  const MapChildren = [];
  const StringChildren: string[] = [];

  if (Array.isArray(children)) {
    children.forEach((child) => {
      if (typeof child === "string") {
        StringChildren.push(child);
      } else {
        MapChildren.push(child);
      }
    });
  }

  if (isMultiStylesValid) {
    const colorsArray = multiStyles.colors || [];
    const weightsArray = multiStyles.weights || [];
    const sourceChildren =
      StringChildren.length > 0 ? StringChildren : [children];
    MapChildren.push(
      sourceChildren
        .map((child) => {
          if (
            child &&
            typeof child === "string" &&
            multiStyles.selectorMultiStyles
          ) {
            return child
              .split(multiStyles.selectorMultiStyles)
              .filter((text) => text.trim().length > 0)
              .map((text, index) => {
                const colorIndex = index % colorsArray.length;
                const weightsIndex = index % weightsArray.length;
                const colorKey = colorsArray[colorIndex] || undefined;
                const colorRaw = multiStyles.randomColors
                  ? randomColor({ seed: text })
                  : undefined;
                const weights = weightsArray[weightsIndex] || 1;
                return { text, colorKey, colorRaw, weights };
              });
          }
        })
        .flat()
    );
  } else if (StringChildren.length > 0 && !isMultiStylesValid) {
    MapChildren.push(StringChildren);
  } else {
    MapChildren.push(children);
  }

  return MapChildren;
}
