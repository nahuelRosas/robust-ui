/**
 * Normalizes the input key by removing the specified keyword and converting it to the desired output format.
 * Throws an error if the input key is invalid or no valid prop name is found.
 *
 * @param inputKey - The input key to be normalized.
 * @param keyword - The keyword to be removed from the input key. Default is "raw".
 * @param outputKey - The desired output format for the normalized key. Default is "camelCase".
 * @returns An object containing the information about whether the keyword is present in the input key and the normalized output key.
 * @throws Error if the input key is invalid or no valid prop name is found.
 */
export function normalizeInputKey({
  inputKey,
  keyword = "raw",
  outputKey = "camelCase",
}: {
  inputKey: string;
  keyword?: string;
  outputKey?: "camelCase" | "snakeCase" | "kebabCase";
}): { isKeywordPresent: boolean; output: string } {
  if (typeof inputKey !== "string" || !inputKey.length) {
    throw new Error("Invalid input key");
  }

  const lowerInputKey = inputKey.toLowerCase();
  const lowerKeyword = keyword.toLowerCase();
  const isKeywordPresent = lowerInputKey.includes(lowerKeyword);

  const normalizedPropName = inputKey
    .split(/(?=[-_A-Z])/)
    .reduce((acc, item) => {
      const normalizedItem = item.toLowerCase().replace(/[-_]/g, "");

      if (normalizedItem !== keyword.toLowerCase()) {
        acc.push(normalizedItem);
      }

      return acc;
    }, [] as string[]);

  if (normalizedPropName.length === 0) {
    throw new Error("No valid prop name found");
  }

  const output = normalizedPropName.reduce((acc, item, index) => {
    if (outputKey === "camelCase") {
      return (
        acc + (index === 0 ? item : item[0]?.toUpperCase() + item.slice(1))
      );
    } else if (outputKey === "snakeCase") {
      return acc + (index === 0 ? item : `_${item}`);
    } else {
      return acc + (index === 0 ? item : `-${item}`);
    }
  }, "") as string;

  return {
    isKeywordPresent,
    output,
  };
}
