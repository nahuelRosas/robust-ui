import { StyledTextProps } from "@robust-ui/nested-styled-text";
import { Ticon, IconProps } from "@robust-ui/icon";
import { colors } from "@robust-ui/theme";
import {
  EnhancedElementProps,
  GenericPropertyArray,
  GenericProperty,
  EnhancedElementPropsNoGeneric,
} from "@robust-ui/constructor";

export interface CoverProps extends EnhancedElementProps<HTMLElement> {
  paragraph?: GenericProperty<string>;
  paragraphProps?: StyledTextProps;
  label?: GenericProperty<string>;
  labelProps?: StyledTextProps;
  icons?: GenericPropertyArray<
    | {
        color?: keyof typeof colors;
        colorRaw?: string;
        type: Ticon;
      }
    | Ticon
  >;
  iconProps?: IconProps;
}

export interface CoverPropsNoGeneric
  extends EnhancedElementPropsNoGeneric<HTMLElement> {
  label?: string;
  paragraph?: string;
  icons?:
    | {
        color?: keyof typeof colors;
        colorRaw?: string;
        type: Ticon;
      }[]
    | Ticon[];
}
