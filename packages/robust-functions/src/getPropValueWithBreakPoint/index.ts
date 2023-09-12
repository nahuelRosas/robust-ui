import { BreakPoints } from "@robust-ui/theme";
import { getPropValueWithBreakpointProps } from "./types";

/**
 * Retrieves the property value with the specified breakpoint.
 *
 * @param propValue - The property value to retrieve.
 * @param breakPoint - The breakpoint value.
 * @returns The property value as a string or undefined.
 */
export function getPropValueWithBreakPoint({
  propValue,
  breakPoint,
}: getPropValueWithBreakpointProps) {
  try {
    if (typeof propValue === "undefined" || typeof breakPoint === "undefined") {
      throw new Error("The propValue and breakPoint arguments are required.");
    }
    const hasBreakpointsKey = Object.keys(propValue as object).some((key) =>
      BreakPoints.hasOwnProperty(key)
    );

    if (!hasBreakpointsKey) {
      if (typeof propValue === "string" || typeof propValue === "number") {
        return propValue.toString();
      } else {
        return propValue;
      }
    }
    // Check if the property value has a specific value for the specified breakpoint
    if (propValue[breakPoint as keyof typeof propValue]) {
      return propValue[breakPoint as keyof typeof propValue] as string;
    }
    // Iterate through the breakpoints in descending order and find the first value that matches the condition
    for (const e of Object.keys(BreakPoints)) {
      if (e <= breakPoint && propValue[e as keyof typeof propValue]) {
        return propValue[e as keyof typeof propValue] as string;
      }
      if (e > breakPoint) {
        return propValue[e as keyof typeof propValue] as string;
      }
    }
  } catch (error) {
    throw new Error(`${error} -- Location getPropValueWithBreakPoint`);
  }
}
