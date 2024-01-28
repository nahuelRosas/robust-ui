import { normalizeInputKey } from "@/normalize-input-key";

interface IpropsSplitterProps {
  props: Record<string, unknown>;
  commands?: Record<string, unknown>;
}

/**
 * Splits the props object into htmlProps and styleProps based on the provided commands.
 *
 * @param props - The props object to be split.
 * @param commands - The commands object used to determine which props should be considered as styleProps.
 * @returns An object containing the htmlProps and styleProps.
 */
export function propsSplitter({ props, commands }: IpropsSplitterProps): {
  htmlProps: Record<string, unknown>;
  styleProps: Record<string, unknown>;
} {
  if (!props) return { htmlProps: {}, styleProps: {} };
  if (!commands) throw new Error("commands is required");

  return Object.entries(props).reduce(
    (acc, [key, value]) => {
      const { isKeywordPresent: raw, output: rawOutput } = normalizeInputKey({
        inputKey: key,
        keyword: "raw",
      });

      const { isKeywordPresent: html, output: rawHtml } = normalizeInputKey({
        inputKey: key,
        keyword: "html",
      });

      const styleKey = rawOutput || key;
      const htmlKey = html && rawHtml ? rawHtml : key;

      if (raw || (commands && (commands[key] || commands[styleKey]))) {
        acc.styleProps[styleKey] = value;
      } else if (key === "htmlFor") {
        acc.htmlProps.htmlFor = value;
      } else {
        acc.htmlProps[htmlKey] = value;
      }

      return acc;
    },
    { htmlProps: {}, styleProps: {} } as {
      htmlProps: Record<string, unknown>;
      styleProps: Record<string, unknown>;
    },
  );
}
