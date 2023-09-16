import { BreakPoints } from "@robust-ui/theme";

type PartialRecord<T extends string, U> = Partial<Record<T, U>>;

export function completeBreakpoints({
  inputObject,
}: {
  inputObject: PartialRecord<keyof typeof BreakPoints, string> | string;
}): string | PartialRecord<keyof typeof BreakPoints, string> {
  try {
    const hasValidBreakpoints = Object.keys(inputObject).some((key) =>
      BreakPoints.hasOwnProperty(key),
    );

    if (!hasValidBreakpoints) {
      return inputObject;
    }

    const completedObject: PartialRecord<keyof typeof BreakPoints, string> = {};

    let lastValue: string = "";
    for (const breakpointKey of Object.keys(BreakPoints) as Array<
      keyof typeof BreakPoints
    >) {
      if (inputObject.hasOwnProperty(breakpointKey)) {
        lastValue = (
          inputObject as PartialRecord<keyof typeof BreakPoints, string>
        )[breakpointKey]!;
      }
      completedObject[breakpointKey] = lastValue;
    }

    return completedObject;
  } catch (error) {
    if (error instanceof TypeError) {
      throw new Error("TypeError: Invalid inputObject format");
    } else {
      throw error;
    }
  }
}
