import {
  ButtonProps,
  EnhancedElementProps,
  EnhancedElementPropsNoGeneric,
  GenericProperty,
  SpanProps,
  Ticon,
  colors,
} from "@robust-ui/nextjs-components";

export interface InputProps extends EnhancedElementProps<HTMLInputElement> {
  variant?: GenericProperty<"solid" | "outline" | "link" | "ghost">;
  buttonIconProps?: GenericProperty<ButtonProps["iconProps"]>;
  colorScheme?: GenericProperty<keyof typeof colors>;
  opacityColorScheme?: GenericProperty<number>;
  buttonProps?: GenericProperty<ButtonProps>;
  value?: GenericProperty<string | number>;
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
  type?: GenericProperty<string>;
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
  type?: string;
}

export type ForwardRefExoticInput = Omit<InputProps, "ref"> &
  React.RefAttributes<unknown> &
  InputProps;

type C = InputPropsNoGeneric["value"];
