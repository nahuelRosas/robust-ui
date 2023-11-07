import {
  EnhancedElementPropsNoGeneric,
  EnhancedElementProps,
  GenericProperty,
} from "@robust-ui/constructor";
import { ButtonProps } from "@robust-ui/button";

export interface MenuProps extends EnhancedElementProps<HTMLElement> {
  propsButton?: GenericProperty<ButtonProps>;
}
export interface MenuPropsNoGeneric
  extends EnhancedElementPropsNoGeneric<HTMLElement> {
  propsButton?: ButtonProps;
}
