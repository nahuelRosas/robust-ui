import {
  EnhancedElementPropsNoGeneric,
  EnhancedElementProps,
} from "@robust-ui/constructor";
import { ButtonProps } from "@robust-ui/button";

export interface MenuProps extends EnhancedElementProps<HTMLMenuElement> {
  buttonProps?: ButtonProps;
}

export interface MenuPropsNoGeneric
  extends EnhancedElementPropsNoGeneric<HTMLMenuElement> {
  buttonProps?: ButtonProps;
}
