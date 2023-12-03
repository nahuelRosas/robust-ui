import {
  EnhancedElementProps,
  EnhancedElementPropsNoGeneric,
  GenericProperty,
  GenericPropertyArray,
  Ticon,
  colors,
} from "@robust-ui/nextjs-components";
import { StyledTextProps } from "../nested-styled-text";
import { IconProps } from "../icon";

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
