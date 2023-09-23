import { EnhancedElementProps, GenericProperty } from "@robust-ui/constructor";
import { sizes } from "@robust-ui/theme";
import { Ticons } from "@robust-ui/icons";
export * from "@robust-ui/icons";

export interface IconProps extends EnhancedElementProps<HTMLOrSVGElement> {
  focusable?: boolean;
  viewBox?: string;
  icon?: Ticon;
  size?: Tsize;
  sizeRaw?: GenericProperty<string>;
  strokeLinecap?: "butt" | "round" | "square" | "inherit";
  strokeLinejoin?: "miter" | "round" | "bevel" | "inherit";
  strokeWidth?: string;
  fill?: string;
  xmlns?: string;
  stroke?: string;
}

export type Ticon = GenericProperty<Ticons>;
export type Tsize = GenericProperty<keyof typeof sizes>;

export type ForwardRefExoticIcon = Omit<IconProps, "ref"> &
  React.RefAttributes<unknown> &
  IconProps;
