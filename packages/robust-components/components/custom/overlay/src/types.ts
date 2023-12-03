import {
  EnhancedElementPropsNoGeneric,
  EnhancedElementProps,
  GenericProperty,
} from "@robust-ui/constructor";
import { ButtonProps } from "@robust-ui/button";
import { CardProps } from "@robust-ui/card";

export interface OverlayProps extends EnhancedElementProps<HTMLDivElement> {
  closeOnOverlayClick?: GenericProperty<boolean>;
  iconCloseProps?: ButtonProps["iconProps"];
  iconOpenProps?: ButtonProps["iconProps"];
  paragraphCard?: CardProps["paragraph"];
  labelCard?: CardProps["label"];
  buttonCloseProps?: ButtonProps;
  buttonOpenProps?: ButtonProps;
  cardProps?: CardProps;
}

export interface OverlayPropsNoGeneric
  extends EnhancedElementPropsNoGeneric<HTMLDivElement> {
  closeOnOverlayClick?: boolean;
}
