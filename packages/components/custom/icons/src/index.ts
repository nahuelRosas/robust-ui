import { TIcons } from "./types";
export * from "./types";

export async function importIcon({ key }: { key: keyof TIcons }) {
  try {
    const icon = (await import(`./icons/index.js`)) as TIcons;
    return icon[key];
  } catch (e) {
    console.error(e);
    const { errorWarningFill } = (await import(`./icons/index.js`)) as TIcons;
    return errorWarningFill;
  }
}
