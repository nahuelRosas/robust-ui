import { normalizeInputKey } from "@/normalize-input-key";
import { IpropsSplitterProps } from "./types";

export function propsSplitter({ props, commands }: IpropsSplitterProps) {
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

      if (raw || (commands && (commands[key] || commands[rawOutput]))) {
        return {
          ...acc,
          styleProps: {
            ...acc.styleProps,
            [rawOutput || key]: value,
          },
        };
      } else if (html && rawHtml) {
        return {
          ...acc,
          htmlProps: {
            ...acc.htmlProps,
            [rawHtml]: value,
          },
        };
      } else {
        return {
          ...acc,
          htmlProps: {
            ...acc.htmlProps,
            [key]: value,
          },
        };
      }
    },
    {
      htmlProps: {},
      styleProps: {},
    }
  );
}
