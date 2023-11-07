import { ButtonProps } from "@robust-ui/button";
import {
  EnhancedElementProps,
  EnhancedElementPropsNoGeneric,
  GenericProperty,
} from "@robust-ui/constructor";
import { SpanProps } from "@robust-ui/span";
import { colors } from "@robust-ui/theme";

export interface CodeTextProps
  extends EnhancedElementProps<HTMLSpanElement | HTMLParagraphElement> {
  variant?: GenericProperty<"ghost" | "solid" | "outline" | "link">;
  copyButton?: GenericProperty<boolean>;
  copyButtonProps?: GenericProperty<ButtonProps>;
  colorScheme?: GenericProperty<keyof typeof colors>;
  opacityColorScheme?: GenericProperty<number>;
  textProps?: GenericProperty<SpanProps>;
  colorSchemeRaw?: GenericProperty<string>;
  isDisabled?: GenericProperty<boolean>;
  altColor?: GenericProperty<boolean>;
}

export interface CodeTextPropsNoGeneric
  extends EnhancedElementPropsNoGeneric<
    HTMLSpanElement | HTMLParagraphElement
  > {
  variant?: "ghost" | "solid" | "outline" | "link";
  copyButton?: boolean;
  copyButtonProps?: ButtonProps;
  colorScheme?: keyof typeof colors;
  opacityColorScheme?: number;
  textProps?: SpanProps;
  colorSchemeRaw?: string;
  isDisabled?: boolean;
  altColor?: boolean;
}

export type ForwardRefExoticCodeText = Omit<CodeTextProps, "ref"> &
  React.RefAttributes<unknown> &
  CodeTextProps;
