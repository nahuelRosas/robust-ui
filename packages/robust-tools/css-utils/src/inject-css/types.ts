export type InjectCSSTOptions = {
  inputProps: Record<string, unknown>;
  classNameSelector: string;
  breakPoints: {
    current: string;
    context: Record<string, unknown>;
  };
  darkMode: boolean;
  commands: Record<string, unknown>;
  theme: Record<
    string,
    {
      [key: string | number]: unknown;
    }
  >;
  partialComputedStyles?:
    | {
        [x: string]:
          | {
              styledCSSMap: Map<string, string[]>;
              inputProps: Record<string, unknown>;
            }
          | undefined;
      }
    | undefined;
  cssReset: string;
};
