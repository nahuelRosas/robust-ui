import { EnhancedProps, EnhancedPropsNoGeneric } from "@robust-ui/constructor";
import { ButtonProps } from "@robust-ui/button";

export interface MenuProps extends EnhancedProps<HTMLMenuElement> {
  buttonProps?: ButtonProps;
}

export interface MenuPropsNoGeneric
  extends EnhancedPropsNoGeneric<HTMLMenuElement> {
  buttonProps?: ButtonProps;
}
