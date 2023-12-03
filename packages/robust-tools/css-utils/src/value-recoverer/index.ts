export function ValueRecoverer({
  inputProp,
  inputValue,
  breakPoints,
  currentGlobalLanguage,
  darkMode,
  theme,
  isRaw,
}: {
  inputProp: string;
  inputValue: unknown;
  currentGlobalLanguage?: string;
  breakPoints: {
    current: string;
    context: Record<string, unknown>;
  };
  darkMode: boolean;
  isRaw?: boolean;
  theme: Record<
    string,
    {
      [key: string | number]: unknown;
    }
  >;
}): unknown | undefined {
  const darkModeKey = darkMode ? "dark" : "light";
  const currentBreakpoint = breakPoints.current;
  const glossary = theme[inputProp as keyof typeof theme] || {};

  if (!inputValue || inputProp === "children") return inputValue as unknown;

  if (typeof inputValue !== "object" && !Array.isArray(inputValue)) {
    const attrValue = inputValue[inputValue as keyof typeof inputValue];
    const main = glossary[attrValue as keyof typeof glossary];
    const alt = glossary[inputValue as keyof typeof glossary];
    if (isRaw && (main || alt)) {
      return main || alt;
    }
    return main || alt || inputValue;
  }

  const hasValidBreakpoints = Object.keys(inputValue).some((attrKey) =>
    breakPoints.context.hasOwnProperty(attrKey)
  );
  const hasValidDarkMode = ["dark", "light"].some((key) =>
    inputValue.hasOwnProperty(key)
  );
  const hasValidLanguage =
    currentGlobalLanguage && inputValue.hasOwnProperty(currentGlobalLanguage);

  if (!hasValidBreakpoints && !hasValidDarkMode && !hasValidLanguage) {
    if (typeof inputValue === "object" && !Array.isArray(inputValue)) {
      return Object.entries(inputValue).reduce(
        (acc: Record<string, unknown>, [key, value]) => {
          if (
            typeof value === "object" &&
            !Array.isArray(value) &&
            !key.includes("_") &&
            !key.includes("type")
          ) {
            acc[key] = ValueRecoverer({
              inputProp: key,
              inputValue: value,
              breakPoints,
              currentGlobalLanguage,
              darkMode,
              theme,
            });
          } else {
            acc[key] = value;
          }
          return acc;
        },
        {}
      );
    } else if (Array.isArray(inputValue) && inputProp !== "children") {
      return inputValue.map((item) => {
        if (typeof item === "object" && !Array.isArray(item)) {
          return ValueRecoverer({
            inputProp,
            inputValue: item,
            breakPoints,
            currentGlobalLanguage,
            darkMode,
            theme,
          });
        }
        return item;
      });
    }
    return inputValue;
  }

  const partialValue = hasValidBreakpoints
    ? inputValue[currentBreakpoint as keyof typeof inputValue]
    : undefined;
  const attrValue = hasValidBreakpoints
    ? partialValue
    : hasValidDarkMode
      ? inputValue[darkModeKey as keyof typeof inputValue]
      : hasValidLanguage
        ? inputValue[currentGlobalLanguage as keyof typeof inputValue]
        : undefined;

  if (typeof attrValue === "object" && !Array.isArray(attrValue)) {
    const result = ValueRecoverer({
      inputProp,
      inputValue: attrValue,
      breakPoints,
      currentGlobalLanguage,
      darkMode,
      theme,
    });
    if (isRaw && (result || attrValue)) {
      return result || attrValue;
    }
    return (
      glossary[result as keyof typeof glossary] ||
      glossary[attrValue as keyof typeof glossary] ||
      result ||
      attrValue
    );
  } else {
    return attrValue;
  }
}
