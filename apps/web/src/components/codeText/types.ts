import {
  EnhancedElementProps,
  EnhancedElementPropsNoGeneric,
  GenericProperty,
  colors,
} from "@robust-ui/nextjs-components";
import { ButtonProps } from "../button";
import { SpanProps } from "../span";

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
