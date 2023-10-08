import { EnhancedElementProps } from "@robust-ui/constructor";

export interface ProviderProps extends EnhancedElementProps<HTMLDivElement> {
  children: React.ReactNode;
  mediaBreakpointsCustom?: Record<string, number>;
  commandsCustom?: Record<string, Function>;
  cssResetCustom?: string;
  themeCustom?: Record<
    string,
    {
      [key: string | number]: string | number | boolean;
    }
  >;
  scrollBarColorCustom?: {
    thumb: string;
    track: string;
  };
}
export type ForwardRefExoticProvider = Omit<ProviderProps, "ref"> &
  React.RefAttributes<unknown> &
  ProviderProps;
