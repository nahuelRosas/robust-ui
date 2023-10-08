export function ValueRecoverer({
  inputProp,
  inputValue,
  breakPoints,
  darkMode,
  theme,
  isRaw,
}: {
  inputProp: string;
  inputValue: unknown;
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
}) {
  if (!inputValue) return inputValue as unknown;

  const glossary = theme[inputProp as keyof typeof theme]
    ? theme[inputProp as keyof typeof theme]
    : {};

  if (typeof inputValue !== "object" && !Array.isArray(inputValue)) {
    const attrValue = inputValue[inputValue as keyof typeof inputValue];
    const main = glossary[attrValue as keyof typeof glossary];
    const alt = glossary[inputValue as keyof typeof glossary];
    if (isRaw && (main || alt)) {
      return main || alt;
    }
    return main || alt || inputValue;
  }

  const darkModeKey = darkMode ? "dark" : "light";
  const hasValidBreakpoints = Object.keys(inputValue).some((attrKey) =>
    breakPoints.context.hasOwnProperty(attrKey),
  );
  const hasValidDarkMode = ["dark", "light"].some((darkModeKey) =>
    inputValue.hasOwnProperty(darkModeKey),
  );
  if (!hasValidBreakpoints && !hasValidDarkMode) return inputValue;

  if (hasValidBreakpoints) {
    let partialValue: unknown = undefined;
    const attrValue =
      inputValue[breakPoints.current as keyof typeof inputValue];
    if (typeof attrValue === "object" && !Array.isArray(attrValue)) {
      partialValue = ValueRecoverer({
        inputProp,
        inputValue: attrValue,
        breakPoints,
        darkMode,
        theme,
      });
    }
    if (isRaw && (partialValue || attrValue)) {
      return partialValue || attrValue;
    }
    const main = glossary[partialValue as keyof typeof glossary];
    const alt = glossary[attrValue as keyof typeof glossary];

    let result = main || alt || partialValue || attrValue;
    return result;
  } else if (hasValidDarkMode) {
    let partialValue: unknown = undefined;
    const attrValue = inputValue[darkModeKey as keyof typeof inputValue];

    if (typeof attrValue === "object" && !Array.isArray(attrValue)) {
      partialValue = ValueRecoverer({
        inputProp,
        inputValue: attrValue,
        breakPoints,
        darkMode,
        theme,
      });
    }
    if (isRaw && (partialValue || attrValue)) {
      return partialValue || attrValue;
    }
    const main = glossary[partialValue as keyof typeof glossary];
    const alt = glossary[attrValue as keyof typeof glossary];
    let result = main || alt || partialValue || attrValue;
    if (typeof result === "boolean") {
      return Boolean(result);
    }
    return result;
  }
}
