import {
  EnhancedElementProps,
  Ticons,
  sizes,
  EnhancedElementPropsNoGeneric,
  GenericProperty,
} from "@robust-ui/nextjs-components";

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
