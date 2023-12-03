import {
  EnhancedElementProps,
  GenericProperty,
  EnhancedElementPropsNoGeneric,
  SpanProps,
} from "@robust-ui/nextjs-components";

export interface LabelProps extends EnhancedElementProps<HTMLLabelElement> {
  placement?: GenericProperty<"top" | "bottom">;
  isRequired?: GenericProperty<boolean>;
  isFocus?: GenericProperty<boolean>;
  isHover?: GenericProperty<boolean>;
  isDisabled?: GenericProperty<boolean>;
  isInvalid?: GenericProperty<boolean>;
  isValid?: GenericProperty<boolean>;
  text?: GenericProperty<string>;
  for?: GenericProperty<string>;
  textProps?: SpanProps;
}

export interface LabelPropsNoGeneric
  extends EnhancedElementPropsNoGeneric<HTMLLabelElement> {
  placement?: "top" | "bottom";
  placeholder?: string;
  isRequired?: boolean;
  isFocus?: boolean;
  isHover?: boolean;
  isDisabled?: boolean;
  isInvalid?: boolean;
  isValid?: boolean;
  text?: string;
  for?: string;
}
