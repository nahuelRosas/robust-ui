import { colors } from "@robust-ui/theme";
import {
  EnhancedElementProps,
  GenericProperty,
  GenericPropertyArray,
} from "@robust-ui/constructor";
import { Ticon, IconProps } from "@robust-ui/icon";
import { StyledTextProps } from "@robust-ui/nested-styled-text";

export interface CoverProps extends EnhancedElementProps<HTMLElement> {
  heading?: GenericProperty<{
    [key: string]: string;
  }>;
  subHeading?: GenericProperty<{ [key: string]: string }>;
  icons?: GenericPropertyArray<{
    color: keyof typeof colors;
    type: Ticon;
  }>;
  headingProps?: StyledTextProps;
  subHeadingProps?: StyledTextProps;
  iconProps?: IconProps;
}

export interface CoverPropsNoGeneric extends EnhancedElementProps<HTMLElement> {
  heading?: { [key: string]: string };
  subHeading?: { [key: string]: string };
  icons?: Array<{
    color: keyof typeof colors;
    type: Ticon;
  }>;
  headingProps?: StyledTextProps;
  subHeadingProps?: StyledTextProps;
  iconProps?: IconProps;
}

export type ForwardRefExoticCover = Omit<CoverProps, "ref"> &
  React.RefAttributes<unknown> &
  CoverProps;
