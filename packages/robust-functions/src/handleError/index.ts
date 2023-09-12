import { getLocation } from "../getLocation";

export function handleError({
  message,
  location,
}: {
  message: string;
  location?: string | { message: string; location: string };
}) {
  if (location === undefined) {
    location = getLocation();
  }

  if (typeof location === "object") {
    throw new Error(`${message}\n${location.message}\n${location.location}`);
  }

  throw new Error(`${message}\n${location}`);
}
