import { TIcons } from "./types";
export * from "./types";

/**
 * Imports an icon from the icons module based on the provided key.
 * If the import fails, it falls back to the errorWarningFill icon.
 * @param key - The key of the icon to import.
 * @returns The imported icon.
 */
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
