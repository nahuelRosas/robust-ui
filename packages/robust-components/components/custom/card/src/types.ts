import { StyledTextProps } from "@robust-ui/nested-styled-text";
import { NextLinkProps } from "@robust-ui/next-link";
import { ImageProps } from "@robust-ui/image";
import { FlexProps } from "@robust-ui/flex";
import { colors } from "@robust-ui/theme";
import {
  EnhancedElementPropsNoGeneric,
  EnhancedElementProps,
  GenericPropertyArray,
  GenericProperty,
} from "@robust-ui/constructor";

export interface CardProps
  extends EnhancedElementProps<HTMLSpanElement | HTMLParagraphElement> {
  colorScheme?: GenericProperty<keyof typeof colors>;
  opacityColorScheme?: GenericProperty<number>;
  colorSchemeRaw?: GenericProperty<string>;
  altColor?: GenericProperty<boolean>;
  header?: GenericProperty<{
    propsHeader?: StyledTextProps | NextLinkProps;
    title: GenericProperty<string>;
    url?: string;
  }>;
  label?: GenericProperty<{
    title: GenericProperty<string>;
    propsLabel?: StyledTextProps;
  }>;
  text?: GenericProperty<{
    text: GenericProperty<string>;
    propsText?: StyledTextProps;
  }>;
  data?: GenericPropertyArray<{
    images?: GenericProperty<string[]>;
    title: GenericProperty<string>;
    text?: GenericProperty<string>;
    href?: GenericProperty<string>;
    propsTitle?: StyledTextProps;
    propsText?: StyledTextProps;
    propsImage?: ImageProps;
    propsData?: FlexProps;
  }>;
}
export interface CardPropsNoGeneric
  extends EnhancedElementPropsNoGeneric<
    HTMLSpanElement | HTMLParagraphElement
  > {
  colorScheme?: keyof typeof colors;
  opacityColorScheme?: number;
  colorSchemeRaw?: string;
  altColor?: boolean;
  header?: {
    propsHeader?: StyledTextProps | NextLinkProps;
    title: string;
    url?: string;
  };
  label?: {
    propsLabel?: StyledTextProps;
    title: string;
  };
  text?: {
    propsText?: StyledTextProps;
    text: string;
  };
  data?: {
    propsTitle?: StyledTextProps;
    propsText?: StyledTextProps;
    propsImage?: ImageProps;
    propsData?: FlexProps;
    images?: string[];
    title: string;
    text?: string;
    href?: string;
  }[];
}
