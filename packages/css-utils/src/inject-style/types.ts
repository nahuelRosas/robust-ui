/**
 * Options for injecting CSS styles.
 */
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
  cssReset: string;
  isServer: boolean;
  pathname?: string;
};
