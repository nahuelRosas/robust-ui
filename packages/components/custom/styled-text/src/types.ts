import { colors, defaultTheme } from "@robust-ui/theme";
import {
  EnhancedPropsNoGeneric,
  PartialOrNestedPartialArray,
  EnhancedProps,
  PartialOrNestedPartial,
} from "@robust-ui/constructor";
export interface StyledTextProps extends EnhancedProps<HTMLDivElement> {
  fontWeights?: PartialOrNestedPartialArray<
    keyof typeof defaultTheme.fontWeight
  >;
  fontWeightsRaw?: PartialOrNestedPartialArray<string | number>;
  colors?: PartialOrNestedPartialArray<keyof typeof colors>;
  colorsRaw?: PartialOrNestedPartialArray<string>;
  randomColors?: PartialOrNestedPartial<boolean>;
  isActive?: PartialOrNestedPartial<boolean>;
  splitter?: PartialOrNestedPartial<string>;
}

export interface StyledTextPropsNoGeneric
  extends EnhancedPropsNoGeneric<HTMLDivElement> {
  fontWeights?: (keyof typeof defaultTheme.fontWeight)[];
  fontWeightsRaw?: (string | number)[];
  colors?: (keyof typeof colors)[];
  colorsRaw?: string[];
  randomColors?: boolean;
  isActive?: boolean;
  splitter?: string;
}
