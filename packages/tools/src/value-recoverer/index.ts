import { isNullOrUndefined } from "@/validation-input";

/**
 * Recovers the value based on the provided input properties and values.
 *
 * @param inputProp - The input property.
 * @param inputValue - The input value.
 * @param breakPoints - The breakpoints.
 * @param currentGlobalLanguage - The current global language.
 * @param darkMode - A boolean indicating whether dark mode is enabled.
 * @param theme - The theme.
 * @param isRaw - A boolean indicating whether the value is raw.
 * @returns The recovered value.
 */
export function valueRecoverer({
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

  if (isNullOrUndefined(inputValue) || inputProp === "children")
    return inputValue as unknown;

  const inputValueChecked = inputValue as
    | string
    | number
    | boolean
    | Record<string, unknown>
    | unknown[];

  if (
    typeof inputValueChecked === "string" ||
    typeof inputValueChecked === "number" ||
    typeof inputValueChecked === "boolean"
  ) {
    return processSingleValue({ value: inputValueChecked, glossary, isRaw });
  }

  const hasValidBreakpoints = Object.keys(inputValueChecked).some((attrKey) =>
    Object.prototype.hasOwnProperty.call(breakPoints.context, attrKey),
  );
  const hasValidDarkMode = ["dark", "light"].some((key) =>
    Object.prototype.hasOwnProperty.call(inputValueChecked, key),
  );
  const hasValidLanguage =
    currentGlobalLanguage &&
    Object.prototype.hasOwnProperty.call(
      inputValueChecked,
      currentGlobalLanguage,
    );

  if (!hasValidBreakpoints && !hasValidDarkMode && !hasValidLanguage) {
    if (
      typeof inputValueChecked === "object" &&
      !Array.isArray(inputValueChecked)
    ) {
      return processObjectValues({
        inputValue: inputValueChecked,
        breakPoints,
        currentGlobalLanguage,
        darkMode,
        theme,
      });
    } else if (Array.isArray(inputValueChecked)) {
      return processArrayValues({
        inputValue: inputValueChecked,
        breakPoints,
        currentGlobalLanguage,
        darkMode,
        theme,
      });
    }
    return inputValueChecked;
  }

  const partialValueWithBreakPoint = hasValidBreakpoints
    ? inputValueChecked[currentBreakpoint as keyof typeof inputValueChecked]
    : undefined;

  const partialValueWithDarkMode = hasValidDarkMode
    ? inputValueChecked[darkModeKey as keyof typeof inputValueChecked]
    : undefined;

  const partialValueWithLanguage =
    hasValidLanguage && currentGlobalLanguage
      ? inputValueChecked[
          currentGlobalLanguage as keyof typeof inputValueChecked
        ]
      : undefined;

  const attrValue =
    partialValueWithBreakPoint ||
    partialValueWithDarkMode ||
    partialValueWithLanguage;

  return processSingleValue({ value: attrValue, glossary, isRaw });
}

/**
 * Processes a single value using a glossary to recover its corresponding value.
 * If the value is marked as raw, it is returned as is.
 * If the value is found in the glossary, the corresponding value is returned.
 * If the value is not found in the glossary, the original value is returned.
 *
 * @param value - The value to be processed.
 * @param glossary - The glossary containing the mappings of values.
 * @param isRaw - Optional flag indicating if the value should be returned as is.
 * @returns The processed value.
 */
function processSingleValue({
  value,
  glossary,
  isRaw,
}: {
  value: unknown;
  glossary: Record<string, unknown>;
  isRaw?: boolean;
}): unknown {
  if (isRaw && value) {
    return value;
  }

  return glossary[value as unknown as keyof typeof glossary] || value;
}

/**
 * Processes the values of an input object and returns a new object with the processed values.
 *
 * @param inputValue - The input object whose values need to be processed.
 * @param breakPoints - The breakpoints object containing current and context values.
 * @param currentGlobalLanguage - The current global language (optional).
 * @param darkMode - The dark mode flag (optional).
 * @param theme - The theme object (optional).
 * @returns A new object with the processed values.
 */
function processObjectValues({
  inputValue,
  breakPoints,
  currentGlobalLanguage,
  darkMode,
  theme,
}: {
  inputValue: object;
  breakPoints: { current: string; context: Record<string, unknown> };
  currentGlobalLanguage?: string;
  darkMode?: boolean;
  theme?: Record<string, { [key: string | number]: unknown }>;
}): Record<string, unknown> {
  const acc = Object.entries(inputValue).reduce(
    (acc: Record<string, unknown>, [key, value]) => {
      if (isNullOrUndefined(key) || isNullOrUndefined(value)) return acc;
      else if (key === "children") acc[key] = value;
      acc[key] = valueRecoverer({
        inputProp: key,
        inputValue: value,
        breakPoints,
        currentGlobalLanguage,
        darkMode: darkMode || false,
        theme: theme || {},
      });

      return acc;
    },
    {},
  );
  return acc;
}

/**
 * Processes an array of values and applies value recovery to each item.
 *
 * @param inputValue - The array of values to be processed.
 * @param breakPoints - The breakpoints and context information.
 * @param currentGlobalLanguage - The current global language (optional).
 * @param darkMode - Indicates if dark mode is enabled (optional).
 * @param theme - The theme configuration (optional).
 * @returns The processed array of values.
 */
function processArrayValues({
  inputValue,
  breakPoints,
  currentGlobalLanguage,
  darkMode,
  theme,
}: {
  inputValue: unknown[];
  breakPoints: { current: string; context: Record<string, unknown> };
  currentGlobalLanguage?: string;
  darkMode?: boolean;
  theme?: Record<string, { [key: string | number]: unknown }>;
}): unknown[] {
  return inputValue.map((item) => {
    if (typeof item === "string" || typeof item === "number") {
      return item;
    } else if (typeof item === "object" || Array.isArray(item)) {
      return valueRecoverer({
        inputProp: "",
        inputValue: item,
        breakPoints,
        currentGlobalLanguage,
        darkMode: darkMode || false,
        theme: theme || {},
      });
    }
    return item;
  });
}
