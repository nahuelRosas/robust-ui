export type CSSManipulationOptions = {
  originalCSS: string;
  replacementMap: Map<string, string[]>;
  action?: "add" | "replace" | "remove";
};

/**
 * Manipulates the given CSS string based on the provided options.
 * @param options - The CSS manipulation options.
 * @returns The manipulated CSS string.
 */
export function manipulateCSS({
  originalCSS,
  replacementMap,
  action = "replace",
}: CSSManipulationOptions): string {
  const actionRaw = action;
  let manipulatedCSS = originalCSS;
  let selectorRaw = "";
  let lap = 0;

  replacementMap.forEach((replacementValues, selector) => {
    if (lap === 0) {
      selectorRaw = selector;
      lap++;
    }

    if (!selector.includes(selectorRaw)) {
      const value = `${selector}${replacementValues.join("")}`;
      const validation = manipulatedCSS.includes(value);

      if (!validation) {
        if (selector.includes("import")) {
          manipulatedCSS = `${selector}${replacementValues.join(
            ""
          )};${manipulatedCSS}`;
        } else {
          manipulatedCSS = `${manipulatedCSS}${selector}${replacementValues.join(
            ""
          )}`;
        }
      }
    } else if (manipulatedCSS.includes(selector)) {
      const selectorRegexString = `${selector}{[^}]*}`;
      const selectorRegex = new RegExp(selectorRegexString, "ismg");

      if (actionRaw === "add") {
        const currentValues = manipulatedCSS.match(selectorRegex);
        const valueRegex = new RegExp(
          `${replacementValues.join("").replace(/ /g, "")}`,
          "ismg"
        );

        if (selector.includes("import")) return;

        const cleanCurrentValues = (currentValues || [])
          .map((value) => value.replace(selector, "").replace(/[{ }]/g, ""))
          .join("");

        if (!cleanCurrentValues.match(valueRegex)) {
          manipulatedCSS = manipulatedCSS.replace(
            selectorRegex,
            `${selector}{${cleanCurrentValues} ${replacementValues.join(" ")}}`
          );
        }
      } else if (actionRaw === "replace") {
        const replacementString = replacementValues.join("");
        manipulatedCSS = manipulatedCSS.replace(
          selectorRegex,
          `${selector}${replacementString}`
        );
      } else if (actionRaw === "remove") {
        const currentValues = manipulatedCSS.match(selectorRegex);
        const valueRegex = new RegExp(`${replacementValues}:[^;]*;`, "ismg");
        const cleanValues = currentValues
          ?.map((value) => value.replace(valueRegex, ""))
          .join("");
        manipulatedCSS = manipulatedCSS.replace(
          selectorRegex,
          `${cleanValues}`
        );
      }
    } else if (!manipulatedCSS.includes(selector)) {
      manipulatedCSS = `${manipulatedCSS}${selector}${replacementValues.join(
        ""
      )}`;
    }
  });

  return manipulatedCSS;
}
