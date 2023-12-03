import {
  EnhancedElementPropsNoGeneric,
  EnhancedElementProps,
  GenericProperty,
} from "@robust-ui/constructor";
import { sizes } from "@robust-ui/theme";
import { Ticons } from "@robust-ui/icons";
export * from "@robust-ui/icons";

export interface IconProps extends EnhancedElementProps<SVGElement> {
  focusable?: GenericProperty<boolean>;
  viewBox?: GenericProperty<string>;
  sizeRaw?: GenericProperty<string>;
  iconType?: GenericProperty<Ticon>;
  size?: GenericProperty<Tsize>;
}

export interface IconPropsNoGeneric
  extends EnhancedElementPropsNoGeneric<SVGElement> {
  focusable?: boolean;
  sizeRaw?: string;
  viewBox?: string;
  iconType?: Ticon;
  size?: Tsize;
}

export type Ticon = GenericProperty<Ticons>;
export type Tsize = GenericProperty<keyof typeof sizes>;
