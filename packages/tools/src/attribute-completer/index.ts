export type PartialRecord<T extends string, U> = Partial<Record<T, U>>;

/**
 * Completes the attributes based on the provided input attributes and media breakpoints.
 *
 * @param inputAttributes - The input attributes to be completed.
 * @param mediaBreakpoints - The media breakpoints used for attribute completion.
 * @returns The completed attributes or undefined if there are missing required arguments.
 * @throws Error if the inputAttributes format is invalid.
 */
export function attributeCompleter({
  inputAttributes,
  mediaBreakpoints,
}: {
  inputAttributes: Record<string, unknown>;
  mediaBreakpoints: Record<string, number>;
}): Partial<Record<string, unknown>> | undefined {
  try {
    if (
      !inputAttributes ||
      typeof inputAttributes !== "object" ||
      Array.isArray(inputAttributes)
    ) {
      throw new Error("Missing required arguments");
    }

    return Object.entries(inputAttributes).reduce(
      (completedAttributes, [key, value]) => {
        if (!key || !value) {
          return completedAttributes;
        }
        if (value && typeof value === "object" && !Array.isArray(value)) {
          const hasValidBreakpoints = Object.keys(value).some((attrKey) =>
            Object.prototype.hasOwnProperty.call(mediaBreakpoints, attrKey),
          );
          const hasValidDarkMode = ["dark", "light"].some((darkModeKey) =>
            Object.prototype.hasOwnProperty.call(value, darkModeKey),
          );

          if (hasValidBreakpoints && hasValidDarkMode) {
            throw new Error(
              `Invalid inputAttributes format: Cannot have both breakpoints and dark mode in the same object: ${JSON.stringify(
                key,
              )} - ${JSON.stringify(value)}`,
            );
          }

          if (hasValidBreakpoints) {
            let lastValue: unknown = undefined;
            completedAttributes[key] = Object.keys(mediaBreakpoints).reduce(
              (breakpointsCompleted, breakpointKey) => {
                if (
                  Object.prototype.hasOwnProperty.call(value, breakpointKey)
                ) {
                  const attrValue = value[breakpointKey as keyof typeof value];
                  if (
                    typeof attrValue === "object" &&
                    !Array.isArray(attrValue)
                  ) {
                    const partialValue = attributeCompleter({
                      inputAttributes: { [key]: attrValue },
                      mediaBreakpoints,
                    });
                    lastValue = partialValue ? partialValue[key] : undefined;
                  } else {
                    lastValue = (
                      value as PartialRecord<
                        keyof typeof mediaBreakpoints,
                        unknown
                      >
                    )[breakpointKey];
                  }
                }
                breakpointsCompleted[breakpointKey] = lastValue;
                return breakpointsCompleted;
              },
              {} as PartialRecord<keyof typeof mediaBreakpoints, unknown>,
            );
          } else if (hasValidDarkMode) {
            completedAttributes[key] = ["dark", "light"].reduce(
              (darkModeCompleted, darkModeKey) => {
                if (Object.prototype.hasOwnProperty.call(value, darkModeKey)) {
                  const attrValue = value[darkModeKey as keyof typeof value];
                  const partialValue =
                    typeof attrValue === "object" && !Array.isArray(attrValue)
                      ? attributeCompleter({
                          inputAttributes: { [key]: attrValue },
                          mediaBreakpoints,
                        })?.[key]
                      : value[darkModeKey as keyof typeof value]!;
                  darkModeCompleted[
                    darkModeKey as keyof typeof darkModeCompleted
                  ] = partialValue;
                }
                return darkModeCompleted;
              },
              {} as PartialRecord<"dark" | "light", unknown>,
            );
          } else {
            const preValue: PartialRecord<
              keyof typeof mediaBreakpoints,
              unknown
            > = {};

            for (const [_key, _value] of Object.entries(
              value as Record<string, unknown>,
            )) {
              const partialValue =
                _value && typeof _value === "object" && !Array.isArray(_value)
                  ? attributeCompleter({
                      inputAttributes: { [key]: _value },
                      mediaBreakpoints,
                    })?.[key]
                  : _value;

              preValue[_key] = partialValue;
            }

            completedAttributes[key] = preValue;
          }
        } else {
          completedAttributes[key] = value;
        }
        return completedAttributes;
      },
      {} as PartialRecord<keyof typeof mediaBreakpoints, unknown>,
    );
  } catch (error) {
    if (error instanceof Error) {
      throw new Error(`[completeAttributes] - ${error.message}`);
    }
  }
}
