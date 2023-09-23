export function normalizeInputKey({
  inputKey,
  keyword = "raw",
  outputKey = "camelCase",
}: {
  inputKey: string;
  keyword?: string;
  outputKey?: "camelCase" | "snakeCase" | "kebabCase";
}) {
  try {
    if (typeof inputKey !== "string" || inputKey.length === 0) {
      throw new Error("Invalid input key");
    }
    const isKeywordPresent = inputKey
      .toLowerCase()
      .includes(keyword.toLowerCase());

    const normalizedPropName = inputKey
      .split(/(?=[-_A-Z])/)
      .map((item) =>
        item.toLowerCase() === keyword.toLowerCase()
          ? ""
          : item.toLowerCase().replace(/[-_]/g, ""),
      );

    const filteredPropName = normalizedPropName.filter(
      (item) => item !== "",
    ) as string[];

    if (filteredPropName.length === 0) {
      throw new Error("No valid prop name found");
    }

    if (outputKey === "camelCase") {
      return {
        isKeywordPresent,
        output: filteredPropName
          .map((item, index) =>
            index === 0 ? item : item[0].toUpperCase() + item.slice(1),
          )
          .join("") as string,
      };
    } else if (outputKey === "snakeCase") {
      return {
        isKeywordPresent,
        output: filteredPropName.join("_") as string,
      };
    } else {
      return {
        isKeywordPresent,
        output: filteredPropName.join("-") as string,
      };
    }
  } catch (error: unknown) {
    if (error instanceof Error) {
      throw new Error(`Error converting input key: ${error.message}`);
    } else {
      throw new Error(`An unknown error occurred while converting input key.`);
    }
  }
}
