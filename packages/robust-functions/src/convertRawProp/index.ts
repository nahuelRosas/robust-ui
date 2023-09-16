export function convertRawProp({
  inputKey,
  keyword = "raw",
}: {
  inputKey: string;
  keyword?: string;
}): { prop: string; isKeywordPresent: boolean } {
  try {
    if (typeof inputKey !== "string" || inputKey.length === 0) {
      throw new Error("Invalid input key");
    }

    const isKeywordPresent = inputKey
      .toLowerCase()
      .includes(keyword.toLowerCase());

    const correctedProp = inputKey
      .split(/(?=[A-Z])/)
      .map((item) =>
        item.toLowerCase() === keyword.toLowerCase() ? "" : item.toLowerCase(),
      );

    const filtered = correctedProp.filter((item) => item !== "") as string[];

    if (filtered.length === 0) {
      throw new Error("No valid prop name found");
    }

    const prop = filtered.join("-");

    return { prop, isKeywordPresent };
  } catch (error: unknown) {
    if (error instanceof Error) {
      throw new Error(`Error converting input key: ${error.message}`);
    } else {
      throw new Error(`An unknown error occurred while converting input key.`);
    }
  }
}
