import { StyledTextProps } from "@robust-ui/styled-text";
import { TIcons, IconProps } from "@robust-ui/icon";
import { colors } from "@robust-ui/theme";
import {
  EnhancedPropsNoGeneric,
  PartialOrNestedPartial,
  PartialOrNestedPartialArray,
  EnhancedProps,
} from "@robust-ui/constructor";

export interface CoverProps extends EnhancedProps<HTMLElement> {
  paragraph?: PartialOrNestedPartial<string>;
  paragraphProps?: StyledTextProps;
  label?: PartialOrNestedPartial<string>;
  labelProps?: StyledTextProps;
  icons?: PartialOrNestedPartialArray<
    | {
        color?: keyof typeof colors;
        colorRaw?: string;
        type: keyof TIcons;
      }
    | keyof TIcons
  >;
  iconProps?: IconProps;
}

export interface CoverPropsNoGeneric
  extends EnhancedPropsNoGeneric<HTMLElement> {
  label?: string;
  paragraph?: string;
  icons?:
    | {
        color?: keyof typeof colors;
        colorRaw?: string;
        type: keyof TIcons;
      }[]
    | (keyof TIcons)[];
}
