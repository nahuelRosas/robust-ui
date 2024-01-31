import { sizes } from "@robust-ui/theme";
import { TIcons } from "@robust-ui/icons";
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
  iconType?: PartialOrNestedPartial<keyof TIcons>;
  size?: PartialOrNestedPartial<keyof typeof sizes>;
}

export interface IconPropsNoGeneric extends EnhancedPropsNoGeneric<SVGElement> {
  focusable?: boolean;
  sizeRaw?: string;
  viewBox?: string;
  iconType?: keyof TIcons;
  size?: keyof typeof sizes;
}
