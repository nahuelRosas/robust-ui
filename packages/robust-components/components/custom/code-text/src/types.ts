import { ButtonProps } from "@robust-ui/button";
import { SpanProps } from "@robust-ui/span";
import {
  EnhancedElementPropsNoGeneric,
  EnhancedElementProps,
  GenericProperty,
} from "@robust-ui/constructor";

export interface CodeTextProps extends EnhancedElementProps<HTMLDivElement> {
  copyButton?: GenericProperty<boolean>;
  copyButtonProps?: GenericProperty<ButtonProps>;
  textProps?: GenericProperty<SpanProps>;
  isDisabled?: GenericProperty<boolean>;
}

export interface CodeTextPropsNoGeneric
  extends EnhancedElementPropsNoGeneric<HTMLDivElement> {
  copyButton?: boolean;
  isDisabled?: boolean;
}
