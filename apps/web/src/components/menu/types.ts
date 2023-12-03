import {
  EnhancedElementPropsNoGeneric,
  EnhancedElementProps,
} from "@robust-ui/nextjs-components";

import { ButtonProps } from "../button";

export interface MenuProps extends EnhancedElementProps<HTMLMenuElement> {
  buttonProps?: ButtonProps;
}

export interface MenuPropsNoGeneric
  extends EnhancedElementPropsNoGeneric<HTMLMenuElement> {
  buttonProps?: ButtonProps;
}
