import { BaseProps, ConstructorProps } from "@/types";
import { icons } from "./icons";
import { defaultTheme } from "@robust-ui/theme";

export type IconType = keyof typeof icons;

export interface IconProps extends BaseProps {
  focusable?: boolean;
  viewBox?: string;
  unit?: string;
  type?: IconType;
  typeRaw?: string;
  size?:
    | keyof typeof defaultTheme.sizes
    | ConstructorProps<keyof typeof defaultTheme.sizes>;
}
