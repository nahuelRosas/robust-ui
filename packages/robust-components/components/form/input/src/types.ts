import {
  EnhancedElementPropsNoGeneric,
  EnhancedElementProps,
  GenericProperty,
} from "@robust-ui/constructor";
import { ButtonProps } from "@robust-ui/button";
import { SpanProps } from "@robust-ui/span";
import { colors } from "@robust-ui/theme";
import { Ticon } from "@robust-ui/icon";

export interface InputProps extends EnhancedElementProps<HTMLInputElement> {
  variant?: GenericProperty<"solid" | "outline" | "link" | "ghost">;
  buttonIconProps?: GenericProperty<ButtonProps["iconProps"]>;
  colorScheme?: GenericProperty<keyof typeof colors>;
  opacityColorScheme?: GenericProperty<number>;
  buttonProps?: GenericProperty<ButtonProps>;
  colorSchemeRaw?: GenericProperty<string>;
  textProps?: GenericProperty<SpanProps>;
  placeHolder?: GenericProperty<string>;
  isDisabled?: GenericProperty<boolean>;
  isRequired?: GenericProperty<boolean>;
  isInvalid?: GenericProperty<boolean>;
  buttonText?: GenericProperty<string>;
  isLoading?: GenericProperty<boolean>;
  altColor?: GenericProperty<boolean>;
  buttonIcon?: GenericProperty<Ticon>;
  isValid?: GenericProperty<boolean>;
}

export interface InputPropsNoGeneric
  extends EnhancedElementPropsNoGeneric<HTMLInputElement> {
  variant?: "solid" | "outline" | "link" | "ghost";
  buttonIconProps?: ButtonProps["iconProps"];
  colorScheme?: keyof typeof colors;
  opacityColorScheme?: number;
  buttonProps?: ButtonProps;
  colorSchemeRaw?: string;
  textProps?: SpanProps;
  placeHolder?: string;
  isDisabled?: boolean;
  isRequired?: boolean;
  isLoading?: boolean;
  isInvalid?: boolean;
  buttonText?: string;
  altColor?: boolean;
  buttonIcon?: Ticon;
  isValid?: boolean;
}
