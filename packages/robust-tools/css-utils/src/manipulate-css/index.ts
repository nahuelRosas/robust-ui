export type CSSManipulationOptions = {
  originalCSS: string;
  replacementMap: Map<string, string[]>;
  action?: "add" | "replace" | "remove";
};

export function manipulateCSS({
  originalCSS,
  replacementMap,
  action = "replace",
}: CSSManipulationOptions): string {
  let manipulatedCSS = originalCSS;

  replacementMap.forEach((replacementValues, selector) => {
    if (manipulatedCSS.includes(selector)) {
      const selectorRegexString = `${selector}{[^}]*}`.toString();

      const selectorRegex = new RegExp(selectorRegexString, "ismg");

      if (action === "add") {
        const currentValues = manipulatedCSS.match(selectorRegex);
        const valueRegex = new RegExp(
          `${replacementValues.join("").replace(/ /g, "")}`,
          "ismg",
        );

        const cleanCurrentValues = (currentValues || [])
          .map((value) => value.replace(selector, "").replace(/[{ }]/g, ""))
          .join("");

        if (!cleanCurrentValues.match(valueRegex)) {
          manipulatedCSS = manipulatedCSS.replace(
            selectorRegex,
            `${selector}{${cleanCurrentValues} ${replacementValues.join(" ")}}`,
          );
        }
      } else if (action === "replace") {
        const replacementString = replacementValues.join("");
        manipulatedCSS = manipulatedCSS.replace(
          selectorRegex,
          `${selector}${replacementString}`,
        );
      } else if (action === "remove") {
        const currentValues = manipulatedCSS.match(selectorRegex);
        const valueRegex = new RegExp(`${replacementValues}:[^;]*;`, "ismg");
        const cleanValues = currentValues
          ?.map((value) => value.replace(valueRegex, ""))
          .join("");
        manipulatedCSS = manipulatedCSS.replace(
          selectorRegex,
          `${cleanValues}`,
        );
      }
    } else if (!manipulatedCSS.includes(selector) && action === "replace") {
      manipulatedCSS = `${manipulatedCSS}\n${selector}${replacementValues.join(
        "",
      )}`;
    }
  });

  return manipulatedCSS;
}
