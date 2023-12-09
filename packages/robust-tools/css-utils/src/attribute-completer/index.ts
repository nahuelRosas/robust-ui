export type PartialRecord<T extends string, U> = Partial<Record<T, U>>;

export function attributeCompleter({
  inputAttributes,
  mediaBreakpoints,
}: {
  inputAttributes: Record<string, unknown>;
  mediaBreakpoints: Record<string, number>;
}) {
  try {
    if (
      !inputAttributes ||
      typeof inputAttributes !== "object" ||
      Array.isArray(inputAttributes)
    ) {
      throw new Error("Missing required arguments");
    }

    const completedAttributes: PartialRecord<
      keyof typeof mediaBreakpoints,
      unknown
    > = {};

    for (const [key, value] of Object.entries(inputAttributes)) {
      if (!key || !value) {
        continue;
      }

      if (value && typeof value === "object" && !Array.isArray(value)) {
        const hasValidBreakpoints = Object.keys(value).some((attrKey) =>
          mediaBreakpoints.hasOwnProperty(attrKey),
        );
        const hasValidDarkMode = ["dark", "light"].some((darkModeKey) =>
          value.hasOwnProperty(darkModeKey),
        );

        if (hasValidBreakpoints && hasValidDarkMode) {
          throw new Error(
            `Invalid inputAttributes format: Cannot have both breakpoints and dark mode in the same object: ${JSON.stringify(
              key,
            )} - ${JSON.stringify(value)}`,
          );
        }

        if (hasValidBreakpoints) {
          const breakpointsCompleted: PartialRecord<
            keyof typeof mediaBreakpoints,
            unknown
          > = {};
          let lastValue: unknown = undefined;

          for (const breakpointKey of Object.keys(mediaBreakpoints) as Array<
            keyof typeof mediaBreakpoints
          >) {
            if (value.hasOwnProperty(breakpointKey)) {
              const attrValue = value[breakpointKey as keyof typeof value];
              if (typeof attrValue === "object" && !Array.isArray(attrValue)) {
                const partialValue = attributeCompleter({
                  inputAttributes: { [key]: attrValue },
                  mediaBreakpoints,
                });
                lastValue = partialValue ? partialValue[key] : undefined;
              } else {
                lastValue = (
                  value as PartialRecord<keyof typeof mediaBreakpoints, unknown>
                )[breakpointKey];
              }
            }
            breakpointsCompleted[breakpointKey] = lastValue;
          }
          completedAttributes[key] = breakpointsCompleted;
        } else if (hasValidDarkMode) {
          const darkModeCompleted: PartialRecord<"dark" | "light", unknown> =
            {};
          let lastValue: unknown = undefined;

          for (const darkModeKey of ["dark", "light"] as const) {
            if (value.hasOwnProperty(darkModeKey)) {
              const attrValue = value[darkModeKey as keyof typeof value];
              if (typeof attrValue === "object" && !Array.isArray(attrValue)) {
                const partialValue = attributeCompleter({
                  inputAttributes: { [key]: attrValue },
                  mediaBreakpoints,
                });
                lastValue = partialValue ? partialValue[key] : undefined;
              } else {
                lastValue = (value as PartialRecord<"dark" | "light", unknown>)[
                  darkModeKey
                ]!;
              }
              darkModeCompleted[darkModeKey] = lastValue;
            }
            darkModeCompleted[darkModeKey] = lastValue;
          }
          completedAttributes[key] = darkModeCompleted;
        } else {
          const preValue: PartialRecord<
            keyof typeof mediaBreakpoints,
            unknown
          > = {};

          for (const [_key, _value] of Object.entries(
            value as Record<string, unknown>,
          )) {
            if (
              _value &&
              typeof _value === "object" &&
              !Array.isArray(_value)
            ) {
              const partialValue = attributeCompleter({
                inputAttributes: { [key]: _value },
                mediaBreakpoints,
              });
              preValue[_key] = partialValue ? partialValue[key] : undefined;
            } else {
              preValue[_key] = _value;
            }
          }

          completedAttributes[key] = preValue;
        }
      } else {
        completedAttributes[key] = value;
      }
    }

    return completedAttributes;
  } catch (error) {
    if (error instanceof Error) {
      throw new Error(`[completeAttributes] - ${error.message}`);
    }
  }
}
