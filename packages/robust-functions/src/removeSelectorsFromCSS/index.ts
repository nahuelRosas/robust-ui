/**
 * Removes specified CSS selectors and their associated styles from a CSS string.
 * @param {string} css - The original CSS string.
 * @param {string[]} selectors - An array of selectors to be removed.
 * @returns {string} - The updated CSS string after removal of specified selectors.
 */
export function removeSelectorsFromCSS({
  css,
  selectors,
}: {
  css: string;
  selectors: string[];
}): string {
  // Initialize the variable to store the updated CSS
  let updatedCSS = css;

  // Iterate through each selector to remove
  selectors.forEach((selector) => {
    // Construct a regular expression string to match the selector and its associated styles
    const selectorRegexString = `${selector.trim()}\\s*{[^}]*};`;

    // Create a regular expression using the constructed string
    const selectorRegex = new RegExp(selectorRegexString, "ism");

    // Replace the matched selector and its styles with an empty string
    updatedCSS = updatedCSS.replace(selectorRegex, "");
  });

  // Return the updated CSS with specified selectors removed
  return updatedCSS;
}
