import { ReplaceCSSSelectorsOptions } from "./types";

/**
 * Replaces CSS selectors in the provided CSS string with the corresponding replacement values.
 * @param {Object} options - The options for replacing CSS selectors.
 * @param {string} options.css - The CSS string to be processed.
 * @param {Map<string, string[]>} options.replacementMap - A map where the keys represent the selectors to be replaced, and the values are arrays of replacement strings.
 * @returns {string} - The modified CSS string.
 */
export function replaceCSSSelectors({
  css,
  replacementMap,
  process = "replace",
}: ReplaceCSSSelectorsOptions): string {
  // Create a copy of the original CSS string
  let updatedCSS = css;

  // Iterate over each key-value pair in the replacementMap
  replacementMap.forEach((replacementValues, selector) => {
    if (updatedCSS.includes(selector)) {
      // Generate a regular expression string to match the selector
      const selectorRegexString = `${selector}{[^}]*}`.toString();

      // Create a regular expression object using the generated regex string
      const selectorRegex = new RegExp(selectorRegexString, "ismg");

      if (process === "add") {
        const currentValues = updatedCSS.match(selectorRegex);
        const valueRegex = new RegExp(
          `${replacementValues.join("").replace(/ /g, "")}`,
          "ismg",
        );

        const cleanCurrentValues = (currentValues || [])
          .map((value) => value.replace(selector, "").replace(/[{ }]/g, ""))
          .join("");

        if (!cleanCurrentValues.match(valueRegex)) {
          updatedCSS = updatedCSS.replace(
            selectorRegex,
            `${selector}{${cleanCurrentValues} ${replacementValues.join(" ")}}`,
          );
        }
      } else if (process === "replace") {
        // Replace the matched selectors with the modified selector and replacement string
        // Join the replacement values into a single replacement string
        const replacementString = replacementValues.join("");
        updatedCSS = updatedCSS.replace(
          selectorRegex,
          `${selector}${replacementString}`,
        );
      } else if (process === "remove") {
        const currentValues = updatedCSS.match(selectorRegex);
        const valueRegex = new RegExp(`${replacementValues}:[^;]*;`, "ismg");
        const cleanValues = currentValues
          ?.map((value) => value.replace(valueRegex, ""))
          .join("");
        updatedCSS = updatedCSS.replace(selectorRegex, `${cleanValues}`);
      }
    }

    // If the selector is not found in the CSS string, add the selector and replacement string to the CSS string
    else if (!updatedCSS.includes(selector) && process === "replace") {
      updatedCSS = `${updatedCSS}\n${selector}${replacementValues.join("")}`;
    }
  });

  // Return the modified CSS string
  return updatedCSS;
}
