import { EnhancedElementProps } from "@robust-ui/constructor";

export interface ProviderProps extends EnhancedElementProps<HTMLElement> {
  children: React.ReactNode;
  mediaBreakpointsCustom?: Record<string, number>;
  commandsCustom?: Record<string, Function>;
  cssResetCustom?: string;
  notificationPlacement?:
    | "topRight"
    | "topLeft"
    | "bottomRight"
    | "bottomLeft"
    | "top"
    | "bottom";
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
