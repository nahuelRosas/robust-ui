import {
  EnhancedElementPropsNoGeneric,
  EnhancedElementProps,
  GenericPropertyArray,
  GenericProperty,
} from "@robust-ui/constructor";
import { colors } from "@robust-ui/theme";
import { ButtonProps } from "@robust-ui/button";
import { StyledTextProps } from "@robust-ui/nested-styled-text";
import { NextLinkProps } from "@robust-ui/next-link";
import { ImageProps } from "@robust-ui/image";
import { FlexProps } from "@robust-ui/flex";

export type OverlayLoadEvent = React.SyntheticEvent<HTMLDivElement, Event>;

export interface OverlayProps extends EnhancedElementProps<HTMLDivElement> {
  variant?: GenericProperty<"ghost" | "solid" | "outline" | "link">;
  iconCloseProps?: GenericProperty<ButtonProps["iconProps"]>;
  loadingProps?: GenericProperty<ButtonProps["loadingProps"]>;
  iconProps?: GenericProperty<ButtonProps["iconProps"]>;
  colorScheme?: GenericProperty<keyof typeof colors>;
  buttonCloseProps?: GenericProperty<ButtonProps>;
  opacityColorScheme?: GenericProperty<number>;
  buttonProps?: GenericProperty<ButtonProps>;
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

export interface OverlayPropsNoGeneric
  extends EnhancedElementPropsNoGeneric<HTMLDivElement> {
  variant?: "ghost" | "solid" | "outline" | "link";
  loadingProps?: ButtonProps["loadingProps"];
  iconCloseProps?: ButtonProps["iconProps"];
  iconProps?: ButtonProps["iconProps"];
  colorScheme?: keyof typeof colors;
  buttonCloseProps?: ButtonProps;
  opacityColorScheme?: number;
  buttonProps?: ButtonProps;
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
