import {
  EnhancedElementPropsNoGeneric,
  EnhancedElementProps,
  GenericProperty,
} from "@robust-ui/constructor";
import { sizes } from "@robust-ui/theme";
import { Ticons } from "@robust-ui/icons";
export * from "@robust-ui/icons";

export interface IconProps extends EnhancedElementProps<HTMLOrSVGElement> {
  focusable?: GenericProperty<boolean>;
  viewBox?: GenericProperty<string>;
  icon?: GenericProperty<Ticon>;
  size?: GenericProperty<Tsize>;
  sizeRaw?: GenericProperty<string>;
  strokeLinecap?: GenericProperty<"butt" | "round" | "square" | "inherit">;
  strokeLinejoin?: GenericProperty<"miter" | "round" | "bevel" | "inherit">;
  strokeWidth?: GenericProperty<string>;
  fill?: GenericProperty<string>;
  xmlns?: GenericProperty<string>;
  stroke?: GenericProperty<string>;
}

export interface IconPropsNoGeneric
  extends EnhancedElementPropsNoGeneric<HTMLOrSVGElement> {
  focusable?: boolean;
  viewBox?: string;
  icon?: Ticon;
  size?: Tsize;
  sizeRaw?: string;
  strokeLinecap?: "butt" | "round" | "square" | "inherit";
  strokeLinejoin?: "miter" | "round" | "bevel" | "inherit";
  strokeWidth?: string;
  fill?: string;
  xmlns?: string;
  stroke?: string;
}

export type Ticon = GenericProperty<Ticons>;
export type Tsize = GenericProperty<keyof typeof sizes>;
