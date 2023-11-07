import {
  EnhancedElementPropsNoGeneric,
  EnhancedElementProps,
  GenericProperty,
} from "@robust-ui/constructor";
import { SpanProps } from "@robust-ui/span";
import { colors } from "@robust-ui/theme";
import { SpinnerProps } from "@robust-ui/spinner";
import { Ticon, IconProps } from "@robust-ui/icon";
import { FlexProps } from "@robust-ui/flex";

export interface NextLinkProps extends EnhancedElementProps<HTMLAnchorElement> {
  colorScheme?: GenericProperty<keyof typeof colors>;
  colorSchemeRaw?: GenericProperty<string>;
  variant?: GenericProperty<"ghost" | "solid" | "outline" | "link">;
  opacityColorScheme?: GenericProperty<number>;
  textProps?: GenericProperty<SpanProps>;
  iconProps?: GenericProperty<{
    iconType: Ticon;
    iconPosition: "left" | "right";
    iconProps?: IconProps;
  }>;
  isLoading?: GenericProperty<boolean>;
  isDisabled?: GenericProperty<boolean>;
  loadingProps?: GenericProperty<{
    spinnerProps?: GenericProperty<SpinnerProps>;
    spinnerPosition?: GenericProperty<"left" | "right">;
  }>;
  hoverTextProps?: GenericProperty<{
    containerProps?: FlexProps;
    textProps?: SpanProps;
  }>;
  hoverText?: GenericProperty<string>;
  altColor?: GenericProperty<boolean>;
}

export interface NextLinkPropsNoGeneric
  extends EnhancedElementPropsNoGeneric<HTMLAnchorElement> {
  variant?: "ghost" | "solid" | "outline" | "link";
  colorScheme?: keyof typeof colors;
  opacityColorScheme?: number;
  textProps?: SpanProps;
  colorSchemeRaw?: string;
  isLoading?: boolean;
  isDisabled?: boolean;
  loadingProps?: {
    spinnerProps?: SpinnerProps;
    spinnerPosition?: "left" | "right";
  };
  iconProps?: {
    iconType: Ticon;
    iconPosition: "left" | "right";
    iconProps?: IconProps;
  };
  hoverTextProps?: {
    containerProps?: FlexProps;
    textProps?: SpanProps;
  };
  hoverText?: string;
  altColor?: boolean;
}
