import { sizes } from "@robust-ui/theme";
import { Ticons } from "@robust-ui/icons";
export * from "@robust-ui/icons";
import {
  EnhancedPropsNoGeneric,
  PartialOrNestedPartial,
  EnhancedProps,
} from "@robust-ui/constructor";

export interface IconProps extends EnhancedProps<SVGElement> {
  focusable?: PartialOrNestedPartial<boolean>;
  viewBox?: PartialOrNestedPartial<string>;
  sizeRaw?: PartialOrNestedPartial<string>;
  iconType?: PartialOrNestedPartial<Ticon>;
  size?: PartialOrNestedPartial<Tsize>;
}

export interface IconPropsNoGeneric extends EnhancedPropsNoGeneric<SVGElement> {
  focusable?: boolean;
  sizeRaw?: string;
  viewBox?: string;
  iconType?: Ticon;
  size?: Tsize;
}

export type Ticon = PartialOrNestedPartial<Ticons>;
export type Tsize = PartialOrNestedPartial<keyof typeof sizes>;
