import { IconProps, Ticon } from "@robust-ui/icon";
import { SpinnerProps } from "@robust-ui/spinner";
import { FlexProps } from "@robust-ui/flex";
import { SpanProps } from "@robust-ui/span";
import { colors } from "@robust-ui/theme";
import {
  EnhancedElementPropsNoGeneric,
  EnhancedElementProps,
  GenericProperty,
} from "@robust-ui/constructor";

export interface ButtonProps extends EnhancedElementProps<HTMLButtonElement> {
  variant?: GenericProperty<"ghost" | "solid" | "outline" | "link">;
  colorScheme?: GenericProperty<keyof typeof colors>;
  opacityColorScheme?: GenericProperty<number>;
  colorSchemeRaw?: GenericProperty<string>;
  textProps?: GenericProperty<SpanProps>;
  isDisabled?: GenericProperty<boolean>;
  isLoading?: GenericProperty<boolean>;
  hoverText?: GenericProperty<string>;
  altColor?: GenericProperty<boolean>;
  iconProps?: GenericProperty<{
    iconPosition?: "left" | "right";
    iconProps?: IconProps;
    iconType?: Ticon;
  }>;
  loadingProps?: GenericProperty<{
    spinnerPosition?: "left" | "right";
    spinnerProps?: SpinnerProps;
  }>;
  hoverTextProps?: GenericProperty<{
    containerProps?: FlexProps;
    textProps?: SpanProps;
  }>;
}

export interface ButtonPropsNoGeneric
  extends EnhancedElementPropsNoGeneric<HTMLButtonElement> {
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
    iconType?: Ticon;
    iconPosition?: "left" | "right";
    iconProps?: IconProps;
  };
  hoverTextProps?: {
    containerProps?: FlexProps;
    textProps?: SpanProps;
  };
  hoverText?: string;
  altColor?: boolean;
}
